import { ArrowLeft, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface NotFoundProps {
  onBack?: () => void;
}

const NotFound: React.FC<NotFoundProps> = ({ onBack }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate("/");
    }
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl font-bold text-white">404</span>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Page non trouvée
          </h1>
          
          <p className="text-gray-600 mb-8">
            La page que vous recherchez n'existe pas ou a été déplacée. 
            Retournez à l'accueil pour découvrir ConnectStar.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={handleHome}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
          >
            <Home className="w-5 h-5" />
            <span>Retour à l'accueil</span>
          </button>
          
          <button
            onClick={handleBack}
            className="w-full bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-full hover:bg-gray-50 transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Page précédente</span>
          </button>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 italic">
            "Car là où deux ou trois sont rassemblés en mon nom, je suis au milieu d'eux." - Matthieu 18:20
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;