import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <aside className="h-full w-64  bg-stone-800 text-white flex flex-col items-start  fixed">

            <div className="flex items-center gap-4 mb-6 2- p-3">
                <img
                    src="https://via.placeholder.com/114"
                    alt="Profile"
                    className="w-12 h-12 rounded-full"
                />
                <div>
                    <h3 className="text-lg font-semibold">Daniela Acevedo</h3>
                    <p className="text-sm text-gray-400">Software Engineer</p>
                </div>
            </div>
            <hr className="border-gray-600 w-full mb-6" />

            <Link
                to="/"
                className="px-4 py-2 hover:bg-white hover:text-green-800 transition-all rounded-r-full font-bold"
            >
                Home
            </Link>
            <Link
                to="/new-event"
                className="px-4 py-2 hover:bg-white hover:text-green-800 transition-all rounded-r-full font-bold"
            >
                Add Event
            </Link>
            <Link
                to="/all-events"
                className="px-4 py-2 hover:bg-white hover:text-green-800 transition-all rounded-r-full font-bold"
            >
                All Events
            </Link>
            <Link
                to="/"
                className="px-4 py-2 hover:bg-white hover:text-green-800 transition-all rounded-r-full font-bold"
            >
                Metrics
            </Link>
        </aside>
    );
}

export default Sidebar;
