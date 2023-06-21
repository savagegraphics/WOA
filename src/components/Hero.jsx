import React from 'react'
import './Hero.css'



// import Image from "../assets/momandbaby.jpg"

const Hero = () => {
    return (
        <div className='hero'>
            <div className='content-hero'>
                <h2>Put anything onto your baby
                    registry from any store.</h2>
                <button className="btn">Start Your Babylist</button>
                <button className="btn btntwo">Find a Babylist Registry</button>
                <div className='hidden lg:block'>
                    <p className='small-text'>Already registered? <a className="underline text-custom-85586F" href="">Sign in</a></p>
                </div>
            </div>

        </div >
    )
}

export default Hero