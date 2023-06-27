import Image from 'next/image';

function MyComponent() {
    return (
        <div className="flex items-center justify-center mt-10 mb-10">
            <div className="bg-white p-4 w-80 max-w-3xl sm:w-full sm:p-4 h-auto sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none">
                <div className="flex sm:w-72 sm:order-last">
                    <div
                        style={{
                            backgroundImage:
                                'url("https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")',
                        }}
                        className="h-52 sm:h-full w-full rounded-xl bg-gray-100 bg-center bg-cover"
                    ></div>
                </div>
                <div className="flex lg:pt-18 md:pt-14 sm:flex-1 flex-col gap-2 p-1">
                    <h1 className="text-lg sm:text-2xl font-thin text-gray-600">
                        Help & Favors                    </h1>
                    <p className="text-gray-500 text-sm sm:text-base line-clamp-3">
                        Ask for home-cooked meals, second-hand baby clothes, or help walking your pup.                    </p>
                </div>
            </div>
        </div>
    );
}

export default MyComponent;
