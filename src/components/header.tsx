'use client'
import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import phoneimage from './images/phone.svg';
import wesitelogo from './images/websitelogo.JPG';
import {FiShoppingCart} from 'react-icons/fi';
import {usePathname, useRouter} from "next/navigation";
export const Myheader = () => {
    const pathname = usePathname()
    const router = useRouter()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () =>  setMobileMenuOpen(!mobileMenuOpen)
    return (
        <>
            <div className="flex justify-between text-lg font-bold px-2  mb-4 border-b">
                <div className="flex">
                    <div className="items-center flex">
                        <Image src={wesitelogo} style={{height: '40px', width: 'auto'}}/>
                    </div>
                    <div className="p-6 hidden md:flex  ">
                        <Link className={`link ${pathname === '/' ? 'active' : ''}`} href={'/'}>Discover</Link>
                    </div>
                    <div className="p-6 hidden md:flex">
                        <Link className={`link ${pathname === '/makeyourburger' ? 'active' : ''}`} href={'/makeyourburger'}>Make your Burger</Link>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex px-2 items-center hidden md:flex">
                        <Link className={`flex items-center bg-gray-400 p-3 isactivecall  rounded-full link ${pathname === '/contactus' ? 'activecall' : ''}`} href={'/contactus'}  >
                            <Image src={phoneimage} alt="Phone Image" width={20}    />
                            <span className="ml-2">Call me back</span>
                        </Link>
                    </div>
                    <div className="py-6 items-center flex px-2">
                        <Link className={`flex items-center link ${pathname === '/cartlist' ? 'active' : ''}`}
                              href={'/cartlist'}>
                            <FiShoppingCart size={24}/>
                        </Link>
                        <div className="md:hidden  pl-4 ">
                            <button
                                id="burger-icon"
                                className="  focus:outline-none transition duration-300 transform hover:scale-110 ml-4"
                                onClick={toggleMobileMenu}
                                data-collapse-toggle="navbar-default" type="button"
                                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-default" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                                </svg>
                            </button>


                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="md:hidden     transition-all transform duration-300    bg-gray-200">
                    <div onClick={toggleMobileMenu}>
                        <Link
                            className={`  inline-block  text-left  py-2 link ${pathname === '/' ? 'active' : ''}`}
                            href={'/'}>
                            Discover
                        </Link>
                    </div>
                    <div onClick={toggleMobileMenu}>

                        <Link
                            className={`    inline-block  text-left  py-2 link ${pathname === '/makeyourburger' ? 'active' : ''}`}
                            href="/makeyourburger">
                            Make your Burger
                        </Link>
                    </div>
                    <div onClick={toggleMobileMenu}>
                        <Link   className="block text-left py-2     link ${pathname === '/contactus' ? 'activecall' : ''}`}
                                    href={'/contactus'}">
                            Call me back
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};
