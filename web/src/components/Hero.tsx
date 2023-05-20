import Image from "next/image";

import NlwLogo from "../assets/nlw-spacetime-logo.svg";

export const Hero = () => {
  return (
    <div className="space-y-5">
      <Image src={NlwLogo} alt="NLW Spacetime Logo" />

      <div className="max-w-[420px]">
        <h1 className="mt-5 text-5xl font-bold leading-tight text-gray-50">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>

      <a
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt uppercase leading-none text-black hover:bg-green-600"
        href=""
      >
        CADASTRAR LEMBRANÇA
      </a>
    </div>
  );
};
