import React from "react";
import { useBevoCount } from "../hooks/useBevoCount";

interface DynamicCounterProps {
  className?: string;
  fallbackCount?: number;
}

const DynamicCounter: React.FC<DynamicCounterProps> = ({
  className = "text-3xl font-bold text-blue-600",
  fallbackCount = 2847,
}) => {
  const { data: countData, isLoading, error } = useBevoCount();

  const count = countData?.count || 0;

  // Debug : afficher les données dans la console
  console.log("DynamicCounter Debug:", { countData, count, error, isLoading });

  // Si erreur ou pas de données réelles, utiliser le fallback
  const displayCount = error || count === 0 ? fallbackCount : count;

  if (isLoading) {
    return <span className={className}>...</span>;
  }

  return (
    <span className={className}>{displayCount.toLocaleString("fr-FR")}</span>
  );
};

export default DynamicCounter;
