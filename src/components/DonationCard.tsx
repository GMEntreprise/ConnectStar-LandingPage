import React from 'react';
import clsx from 'clsx';
import { Check } from 'lucide-react';

interface DonationCardProps {
  amount: number;
  impact: string;
  selected: boolean;
  onClick: () => void;
  currency?: string;
}

const DonationCard: React.FC<DonationCardProps> = ({
  amount,
  impact,
  selected,
  onClick,
  currency = '€',
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'relative p-6 rounded-2xl transition-all duration-300 text-left w-full',
        'border-2 transform hover:-translate-y-1',
        selected
          ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-amber-50 shadow-lg scale-105'
          : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
      )}
    >
      {selected && (
        <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
          <Check className="w-5 h-5 text-white" />
        </div>
      )}

      <div className="text-3xl font-bold text-gray-900 mb-2">
        {amount}{currency}
      </div>

      <p className="text-sm text-gray-600">
        {impact}
      </p>
    </button>
  );
};

export default DonationCard;
