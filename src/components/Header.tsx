import { BellIcon } from "./icons";

interface HeaderProps {
  name: string;
  hasNotification?: boolean;
}

export default function Header({ name, hasNotification = true }: HeaderProps) {
  return (
    <header className="flex items-start justify-between px-5 pt-6">
      <div>
        <p className="text-sm text-[#A1A1AA]">Good evening,</p>
        <h1 className="mt-1 text-3xl font-bold text-white">{name}</h1>
      </div>

      <button
        type="button"
        aria-label="Notifications"
        className="relative rounded-full p-2 text-white transition-colors hover:bg-white/5"
      >
        <BellIcon className="h-6 w-6" />
        {hasNotification && (
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        )}
      </button>
    </header>
  );
}
