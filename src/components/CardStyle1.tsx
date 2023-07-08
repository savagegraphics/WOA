import React from 'react';
import './CardStyle1.css';

const HomePage: React.FC = () => {
    // Define titles and images for the cards
    const titles = ['Card 1', 'Card 2', 'Card 3', 'Card 4'];
    const images = [
        'https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
        'https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
        'https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
        'https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
    ];

    return (
        <div className="card-container">
            {titles.map((title, index) => (
                <div key={index} className="card">
                    <img src={images[index]} alt={title} />
                    <h3>{title}</h3>
                </div>
            ))}
        </div>
    );
};

export default HomePage;