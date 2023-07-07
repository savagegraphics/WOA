import React from 'react';
import './AnewOne.css';
import Image from 'next/image';

const AnewOne = () => {
    return (
        <div className="card-container">
            <div className="card">
                <div className="max-w-sm">
                    <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                        <Image className="rounded-t-lg" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" alt="" width={ 400 } height={ 300 } />
                    </div>
                    <div>hey this is the card text</div>
                </div>
            </div>
            <div className="card">
                <div className="max-w-sm">
                    <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                        <Image className="rounded-t-lg" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" alt="" width={ 400 } height={ 300 } />
                    </div>
                    <div>hey this is the card text</div>
                </div>
            </div>
            <div className="card">
                <div className="max-w-sm">
                    <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                        <Image className="rounded-t-lg" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" alt="" width={ 400 } height={ 300 } />
                    </div>
                    <div>hey this is the card text</div>
                </div>
            </div>
            <div className="card">
                <div className="max-w-sm">
                    <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                        <Image className="rounded-t-lg" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" alt="" width={ 400 } height={ 300 } />
                    </div>
                    <div>hey this is the card text</div>
                </div>
            </div>
        </div>
    )
}
export default AnewOne;
