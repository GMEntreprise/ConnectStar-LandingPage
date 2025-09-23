import React from "react";
import clsx from "clsx";

type Stat = {
  value: React.ReactNode; // string | number | component (ex: <DynamicCounter />)
  label: string;
};

type StatsBarProps = {
  stats: Stat[];
  className?: string;
  showBorder?: boolean;
  gridCols?: string; // ex: "grid-cols-2 md:grid-cols-4"
};

export function StatsBar({
  stats,
  className,
  showBorder = false,
  gridCols = "grid-cols-2 md:grid-cols-4",
}: StatsBarProps) {
  return (
    <div
      className={clsx(
        showBorder && "border-t border-gray-800 pt-8 mb-8",
        className
      )}
    >
      <div className={clsx("grid gap-8 text-center", gridCols)}>
        {stats.map((stat, i) => (
          <div key={i}>
            <div className="text-2xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm opacity-80">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
