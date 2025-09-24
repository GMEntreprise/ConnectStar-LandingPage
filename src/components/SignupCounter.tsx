import React, { useMemo } from "react";
import { useBevoCount } from "../hooks/useBevoCount";
import { useBrevoContacts } from "../hooks/useBrevoContacts";

const SignupCounter: React.FC = () => {
  const { data: countData, isLoading, error } = useBevoCount();
  const { data: contactsData } = useBrevoContacts();

  // Debug : afficher les données dans la console
  console.log("SignupCounter Debug:", {
    countData,
    contactsData,
    contactsLength: contactsData?.length,
    error,
    isLoading,
  });

  const avatars = useMemo(() => {
    // Utiliser les vrais contacts Brevo si disponibles
    const contacts = contactsData || [];
    const colors = ["3b82f6", "8b5cf6", "10b981", "f59e0b", "ef4444", "06b6d4"];

    return contacts.slice(0, 4).map((contact, index) => {
      // Utiliser l'email pour générer un nom affiché
      const username = contact.email.split("@")[0];
      const displayName = username.charAt(0).toUpperCase() + username.slice(1);

      return {
        email: contact.email,
        displayName,
        color: colors[index % colors.length],
        src: `https://ui-avatars.com/api/?name=${encodeURIComponent(
          displayName
        )}&background=${
          colors[index % colors.length]
        }&color=fff&size=32&rounded=true`,
      };
    });
  }, [contactsData]);

  if (error) {
    return (
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600 mb-3">
          Rejoignez des milliers d'autres personnes déjà inscrites
        </p>
        <div className="flex items-center justify-center space-x-2">
          <div className="flex -space-x-2">
            {avatars.map((avatar, index) => (
              <div
                key={index}
                className={`w-8 h-8 rounded-full border-2 border-white ${avatar.color} flex items-center justify-center text-white text-xs font-medium`}
              >
                {avatar.displayName}
              </div>
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center">
              <span className="text-xs text-gray-600 font-medium">+∞</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const count = countData?.count || 0;
  const displayCount = isLoading ? "..." : count.toLocaleString("fr-FR");

  return (
    <div className="mt-8 text-center">
      <p className="text-sm text-gray-600 mb-3">
        Rejoignez{" "}
        <span className="font-semibold text-blue-600">{displayCount}</span>{" "}
        autres personnes déjà inscrites
      </p>
      <div className="flex items-center justify-center space-x-2">
        <div className="flex -space-x-2">
          {avatars.map((avatar, index) => (
            <img
              key={index}
              src={avatar.src}
              alt={avatar.displayName}
              className="w-8 h-8 rounded-full border-2 border-white object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const fallback = target.nextElementSibling as HTMLDivElement;
                if (fallback) {
                  fallback.style.display = "flex";
                }
              }}
            />
          ))}
          <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center">
            <span className="text-xs text-gray-600 font-medium">
              {count > 999 ? "+1K" : `+${Math.max(0, count - 4)}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupCounter;
