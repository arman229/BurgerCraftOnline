// Mainpage.js
import React from "react";
import Image from "next/image";
import Mysummary from "@/components/summarysection";
const Mainpage = ({ ingredients }) => {
    return (
        <>
            <h1 className="text-2xl font-bold sm:text-1xl md:text-4xl py-4 ">Make Your Burger</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3 px-2   ">
                <div className="relative" style={{ height: 'auto', minHeight: '300px' }}>
                    <div className="bg-red-200">
                        {ingredients.map((item, index) => (
                            <div key={index}>
                                <Image src={item.imgSrc} alt={item.productName} width={50} height={50} />
                            </div>
                        ))}
                    </div>
                </div>
                <Mysummary
                    totalPrice={ ingredients.reduce((sum, ingri) => sum + ingri.price, 0).toFixed(2)}
                    totalTime={ingredients.reduce((sum, ingri) => sum + ingri.time, 0).toFixed(2)}
                    totalWeight={ingredients.reduce((sum, ingri) => sum + ingri.weight, 0)}
                    totalCalories={ingredients.reduce((sum, ingri) => sum + ingri.calories, 0)}
                />
            </div>
        </>
    );
};

export default Mainpage;
