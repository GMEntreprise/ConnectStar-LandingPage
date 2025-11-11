import React from 'react';

interface ImpactCounterProps {
  count: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const ImpactCounter: React.FC<ImpactCounterProps> = ({
  count,
  prefix,
  suffix,
  className = 'text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600',
}) => {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex flex-col items-center">
        <div className="flex items-baseline space-x-3">
          {prefix && (
            <span className="text-lg text-gray-600 font-medium">{prefix}</span>
          )}
          <span className={className}>{count.toLocaleString('fr-FR')}</span>
          {suffix && (
            <span className="text-lg text-gray-600 font-medium">{suffix}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImpactCounter;
