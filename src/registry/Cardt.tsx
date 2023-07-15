import Image from 'next/image';

function Cardt() {
    return (
        <div className="flex items-center justify-center mt-10 mb-10">
            <div className="bg-white p-4 w-80 max-w-3xl sm:w-full sm:p-4 h-auto sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none">
                <div
                    style={{
                        backgroundImage:
                            'url("https://media.istockphoto.com/id/1496411237/photo/christmas-curious-and-children-opening-gifts-looking-at-presents-and-boxes-together-smile.webp?b=1&s=170667a&w=0&k=20&c=OIrjKgStdiScyGdnIaHN_tm2ggPmn3EkHM2pIlEuulM=")',
                    }}
                    className="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-100 bg-center bg-cover"
                ></div>
                <div className="flex lg:pt-18 md:pt-14 sm:flex-1 flex-col gap-2 p-1">
                    <div> <h1 className="text-lg sm:text-2xl font-thin text-gray-600">
                        Support Indie Shops and Makers                    </h1></div>
                    <div>   <p className="text-gray-500 text-sm sm:text-base line-clamp-3">
                        Add unique gifts that you wouldn&apos;t be able to find at a big-box store.                    </p></div>
                </div>
            </div>
        </div>
    );
}

export default Cardt;
