import Image from 'next/image';
import Imag from '../assets/fam5.jpg'
import Imaag from '../assets/momandbaby.jpg'

const MyComponent = () => {
    return (
        <div className="grid grid-flow-col p-12 grid-rows-2 grid-cols-3 gap-8">
            <div>
                <Image src={Imag} alt="" loading="lazy" width={640} height={480} />
            </div>
            <div className="col-start-3">
                <Image src={Imag} alt="" loading="lazy" width={640} height={480} />
            </div>
            <div>
                <Image src={Imag} alt="" loading="lazy" width={640} height={480} />
            </div>
            <div>
                <Image src={Imag} alt="" loading="lazy" width={640} height={480} />
            </div>
            <div className="row-start-1 col-start-2 col-span-2">
                <Image src={Imaag} alt="" loading="lazy" width={640} height={480} />
            </div>
        </div>
    );
}

export default MyComponent;
