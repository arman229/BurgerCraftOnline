'use client'
import Link from "next/link";
import Image from "next/image";
import Images from '@/components/assets/images/discoverburger.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, {useEffect} from 'react';

const DiscoverBurger = () => {
    useEffect(() => {
        AOS.init({duration: 1000,})
    }, []);

    return (
        <div className="flex flex-col sm:flex-row items-center justify-center p-2 m-0 ">
            <div className="text-center md:text-left py-6 max-w-[540px]">
                <h1 className="text-2xl font-bold sm:text-1xl md:text-4xl">Make Your Own Burger</h1>
                <p className="mt-4 text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                    Welcome to our burger customization platform. Create your perfect burger with our wide range of
                    ingredients. Start exploring now!
                </p>
            </div>
            <div className="relative" data-aos="zoom-in">
                <Image src={Images} alt="Website Image"
                       className="w-full h-auto max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl md:ml-4"/>
                <Link href={'/makeyourburger'}>
                    <button
                        className="absolute top-[60%] h-28 w-28 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded rounded-full text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl">
                        MAKE {'\n'} Burger
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default DiscoverBurger;
