import { getUser } from "@/lib/auth";
import Image from "next/image";

export const Profile = () => {
  const { name, avatarUrl } = getUser();

  return (
    <div className="flex items-center gap-3 text-left transition-colors">
      <Image
        src={avatarUrl}
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 rounded-full"
      />

      <p className="max-w-[140px] text-sm leading-snug">
        {name}
        <a href="#" className="block text-xs text-red-400 hover:text-red-300">
          Quero sair
        </a>
      </p>
    </div>
  );
};
