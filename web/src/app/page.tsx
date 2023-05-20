import { cookies } from "next/headers";

import { Blur } from "@/components/Blur";
import { Copyright } from "@/components/Copyright";
import { EmptyMemories } from "@/components/EmptyMemories";
import { Hero } from "@/components/Hero";
import { SingIn } from "@/components/SingIn";
import { Stripes } from "@/components/Stripes";
import { Profile } from "@/components/Profile";

export default function Home() {
  const isAuthenticated = cookies().has("token");

  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-starts.svg)] bg-cover px-28 py-16">
        <Blur />

        <Stripes />

        {isAuthenticated ? <Profile /> : <SingIn />}

        <Hero />

        <Copyright />
      </div>

      {/* Right */}
      <div className="flex flex-col bg-[url(../assets/bg-starts.svg)] bg-cover p-16">
        <EmptyMemories />
      </div>
    </main>
  );
}
