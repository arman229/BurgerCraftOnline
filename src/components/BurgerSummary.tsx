// Mysummary.js
import React, {useState} from "react";
import Image from "next/image";
import timeicon from "@/components/assets/images/timeicon.png";
import summaryicon from "@/components/assets/images/Summary_icons.png";
import calaries from "@/components/assets/images/calaries.png";

const BurgerSummary = ({totalPrice, totalTime, totalWeight, totalCalories, addToCart}) => {


    return (
        <>
            <div className={'flex items-center justify-center  p-2  '}>
                <div className={'border rounded py-4 p-1'} style={{width: '100%', maxWidth: '400px'}}>
                    <h1 className="text-3xl font-bold border-b pb-4 mb-4">Summary</h1>
                    <div className="flex flex-row justify-between">
                        <div><p className="font-extrabold text-3xl mb-0"> $ {totalPrice}</p></div>
                        <button type="button" className="px-6 p-2  bg-blue-500 hover:bg-blue-700  rounded-full " onClick={() => addToCart()}>Add to Cart
                        </button>
                    </div>
                    <h2 className={'py-5 text-xl'}>Explore our menu for a diverse range of flavorful options.
                    </h2>
                    <div className="flex justify-between p-4 border rounded-full bg-blue-400">
                        <div className="flex items-center justify-center">
                            <Image src={timeicon} alt="Product Image" style={{width: "30px"}}/>
                            <span className={'px-2'}>{totalTime} min</span>
                        </div>
                        <div className="flex items-center justify-center">
                            <Image src={summaryicon} alt="Product Image" style={{width: "30px"}}/>
                            <span className={'px-2'}>{totalWeight} oz</span>
                        </div>
                        <div className="flex items-center justify-center">
                            <Image src={calaries} alt="Product Image" style={{width: "30px"}}/>
                            <span className={'px-2'}>{totalCalories} kcal</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BurgerSummary;
