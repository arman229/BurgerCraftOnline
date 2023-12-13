'use client'
import React, {useContext, useState} from "react";


import {allIngredients, burgerBottom} from "@/data/allIngredients";
import ItemCart from "@/components/itemcard";
import BurgerSummary from "@/components/BurgerSummary";
import html2canvas from "html2canvas";
import {Ingredient} from "@/data/Ingredient";
import Image from "next/image";
import {MyContext} from "@/app/layout";
import {CartItem} from "@/data/CartItems";

const MakeBurger = () => {
    const {addToCart} = useContext(MyContext)
    const [ingredients, setIngredients] = useState<Ingredient[]>([burgerBottom]);

    const totalPrice = ingredients.reduce((sum, ingri) => sum + ingri.price, 0)
    const capture = () => {
        const captureDiv = document.getElementById('captureDiv');
        if (captureDiv) {
            html2canvas(captureDiv).then((canvas) => {
                const dataURL = canvas.toDataURL();
                const finalCartItem: CartItem = {
                    quantity: 1,
                    burger: {
                        id: 1,
                        base64Image: dataURL,
                        price: totalPrice
                    }
                }
                addToCart(finalCartItem)
                setIngredients([burgerBottom])
            });
        }
    };
    const handleIncr = (ingredient) => {
        setIngredients(items => [...items, ingredient]);
        const addaudio = new Audio('/audio/audio.mp3');
        addaudio.play()
    };

    const handleDec = (ingredient) => {
        const index = ingredients.lastIndexOf(ingredient);
        if (index !== -1) {
            setIngredients(items => [
                ...items.slice(0, index),
                ...items.slice(index + 1),
            ]);
            const removeaudio = new Audio('/audio/audio.mp3');
            removeaudio.play()
        }
    };


    return (
        <>
            <h1 className="text-2xl font-bold sm:text-1xl md:text-4xl py-4">Make Your Burger</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3 px-2 ">
                <div className="relative border-4 " style={{height: 'auto', minHeight: '300px'}}>
                    <div id="captureDiv" className={'pb-2 m-0 flex items-end justify-end flex-col'}>
                        {ingredients.slice().reverse().map((item, index) => (
                            <div key={index}>
                                <Image src={item.imgSrc} alt={item.productName} width={350} height={50}/>
                            </div>
                        ))}
                    </div>
                </div>
                <BurgerSummary
                    totalPrice={ingredients.reduce((sum, ingri) => sum + ingri.price, 0).toFixed(2)}
                    totalTime={ingredients.reduce((sum, ingri) => sum + ingri.time, 0).toFixed(2)}
                    totalWeight={ingredients.reduce((sum, ingri) => sum + ingri.weight, 0)}
                    totalCalories={ingredients.reduce((sum, ingri) => sum + ingri.calories, 0)}
                    addToCart={() => capture()}
                />
            </div>

            <div className="mb-4 ">
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 space-y-2 px-2 py-4 ">
                    {allIngredients.map((item) =>
                        <ItemCart key={item.id}
                                  ingredient={item}
                                  handleDec={handleDec}
                                  handleIncr={handleIncr}
                                  quantity={ingredients.filter(itm=>item.id===itm.id).length}/>)}</div>
                >
            </div>
        </>
    );
};

export default MakeBurger;
