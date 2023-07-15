import Link from 'next/link'
import './CardStyle1.css'
const products = [
    {
        id: 1,
        href: '#',
        imageSrc: 'https://media.istockphoto.com/id/1477652685/photo/father-embracing-his-baby-boy-on-a-hammock.webp?b=1&s=170667a&w=0&k=20&c=FBfs5FKCeCkyWKLcvl5fd2zup-xXOD-ZSTVlc-NQ9TA=',
        imageAlt: "How to Plan Vacation with a Baby",
        color: 'Black',
    },
    {
        id: 2,
        href: '#',
        imageSrc: 'https://images.babylist.com/image/upload/f_auto,q_auto:best,c_scale,w_768/v1687843638/hello-baby/Most_Innovative_Baby_Products_of_2023.jpg',
        imageAlt: "Most Innovative Baby Products of 2023",
        color: 'Black',
    },
    {
        id: 3,
        href: '#',
        imageSrc: 'https://media.istockphoto.com/id/1445164844/photo/baby-boy-celebrating-his-first-birthday.webp?b=1&s=170667a&w=0&k=20&c=MFd8tV_AUJr59EboEh4QOrNIjl8TbGLGpnMN01z2Yfg=',
        imageAlt: "How to Throw a First Birthday Party",
        color: 'Black',
    },
    {
        id: 4,
        name: 'Sponsored',
        href: '#',
        imageSrc: 'https://media.istockphoto.com/id/931902698/photo/mom-buckling-infant-into-car-seat.webp?b=1&s=170667a&w=0&k=20&c=EnGX43AHPf4SqEphgt3to_eOPlyHWAKT9RuoGeJpuCo=',
        imageAlt: "Video: This $99 Car Seat Sensor Alerts You if you Leave Baby in the Car",
        color: 'Black',
    },
    // More products...
]

export default function Example() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 custom-grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative bg-white">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={product.imageSrc}
                                    alt=""
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                           <div className="mt-4 flex justify-between">
                                <div>
                                    <p className="mt-1 text-xl font-semibold text-gray-dark pl-4">{product.imageAlt}</p>
                                    <h3 className="text-lg text-purple pl-4">
                                        <Link href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
