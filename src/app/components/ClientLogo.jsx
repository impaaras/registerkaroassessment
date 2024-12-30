"use client";

import { LucideIcon } from "lucide-react";

export default function ClientLogo({ Icon, color }) {
  return (
    <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-transform hover:scale-110">
      <Icon className={`w-8 h-8 ${color}`} />
    </div>
  );
}
