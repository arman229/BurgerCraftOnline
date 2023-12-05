// cardArray.js
import cutlet from "@/components/images/cutlet.png";
import Mayo from "@/components/images/Mayo.png";
import onion from "@/components/images/onine.png";
import tomato from "@/components/images/tomato.png";
import cucumbar from "@/components/images/cucumber.png";
import cheese from "@/components/images/cheese.png";
import salad from "@/components/images/salad.png";
import ban from "@/components/images/ban.png";
import visa from "@/components/images/visa.svg";
import image2 from "@/components/images/twobank.svg";
import gpay from "@/components/images/gpay.svg";
import pay from "@/components/images/pay.svg";
import p from "@/components/images/p.svg";
import bitcon from "@/components/images/bitcone.svg";
import Etherium from "@/components/images/Etherium.svg";


export type Ingridient = {
    id: number
    imgSrc: string
    productName: string
    price: number
    weight: number
    calories: number
    time: number
}
export const cardArray: Ingridient[] = [
    {
        id: 1,
        imgSrc: cutlet,
        productName: 'Cutlet',
        price: 2.5,
        weight: 1,
        calories: 30,
        time: 0.1,
    },
    {
        id: 2,
        imgSrc: Mayo,
        productName: 'Mayo',
        price: 1.5,
        weight: 0.5,
        calories: 50,
        time: 0.2,
    },
    {
        id: 3,
        imgSrc: onion,
        productName: 'Onion',
        price: 0.75,
        weight: 0.5,
        calories: 10,
        time: 0.5,
    },
    {
        id: 4,
        imgSrc: tomato,
        productName: 'Tomato',
        price: 1.0,
        weight: 0.5,
        calories: 15,
        time: 1,
    },
    {
        id: 5,
        imgSrc: cucumbar,
        productName: 'Cucumber',
        price: 0.5,
        weight: 0.5,
        calories: 7.5,
        time: 0.5,
    },
    {
        id: 6,
        imgSrc: cheese,
        productName: 'Cheese',
        price: 2.0,
        weight: 0.5,
        calories: 100,
        time: 0.1,
    },
    {
        id: 7,
        imgSrc: salad,
        productName: 'Salad',
        price: 1.75,
        weight: 0.5,
        calories: 20,
        time: 1,
    },
    {
        id: 8,
        imgSrc: ban,
        productName: 'Ban',
        price: 0.9,
        weight: 0.5,
        calories: 45,
        time: 0.5,
    },
];
export const imageArray:string[] = [
    visa,
    image2,
    gpay,
    pay,
    p,
    bitcon,
    Etherium
];