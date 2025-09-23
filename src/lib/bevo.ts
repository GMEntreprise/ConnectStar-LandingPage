const BEVO_API_BASE = import.meta.env.VITE_BEVO_API_URL || 'https://api.bevo.dev';
const BEVO_API_KEY = import.meta.env.VITE_BEVO_API_KEY;

export interface BevoSubscriber {
  email: string;
  subscribed_at: string;
  status: 'active' | 'unsubscribed';
}

export interface BevoSubscriberCount {
  total: number;
}

export interface BevoError {
  message: string;
  code: string;
}

export class BevoApiError extends Error {
  constructor(public code: string, message: string) {
    super(message);
    this.name = 'BevoApiError';
  }
}

async function bevoFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = `${BEVO_API_BASE}${endpoint}`;
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${BEVO_API_KEY}`,
      ...options.headers,
    },
  });

  if (!response.ok) {
    let errorMessage = 'Une erreur est survenue';
    let errorCode = 'UNKNOWN_ERROR';

    try {
      const errorData: BevoError = await response.json();
      errorMessage = errorData.message;
      errorCode = errorData.code;
      
      if (errorCode === 'EMAIL_EXISTS') {
        errorMessage = 'Cet email est déjà enregistré dans notre liste d\'attente';
      } else if (response.status === 429) {
        errorMessage = 'Trop de tentatives. Veuillez réessayer dans quelques minutes';
        errorCode = 'RATE_LIMITED';
      }
    } catch {
      if (response.status === 404) {
        errorMessage = 'Service temporairement indisponible';
        errorCode = 'SERVICE_UNAVAILABLE';
      }
    }

    throw new BevoApiError(errorCode, errorMessage);
  }

  return response.json();
}

export const bevoApi = {
  async addSubscriber(email: string): Promise<BevoSubscriber> {
    // Si pas de clé API configurée, simulation pour développement
    if (!BEVO_API_KEY) {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simuler parfois une erreur d'email existant
      if (Math.random() < 0.2) {
        throw new BevoApiError('EMAIL_EXISTS', 'Cet email est déjà enregistré dans notre liste d\'attente');
      }
      
      return {
        email,
        subscribed_at: new Date().toISOString(),
        status: 'active',
      };
    }

    return bevoFetch<BevoSubscriber>('/subscribers', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  },

  async getSubscriberCount(): Promise<BevoSubscriberCount> {
    // Si pas de clé API configurée, simulation pour développement
    if (!BEVO_API_KEY) {
      await new Promise(resolve => setTimeout(resolve, 800));
      return { total: 2847 + Math.floor(Math.random() * 10) };
    }

    return bevoFetch<BevoSubscriberCount>('/subscribers/count');
  },
};