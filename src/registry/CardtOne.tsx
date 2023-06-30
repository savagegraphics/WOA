import Image from 'next/image';

function MyComponent() {
    return (
        <div className="flex flex-col items-center justify-center mb-10">
            <hr className="border-gray-light w-11/12 mx-auto mb-8 mt-8" />
            <div className="text-center text-3xl mt-8 mb-8">Get What You Really Want</div>
            <div className="bg-white p-4 w-80 max-w-3xl sm:w-full sm:p-4 h-auto sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none">
                <div
                    style={{
                        backgroundImage:
                            'url("https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")',
                    }}
                    className="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-100 bg-center bg-cover"
                ></div>
                <div className="flex lg:pt-18 md:pt-14 sm:flex-1 flex-col gap-2 p-1">
                    <h1 className="text-lg sm:text-2xl font-thin text-gray-600">
                        Add from Any Store
                        (yes, really!)
                    </h1>
                    <p className="text-gray-500 text-sm sm:text-base line-clamp-3">
                        Put anything from any store (big or small) onto your baby registry.                    </p>
                </div>
            </div>
        </div>
    );
}

export default MyComponent;
