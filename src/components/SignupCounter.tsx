import React, { useMemo } from 'react';
import { useBevoCount } from '../hooks/useBevoCount';

const SignupCounter: React.FC = () => {
  const { data: countData, isLoading, error } = useBevoCount();

  const avatars = useMemo(() => {
    const names = ['Sarah Martin', 'Pierre Dubois', 'Marie Rousseau', 'Jean Moreau'];
    return names.map((name, index) => {
      const initials = name.split(' ').map(n => n[0]).join('');
      const colors = ['bg-blue-500', 'bg-purple-500', 'bg-green-500', 'bg-orange-500'];
      
      return {
        name,
        initials,
        color: colors[index % colors.length],
        src: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${colors[index % colors.length].replace('bg-', '').replace('-500', '')}&color=fff&size=32`
      };
    });
  }, []);

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
                {avatar.initials}
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

  const count = countData?.total || 0;
  const displayCount = isLoading ? '...' : count.toLocaleString('fr-FR');

  return (
    <div className="mt-8 text-center">
      <p className="text-sm text-gray-600 mb-3">
        Rejoignez{' '}
        <span className="font-semibold text-blue-600">
          {displayCount}
        </span>{' '}
        autres personnes déjà inscrites
      </p>
      <div className="flex items-center justify-center space-x-2">
        <div className="flex -space-x-2">
          {avatars.map((avatar, index) => (
            <img
              key={index}
              src={avatar.src}
              alt={avatar.name}
              className="w-8 h-8 rounded-full border-2 border-white object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLDivElement;
                if (fallback) {
                  fallback.style.display = 'flex';
                }
              }}
            />
          ))}
          <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center">
            <span className="text-xs text-gray-600 font-medium">
              {count > 999 ? '+1K' : `+${Math.max(0, count - 4)}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupCounter;