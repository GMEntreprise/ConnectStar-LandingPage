import React from 'react';

interface HelloAssoEmbedProps {
  formUrl?: string;
  className?: string;
}

const HelloAssoEmbed: React.FC<HelloAssoEmbedProps> = ({
  formUrl = '',
  className = '',
}) => {
  if (!formUrl) {
    return (
      <div className={`bg-blue-50 border-2 border-dashed border-blue-300 rounded-2xl p-12 text-center ${className}`}>
        <h3 className="text-xl font-semibold text-blue-900 mb-4">
          🎯 Formulaire HelloAsso à venir
        </h3>
        <p className="text-blue-700 mb-6">
          Une fois votre association créée et votre formulaire HelloAsso configuré,
          ajoutez l'URL ici pour accepter les dons.
        </p>
        <div className="bg-white rounded-lg p-4 text-left max-w-2xl mx-auto">
          <p className="text-sm text-gray-700 mb-2 font-semibold">
            📋 Étapes pour activer HelloAsso :
          </p>
          <ol className="text-sm text-gray-600 space-y-2 list-decimal list-inside">
            <li>Créer une association loi 1901 pour ConnectStar</li>
            <li>Créer un compte sur <a href="https://www.helloasso.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">helloasso.com</a></li>
            <li>Créer un formulaire de don</li>
            <li>Copier l'URL du formulaire et l'ajouter dans le composant HelloAssoEmbed</li>
          </ol>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl shadow-xl ${className}`}>
      <iframe
        id="haWidget"
        src={formUrl}
        style={{
          width: '100%',
          height: '750px',
          border: 'none',
        }}
        title="Formulaire de don HelloAsso"
        allowFullScreen
      />
    </div>
  );
};

export default HelloAssoEmbed;
