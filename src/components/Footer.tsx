'use client'
import Link from "next/link";
import Image from "next/image";
import visa from "@/components/assets/images/visa.svg";
import image2 from "@/components/assets/images/twobank.svg";
import gpay from "@/components/assets/images/gpay.svg";
import pay from "@/components/assets/images/pay.svg";
import p from "@/components/assets/images/p.svg";
import bitcon from "@/components/assets/images/bitcone.svg";
import Etherium from "@/components/assets/images/Etherium.svg";

const paymentOptions: string[] = [
    visa,
    image2,
    gpay,
    pay,
    p,
    bitcon,
    Etherium
];

export const Footer = () => {
    return (
        <>
            <footer className="px-2 py-4 border-t mt-4">
                <div className="flex justify-between items-center flex-wrap gap-4">
                    <div className="text-sm flex space-x-2">
                        <div>© 2023 Arman. </div>
                        <Link href={'/makeyourburger'} className={'hover:underline'}>Make Your Burger</Link>
                        <Link href="/privicypolicy" className={'border-l-2 border-gray-900 px-2 hover:underline'}>Privacy Policy</Link>
                        <Link href="/termsandcondition" className={'border-l-2 border-gray-900 px-2 hover:underline'}>Terms &
                            Conditions</Link>
                    </div>
                    <div className=" text-sm flex space-x-2">
                        {paymentOptions.map((image, index) => (
                            <div key={index}>
                                <Link href="/">
                                    <Image src={image} alt={`Image ${index}`} width={35}/>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </footer>
        </>
    );
};
