const BREVO_API_BASE = "https://api.brevo.com/v3";
const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY;
const BREVO_LIST_ID = import.meta.env.VITE_BREVO_LIST_ID || "2";

export interface BrevoContact {
  email: string;
  createdAt: string;
  modifiedAt: string;
  attributes: Record<string, string | number | boolean>;
}

export interface BrevoContactCount {
  count: number;
}

export interface BrevoError {
  message: string;
  code: string;
}

export class BrevoApiError extends Error {
  constructor(public code: string, message: string) {
    super(message);
    this.name = "BrevoApiError";
  }
}

async function brevoFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${BREVO_API_BASE}${endpoint}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "api-key": BREVO_API_KEY!,
      ...options.headers,
    },
  });

  if (!response.ok) {
    let errorMessage = "Une erreur est survenue";
    let errorCode = "UNKNOWN_ERROR";

    try {
      const errorData: BrevoError = await response.json();
      errorMessage = errorData.message;
      errorCode = errorData.code;

      if (errorCode === "duplicate_parameter" || response.status === 400) {
        errorMessage =
          "Cet email est déjà enregistré dans notre liste d'attente";
        errorCode = "EMAIL_EXISTS";
      } else if (response.status === 429) {
        errorMessage =
          "Trop de tentatives. Veuillez réessayer dans quelques minutes";
        errorCode = "RATE_LIMITED";
      }
    } catch {
      if (response.status === 404) {
        errorMessage = "Service temporairement indisponible";
        errorCode = "SERVICE_UNAVAILABLE";
      }
    }

    throw new BrevoApiError(errorCode, errorMessage);
  }

  return response.json();
}

export const brevoApi = {
  async addContact(email: string): Promise<BrevoContact> {
    console.log('addContact appelé, BREVO_API_KEY:', !!BREVO_API_KEY);
    
    // Si pas de clé API configurée, simulation pour développement
    if (!BREVO_API_KEY) {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Vérifier si l'email existe déjà
      const savedEmails = JSON.parse(
        localStorage.getItem("brevo_emails") || "[]"
      );
      if (savedEmails.includes(email)) {
        throw new BrevoApiError(
          "EMAIL_EXISTS",
          "Cet email est déjà enregistré dans notre liste d'attente"
        );
      }

      // Ajouter l'email et incrémenter le compteur
      savedEmails.push(email);
      localStorage.setItem("brevo_emails", JSON.stringify(savedEmails));
      localStorage.setItem(
        "brevo_subscriber_count",
        savedEmails.length.toString()
      );

      return {
        email,
        createdAt: new Date().toISOString(),
        modifiedAt: new Date().toISOString(),
        attributes: {},
      };
    }

    // Créer le contact dans Brevo
    await brevoFetch<{ id: number }>("/contacts", {
      method: "POST",
      body: JSON.stringify({
        email,
        listIds: [parseInt(BREVO_LIST_ID)],
        attributes: {
          PRENOM: email.split("@")[0],
          SOURCE: "Landing Page ConnectStar",
          DATE_INSCRIPTION: new Date().toISOString().split("T")[0],
        },
        updateEnabled: false,
      }),
    });

    // Aussi sauvegarder localement pour les avatars
    const savedEmails = JSON.parse(localStorage.getItem("brevo_emails") || "[]");
    if (!savedEmails.includes(email)) {
      savedEmails.push(email);
      localStorage.setItem("brevo_emails", JSON.stringify(savedEmails));
    }

    return {
      email,
      createdAt: new Date().toISOString(),
      modifiedAt: new Date().toISOString(),
      attributes: {},
    };
  },

  async getContactCount(): Promise<BrevoContactCount> {
    console.log('getContactCount appelé, BREVO_API_KEY:', !!BREVO_API_KEY, 'BREVO_LIST_ID:', BREVO_LIST_ID);
    
    // Si pas de clé API configurée, retourner 0 pour commencer
    if (!BREVO_API_KEY) {
      await new Promise((resolve) => setTimeout(resolve, 800));
      const savedCount = localStorage.getItem("brevo_subscriber_count");
      console.log('Mode localStorage, savedCount:', savedCount);
      return { count: savedCount ? parseInt(savedCount, 10) : 0 };
    }

    // Récupérer le nombre de contacts dans la liste spécifique
    console.log('Appel API Brevo pour compter les contacts...');
    try {
      const response = await brevoFetch<{ 
        totalBlacklisted: number;
        totalSubscribers: number;
        uniqueSubscribers: number;
      }>(
        `/contacts/lists/${BREVO_LIST_ID}`
      );
      console.log('Réponse API count:', response);
      return { count: response.totalSubscribers || response.uniqueSubscribers || 0 };
    } catch (error) {
      console.error('Erreur API count:', error);
      try {
        const contactsResponse = await brevoFetch<{ contacts: Array<{ email: string }> }>(
          `/contacts?listIds=${BREVO_LIST_ID}&limit=50`
        );
        return { count: contactsResponse.contacts?.length || 0 };
      } catch {
        throw error;
      }
    }
  },

  async getRecentContacts(): Promise<BrevoContact[]> {
    console.log('getRecentContacts appelé, BREVO_API_KEY:', !!BREVO_API_KEY);
    
    // Si pas de clé API configurée, utiliser localStorage
    if (!BREVO_API_KEY) {
      const savedEmails = JSON.parse(localStorage.getItem("brevo_emails") || "[]");
      console.log('Mode localStorage, savedEmails:', savedEmails);
      return savedEmails.slice(0, 4).map((email: string) => ({
        email,
        createdAt: new Date().toISOString(),
        modifiedAt: new Date().toISOString(),
        attributes: {},
      }));
    }

    // Récupérer les contacts récents de la liste Brevo
    console.log('Appel API Brevo pour récupérer les contacts...');
    try {
      const response = await brevoFetch<{ contacts: Array<{ email: string; createdAt: string; modifiedAt: string; attributes: Record<string, string | number | boolean> }> }>(
        `/contacts?listIds=${BREVO_LIST_ID}&limit=4&sort=desc`
      );
      
      console.log('Réponse API contacts:', response);
      return response.contacts.map(contact => ({
        email: contact.email,
        createdAt: contact.createdAt,
        modifiedAt: contact.modifiedAt,
        attributes: contact.attributes,
      }));
    } catch (error) {
      console.error('Erreur lors de la récupération des contacts:', error);
      return [];
    }
  },

  async sendWelcomeEmail(email: string): Promise<void> {
    if (!BREVO_API_KEY) {
      console.log("Email de bienvenue simulé pour:", email);
      return;
    }

    // Envoyer un email transactionnel de bienvenue
    await brevoFetch<{ messageId: string }>("/smtp/email", {
      method: "POST",
      body: JSON.stringify({
        sender: {
          name: "ConnectStar",
          email: "connectstart.contact@gmail.com",
        },
        to: [{ email }],
        subject: "Bienvenue dans l'aventure ConnectStar ! 🎉",
        htmlContent: `
          <h1>Merci pour votre inscription !</h1>
          <p>Vous êtes maintenant dans notre liste d'attente pour ConnectStar, la révolution de la messagerie chrétienne.</p>
          <p><strong>Ce qui vous attend :</strong></p>
          <ul>
            <li>Accès prioritaire à la version bêta</li>
            <li>Fonctionnalités exclusives</li>
            <li>Badge "Founding Member"</li>
          </ul>
          <p>Nous vous tiendrons informé(e) des prochaines étapes.</p>
          <p>Que Dieu vous bénisse ! 🙏</p>
        `,
        tags: ["welcome", "landing-page"],
      }),
    });
  }
};