import {Burger} from "@/data/Burger";

export type CartItem = {
    burger: Burger,
    quantity: number
}
/*export const cartItems: CartItem[] = [
    {
        quantity: 2,
        burger: {
            id: 1,
            base64Image: "",
            price: 20
        }
    },
    {
        quantity: 4,
        burger: {
            id: 2,
            base64Image: "",
            price: 30
        }
    },
    {
        quantity: 3,
        burger: {
            id: 3,
            base64Image: "",
            price: 50
        }
    }
]*/
