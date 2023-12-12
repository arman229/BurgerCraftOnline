"use client"
import React from "react";
import Image from "next/image";

const ItemCart = ({ingredient, handleDec, handleIncr, quantity}) => {
    return (
        <div key={ingredient.id}>
            <div className="bg-white py-6 bg-gray-300 rounded-md shadow-md text-center"
                 style={{width: '140px', height: '183px'}}>
                <Image src={ingredient.imgSrc} alt="Product Image" className="object-cover mb-2 mx-auto rounded-md"
                       height={60}/>
                <h3 className="text-lg font-semibold mb-4">{ingredient.productName}</h3>
                <div className="flex items-center justify-center space-x-4">
                    <button onClick={() => handleDec(ingredient)}
                            className="text-4xl pb-2 bg-gray-200 rounded-full w-9 h-9 flex items-center justify-center">-
                    </button>
                    <span className="font-semibold"> {quantity}</span>
                    <button onClick={() => handleIncr(ingredient)}
                            className="text-2xl pb-1 bg-gray-200 rounded-full w-9 h-9 flex items-center justify-center">+
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ItemCart;
