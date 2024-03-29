import React from 'react';

const Banner = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-5">
            <div>
                <h1 className="text-7xl pb-2 md:pb-4">Ahmëd Blog's</h1>
                <h2 className="mt-5 md:mt-0">
                    Welcome to Every Developers favourite blog in the Devosphere
                </h2>
            </div>
            <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
                New product features | The latest in technology | The weekly debugging
                nightmares & More!
            </p>
        </div>
    )
};

export default Banner;