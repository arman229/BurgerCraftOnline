'use client'
import img from '@/components/assets/images/ban.png'
import {useContext, useEffect, useState} from "react";
import {MyContext} from "@/app/layout";
import {FaTrash} from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';

const CartList = () => {
    const {carts, removeFromCart, updateQuantity} = useContext(MyContext)
    const totalPrice = (carts.reduce((total, product) => total + product.burger.price * product.quantity, 0)).toFixed(2);



    function CartsTable() {


        const [openForm, setOpenForm] = useState(false)
        const openform = () => {
            setOpenForm(true)
        }

        return <>
            <p className="text-2xl font-semibold text-gray-800 mb-4   block">Your Shopping Cart</p>
            <table className="w-full border-collapse">
                <thead>
                <tr className="border-b">
                    <th className="text-left py-2">Product</th>
                    <th className="text-center py-2">Price($)</th>
                    <th className="text-center py-2">Quantity</th>
                    <th className="text-center py-2">Total($)</th>
                </tr>
                </thead>
                <tbody>
                {carts.map((item, index) => (
                    <tr key={index} className="border-b">
                        <td className="cart-item__media">
                            <div className="cart-item__image-container gradient global-media-settings">
                                <img src={item.burger.base64Image}
                                     className="cart-item__image w-12 h-12 md:w-12 md:h-16 my-2"
                                     alt={item.burger.base64Image} loading="lazy"/>
                            </div>
                        </td>
                        <td className="text-center py-2">{item.burger.price}</td>
                        <td className="text-center py-2">
                            <button onClick={() => updateQuantity(item, item.quantity - 1)}
                                    className="px-2 py-1 mr-2 bg-gray-300 rounded">-
                            </button>
                            {item.quantity}
                            <button onClick={() => updateQuantity(item, item.quantity + 1)}
                                    className="px-2 py-1 ml-2 bg-blue-300 rounded">+
                            </button>
                        </td>
                        <td className="text-center py-2">{(item.burger.price * item.quantity).toFixed(2)}</td>
                        <td className="cart-item__delete text-center py-2">
                            <button onClick={() => removeFromCart(item)}
                                    className="text-red-500 hover:text-red-700 sm:px-2">
                                <FaTrash/>
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <h2 className="text-2xl font-semibold my-2 text-center bg-blue-300">Total
                price:${totalPrice}</h2>
            <div className='text-center'>
                <button
                    className="bg-blue-500 text-white mb-6 py-2 my-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                    onClick={openform}>
                    Buy the product
                </button>
            </div>
            {openForm && (
                    <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md ">
                        <h2 className="text-2xl font-semibold mb-6">Checkout</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">Name</label>
                                <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="address" className="block text-gray-600 text-sm font-medium mb-2">Address</label>
                                <textarea id="address" name="address" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" rows="3" required></textarea>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">Email Address</label>
                                <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-gray-600 text-sm font-medium mb-2">Phone Number</label>
                                <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="cardNumber" className="block text-gray-600 text-sm font-medium mb-2">Credit Card Number</label>
                                <input type="text" id="cardNumber" name="cardNumber" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required/>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="expirationDate" className="block text-gray-600 text-sm font-medium mb-2">Expiration Date</label>
                                    <input type="text" id="expirationDate" name="expirationDate" placeholder="MM/YY" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required/>
                                </div>
                                <div>
                                    <label htmlFor="cvv" className="block text-gray-600 text-sm font-medium mb-2">CVV</label>
                                    <input type="text" id="cvv" name="cvv" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" required/>
                                </div>
                            </div>
                            <div className="mt-6">
                                <button  type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Buy Now
                                </button>
                            </div>
                        </form>

                        { true && (
                            <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-500 bg-opacity-80">
                                <div   className="bg-white p-8 rounded shadow-lg">
                                    <h2 className="text-2xl font-semibold mb-4">Success!</h2>
                                    <p>Your purchase is being processed.</p>
                                </div>
                            </div>
                        )}
                    </div>
                )
            }
        </>;
    }

    return (
        <>
            <div className="w-full max-w-2xl mx-auto min-h-[70vh]  ">
                {carts.length === 0 ? EmptyCartCompoent() : CartsTable()}
            </div>
        </>
    );
};

function EmptyCartCompoent() {
    return (
        <div className={'min-h-[70vh] flex items-center'} data-aos="zoom-in">
            <div className="w-72 mx-auto p-6 rounded-lg shadow-lg bg-white  ">
                <div className="flex   justify-center space-x-2 mb-4">
                    <svg className="   w-8 h-8  " aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                    <h3 className=" text-2xl">Oops</h3>
                </div>
                <div className="empty-cart-message text-center">
                    <p className="text-gray-600 mb-2">Your shopping cart is empty.</p>
                    <p className="text-gray-600">Start adding items to your cart.</p>
                </div>
            </div>
            ;</div>
    )
}

export default CartList;