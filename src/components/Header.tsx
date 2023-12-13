'use client'
import Image from 'next/image';
import Link from 'next/link';
import phoneimage from './assets/images/phone.svg';
import wesitelogo from './assets/images/websitelogo.JPG';
import {FiShoppingCart} from 'react-icons/fi';
import {usePathname} from "next/navigation";
import {useContext} from "react";
import {MyContext, MyContextType} from "@/app/layout";


export const Header = () => {
    const pathname = usePathname()
    const myContext: MyContextType  = useContext(MyContext)

    return (
        <>
            <div className="flex justify-between items-center text-lg px-2 font-bold border-b  ">
                <div className="flex gap-4">
                    <Image src={wesitelogo} style={{height: '40px', width: 'auto'}} alt={'image not shows'}/>
                    <Link className={`flex items-center my-1 customunderline ${pathname === '/' ? 'customunderlineactive' : ''}`}
                          href={'/'}>Discover</Link>
                    <Link
                        className={`flex items-center my-1 customunderline ${pathname === '/makeyourburger' ? 'customunderlineactive' : ''}`}
                        href={'/makeyourburger'}>Make your Burger</Link>
                </div>
                <div className="flex">
                    <div className="flex px-2 items-center  ">
                        <Link href={'/contactus'}>
                            <button
                                className="rounded-[1rem] bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                <Image src={phoneimage} alt={'image not shows'}/>
                                <span>&nbsp;&nbsp;Contact us</span>
                            </button>
                        </Link>
                    </div>
                    <div className="py-6 items-center flex px-2">
                        <Link
                            className={`relative items-center  bg-gray-100 hover:bg-red-50 p-3 rounded-full ${pathname === '/cartlist' ? 'bg-red-50' : ''}`}
                            href={'/cartlist'}>
                            <FiShoppingCart size={24}/>
                            {
                                myContext.carts.length > 0 && (<div
                                    className="absolute inline-flex items-center justify-center w-5 h-5 text-xs  text-white bg-red-500   rounded-full -top-1 -end-1 ">
                                    {myContext.carts.length}
                                </div>)
                            }


                        </Link>
                    </div>
                </div>
            </div>


        </>
    );
};
