import React from "react";

const Stats = () => {
    return (
        <div className="flex space-x-6 bg-gray-200 py-5 justify-center align-center ">
            <p className="text-center text-2xl">
                <strong>6</strong> 
                <br />
                <span className="text-gray-500">Finished Projects</span>
                
            </p>

            <p className="text-center text-2xl">
                <strong>225</strong>
                <br />
                <span className="text-gray-500">Working Hours</span>
            </p>

            <p className="text-center text-2xl">
                <strong>10</strong>
                <br />
                <span className="text-gray-500">Online Support</span>
            </p>

            <p className="text-center text-2xl">
                <strong>5</strong>
                <br />
                <span className="text-gray-500">Happy Customers</span>
            </p>
        </div>
    )
}

export default Stats;