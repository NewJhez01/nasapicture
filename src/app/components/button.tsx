import { ReactNode } from "react";

export function Button({ children, onClick }: { children: ReactNode, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="
        px-6 py-3
        bg-gradient-to-r from-indigo-500 to-purple-500
        text-white font-semibold
        rounded-lg
        shadow-md
        hover:from-indigo-600 hover:to-purple-600
        focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50
        active:scale-95
        transition-all duration-150
      "
    >
      {children}
    </button>
  );
}

