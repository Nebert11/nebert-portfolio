import React from "react";

const Contacts = () => {
    return(
        <div className="min-h-screen flex flex-col justify-center items-center mt-2 px-4">
            <h2 className="text-3xl font-bold text-gray-200">Contact Me</h2>
            <p className="mt-4 text-gray-400">Feel free to reach out or just a friendly hello!</p>
            <form className="mt-6 max-w-md w-full">
                <input type="text" placeholder="Your Name" required className="w-full p-2 mb-4 border rounded"/>
                <input type="text" placeholder="Email" required className="w-full p-2 mb-4 border rounded" />
                <textarea required className="w-full p-2 mb-4 border rounded" rows="4"></textarea>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-sky-400">Send Message</button>
            </form>
        </div>
    )
}

export default Contacts;