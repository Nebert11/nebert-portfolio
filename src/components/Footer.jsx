import React from "react";

const Footer = () => {
    return (
        <div className="bg-gray-200 px-4 py-6">
            <h1 className="font-bold text-center text-2xl sm:text-3xl">nebert</h1>
            <div className="flex flex-col sm:flex-row sm:space-x-6 items-center justify-center py-4 font-semibold text-gray-500 space-y-2 sm:space-y-0">
                <p>Phone: +254769232512</p>
                <p>Email: ngarinebert2020@gmail.com</p>
                <p>Address: Nairobi, Kenya</p>
            </div>
            <div className="flex  justify-center space-x-6 font-semibold">
                <p className="text-center">©Copyright-2025</p>
                <p className="text-center">Created By: Nebert</p>
            </div>
        </div>
    )
}

export default Footer;