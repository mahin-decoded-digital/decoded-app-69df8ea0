import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function Navbar({ className }: { className?: string }) {
  return (
    <nav className={cn("w-full bg-white border-b border-gray-200 h-16 flex items-center px-4 md:px-6", className)}>
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          {/* Fallback to clean text since S3 logo URL was not explicitly provided in context */}
          <span className="font-bold text-xl text-gray-900 tracking-tight">
            Hello World Instant
          </span>
        </Link>
      </div>
    </nav>
  );
}