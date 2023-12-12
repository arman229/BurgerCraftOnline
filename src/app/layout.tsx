'use client'
import './globals.css'
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {createContext, useState} from "react";
import {CartItem} from "@/data/CartItems";


export const MyContext = createContext<MyContextType>({
    carts: [],
    addToCart: (item: CartItem) => {
    },
    removeFromCart: (item: CartItem) => {
    },
    updateQuantity: (item: CartItem, newQuantity: number) => {
    },
});

export type MyContextType = {
    carts: CartItem[],
    addToCart: (item: CartItem) => void,
    removeFromCart: (item: CartItem) => void,
    updateQuantity: (item: CartItem, newQuantity: number) => void,
}


export default function RootLayout({children}: { children: React.ReactNode }) {
    const [cartsState, setCarts] = useState<CartItem[]>([]);
    const addToCartInner = (item: CartItem) => {
        setCarts([...cartsState, item])
    }
    const removeFromCartInner = (item: CartItem) => {
        const updatedCart = [...cartsState];
        setCarts(updatedCart.filter(c => c.burger.id !== item.burger.id));
    }
    const updateQuantityInner = (item: CartItem, newQuantity: number) => {
        if (newQuantity >= 1) {
            const updatedCart = [...cartsState];
            const index = updatedCart.indexOf(item)
            updatedCart[index].quantity = newQuantity;
            setCarts(updatedCart);
        }
    }
    return (
        <html lang="en">
        <body className={'max-w-screen-lg mx-auto  '}>

        <div>
            <MyContext.Provider value={{
                carts: cartsState,
                addToCart: addToCartInner,
                removeFromCart: removeFromCartInner,
                updateQuantity: updateQuantityInner
            }
            }>
                <Header/>
                {children}

                <Footer/>
            </MyContext.Provider>

        </div>
        </body>


        </html>
    )
}
