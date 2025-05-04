
"use client";

import "./globals.css";
import { useState } from "react";
import { FormProvider } from "./contextProvider";
import Header from "./header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [data, setData] = useState({
    name: "", value: ""
  });

  return (
    <html lang="en">
      <body
        className="flex flex-col min-h-screen overflow-hidden justify-center w-full items-center"
      >
        <section className="hero-diagonal">
          <div className="hero__background w-full md:w-[50%]" >
            <div className=" z-10 flex flex-col gap-4">
              <FormProvider>
                <Header />
                <div className="bg-white rounded-xl w-full min-h-[200px] flex justify-around items-center items-center mt-6">
                    {children}
                </div>
              </FormProvider>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
