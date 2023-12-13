const Contactus = () => {
    return (
        <>
            <div className="container w-84 mx-auto    " data-aos="fade-down">
                <header className="  mt-2   py-4">
                    <div className="container mx-auto">
                        <h1 className="text-3xl font-semibold px-2 text-2xl font-bold sm:text-1xl md:text-4xl ">Contact
                            Us</h1>
                    </div>
                </header>

                <div className="container mx-auto mt-2 p-4 bg-white rounded-lg shadow-lg">
                    <h2 className="text-lg font-semibold">Get in Touch</h2>
                    <p className="mb-4">We&apos;d love to hear from you. Please use the form below to send us your
                        message.</p>

                    <div className="mb-4">
                        <p className="block font-medium text-gray-700">
                            For any inquiries or to contact the owner, please call:
                            <span className="text-blue-500">[+92 302 1636999]</span>
                        </p>
                    </div>

                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block font-medium text-gray-700">Your Name</label>
                            <input type="text" id="name" name="name" placeholder="Please Enter Your Name"
                                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
                                   required/>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block font-medium text-gray-700">Your Email</label>
                            <input type="email" id="email" name="email" placeholder="Please Enter Your Email"
                                   className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
                                   required/>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block font-medium text-gray-700">Message</label>
                            <textarea id="message" name="message" placeholder="Write a message " rows="5"
                                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
                                      required></textarea>
                        </div>

                        <button type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Send
                            Message
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}
export default Contactus;