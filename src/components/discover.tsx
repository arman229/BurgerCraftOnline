'use client'
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import wesitelogo from "@/components/images/websitelogo.JPG";
import Image from "next/image";
import Images from '@/components/images/discoverburger.png'
import {usePathname, useRouter} from "next/navigation";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
const Discoverburger = () => {
    useEffect(() =>{ AOS.init({duration: 1000,})}, []);
    const pathname = usePathname();
    const router = useRouter();
    const mystyle = {
        position: "absolute",
        top: '70%',
        left: '7%',
        transform: 'translateY(-70%)',
        padding: '20px',
        borderRadius: '50%'
    };
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center   p-2 m-0 ">
            <div className="    text-center md:text-left py-6 " style={{maxWidth:'500px'}}  >
                <h1 className="text-2xl font-bold sm:text-1xl md:text-4xl  ">Make Your Own Burger</h1>
                <p className="mt-4   text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                    Welcome to our burger customization platform. Create your perfect burger with our wide range of ingredients. Start exploring now!
                </p>
            </div>
            <div className=" relative" data-aos="zoom-in">
                <Image src={Images} alt="Website Image" className="w-full h-auto max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl md:ml-4"/>
                <Link href={'/makeyourburger'}  >
                    <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold rounded text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl" style={mystyle}>MAKE <br /> Burger</button>
                </Link>
            </div>
        </div>
    );
};

export default Discoverburger;
