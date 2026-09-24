import { useState } from "react";
import { HomeIcon, SearchIcon, LibraryIcon, ProfileIcon } from "./icons";

type NavKey = "home" | "explore" | "library" | "profile";

const NAV_ITEMS: { key: NavKey; label: string; Icon: typeof HomeIcon }[] = [
  { key: "home", label: "Home", Icon: HomeIcon },
  { key: "explore", label: "Explore", Icon: SearchIcon },
  { key: "library", label: "Library", Icon: LibraryIcon },
  { key: "profile", label: "Profile", Icon: ProfileIcon },
];

export default function BottomNav() {
  const [active, setActive] = useState<NavKey>("home");

  return (
    <nav className="flex items-center justify-around bg-[#181820] py-3">
      {NAV_ITEMS.map(({ key, label, Icon }) => {
        const isActive = active === key;
        return (
          <button
            key={key}
            type="button"
            onClick={() => setActive(key)}
            className={`flex flex-col items-center gap-1 px-3 text-xs transition-colors ${
              isActive ? "text-white" : "text-[#A1A1AA]"
            }`}
          >
            <Icon className="h-6 w-6" />
            <span className="font-medium">{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
