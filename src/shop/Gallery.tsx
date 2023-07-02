import './Gallery.css';
import Image from 'next/image'

const MyComponent = () => {
    return (
        <div className="container">
            <div className="box">
                <Image src="https://source.unsplash.com/1000x800" alt={''}
                    width={600}
                    height={600} />
            </div>
            <div className="box">
                <Image src="https://source.unsplash.com/1000x802" alt={''}
                    width={600}
                    height={600} />
            </div>
            <div className="box">
                <Image src="https://source.unsplash.com/1000x804" alt={''}
                    width={600}
                    height={600} />
            </div>
            <div className="box">
                <Image src="https://source.unsplash.com/1000x806" alt={''}
                    width={600}
                    height={600} />
            </div>
            <div className="box">
                <Image src="https://source.unsplash.com/1000x806" alt={''}
                    width={600}
                    height={600} />
            </div>
            <div className="box">
                <Image src="https://source.unsplash.com/1000x806" alt={''}
                    width={600}
                    height={600} />
            </div>
            <div className="box">
                <Image src="https://source.unsplash.com/1000x806" alt={''}
                    width={600}
                    height={600} />
            </div>
        </div>
    );
};

export default MyComponent;
