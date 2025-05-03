import type { Metadata } from "next";
import "./globals.css";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Consulta saque aniversário"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="flex flex-col min-h-screen overflow-hidden justify-center w-full items-center"
      >
        <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center bg-diagonal-left"></div>

        <div className="absolute inset-0 bg-diagonal-right"></div>
        <div className="relative z-10 flex flex-col w-[50%] gap-4">
          <div className="flex gap-1 font-bold text-white items-center text-sm px-4">
            <Image
              src="/logoIcon.svg"
              alt="logo"
              width={20}
              height={20}
              className="text-white"
            />
            SMILE Co.
          </div>
          <div className="flex justify-around px-4"> 
            <div className="italic text-white text-4xl font-bold w-[70%]">Use uma grana que já é sua e saia do aperto.</div>
            <div>
              <div className="uppercase text-white font-bold text-sm flex gap-2">
                <Image
                  src="/logoIcon.svg"
                  alt="logo"
                  width={20}
                  height={20}
                  className="text-white"
                />
                Saque aniversário
              </div>
              <div className="flex gap-2 text-white text-sm">
                <div className="w-px bg-gray-300 " />
                <span> <b>Insira seus dados</b> e verifique o quanto você poderá receber </span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl min-h-[200px] flex justify-around items-center items-center">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
