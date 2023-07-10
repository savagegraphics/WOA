import React from 'react';
import './Heros.css'

const NatureSection = () => {
    return (
        <div className="box">
            <section>
                <h1>Nature</h1>
                <div className="content">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, laborum suscipit doloremque, expedita
                        voluptatum maiores corporis modi assumenda esse consectetur error nulla, vero alias.
                    </p>
                    <a href="">Learn more</a>
                </div>
                <div className="img">
                    <img src="https://images.unsplash.com/photo-1445966275305-9806327ea2b5?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=14a02fab1200216368d682ecaa91e540" alt="" />
                </div>
            </section>
        </div>
    );
};

export default NatureSection;
