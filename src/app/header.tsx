"use client";
import Image from 'next/image';
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { FormContext } from "./context";
import { useContext } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
    const {data} = useContext(FormContext);

    const title = usePathname() === '/result' && data.name 
        ? `Olá, ${data.name}` 
        : 'Use uma grana que já é sua e saia do aperto.'

    return (
        <div className="w-full gap-4 flex flex-col ">
            <div className="logo">
                <Image
                src="/logoIcon.svg"
                alt="logo"
                width={20}
                height={20}
                className="text-white "
                />
                SMILE Co.
            </div>
            <div className="header"> 
                <div className="header__headline justify-end flex flex-col">
                   { title }
                </div>
                <div className="flex flex-col gap-3 justify-end ">
                <div className="header__info-title">
                    <RiMoneyDollarBoxLine size={20} color="#20858c" />
                    Saque aniversário
                </div>
                <div className="header__info-subtitle">
                    <div className="h-[90%] w-[1px] bg-[#20858c]" />
                    <span> <b>Insira seus dados</b> e verifique o quanto você poderá receber! </span>
                </div>
                </div>
            </div>
        </div>
    )
}