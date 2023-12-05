 'use client'
import React, { useState } from "react";


import { cardArray } from "@/components/carddata";
 import Mainpage from "@/components/mainpage";
 import ItemCart from "@/components/itemcard";
 import addAudioFile from "@/components/audio/audio.mp3";
 import removeAudioFile from "@/components/audio/remove.mp3";

const Makeburger = ( ) => {

    const [ingredients, setIngredients] = useState([]);
    const addAudio = new Audio(addAudioFile);
    const removeAudio = new Audio(removeAudioFile);
    const handleIncr = (ingredient) => {
        setIngredients(items => [...items, ingredient]);
        addAudio.play();
    };

    const handleDec = (ingredient) => {
        const index = ingredients.lastIndexOf(ingredient);
        if (index !== -1) {
            setIngredients(items => [
                ...items.slice(0, index),
                ...items.slice(index + 1),
            ]);
            removeAudio.play();
        }
    };

    const ItemCardSample = ({ ingredient }) => (
        <ItemCart ingredient={ingredient} handleDec={handleDec} handleIncr={handleIncr} ingredients={ingredients} />
    );

    return (
        <>
            <Mainpage ingredients={ingredients} />

                <div className="mb-4 ">
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 space-y-2 px-2 py-4 ">
                        {cardArray.map((item) => <ItemCardSample key={item.id} ingredient={item} />)}
                    </div>
                 >
            </div>
        </>
    );
};

export default Makeburger;
