import React from "react";

const Stats = () => {
    return (
        <div className="flex space-x-6 bg-gray-200 py-5 justify-center align-center ">
            <p className="text-center text-2xl">
                <strong>6</strong> 
                <br />
                <p className="text-gray-500">Finished Projects</p>
                
            </p>

            <p className="text-center text-2xl">
                <strong>225</strong>
                <br />
                <p className="text-gray-500">Working Hours</p>
            </p>

            <p className="text-center text-2xl">
                <strong>10</strong>
                <br />
                <p className="text-gray-500">Online Support</p>
            </p>

            <p className="text-center text-2xl">
                <strong>5</strong>
                <br />
                <p className="text-gray-500">Happy Customers</p>
            </p>
        </div>
    )
}

export default Stats;