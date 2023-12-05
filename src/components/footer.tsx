'use client'
import Link from "next/link";
import Image from "next/image";
import {imageArray} from '@/components/carddata'
import {usePathname, useRouter} from "next/navigation";
export const Myfooter = () => {
    const pathname = usePathname()
    const router = useRouter()
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="  px-2  py-4   border-t mt-4">
                <div className="  flex justify-between items-center flex-wrap gap-4">
                    <div className=" text-sm flex space-x-2">
                        <div>{`${currentYear}`}</div>
                        <Link href={'/makeyourburger'}>Make Your Burger</Link>
                        <Link href="/privicypolicy" className={'border-l-2 border-gray-900 px-2'}>Privacy Policy</Link>
                        <Link href="/termsandcondition" className={'border-l-2 border-gray-900 px-2'}>Terms &
                            Conditions</Link>
                    </div>
                    <div className=" text-sm flex space-x-2">
                        {imageArray.map((image, index) => (
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
