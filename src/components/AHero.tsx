import React from 'react';

const AHero = () => {
    const backgroundImageStyle = {
        backgroundImage: "url(https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80)",
    };

    return (
        <div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
            <div style={backgroundImageStyle} className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"></div>
            <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
                <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">Nike Revolt</div>
                <div className="flex items-center justify-between py-2 px-3 bg-gray-400">
                    <h1 className="text-gray- font-bold">$129</h1>
                    <button className="bg-gray-800 text-xs text-white px-2 py-1 bg-gray-dark font-semibold rounded uppercase hover:bg-gray">Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default AHero;
