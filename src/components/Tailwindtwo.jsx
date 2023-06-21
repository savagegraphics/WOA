import { ArrowPathIcon, CalendarIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import BgImag from '../assets/colorfulbg1.jpg'
import Bgrmv from '../assets/fam4.jpg'


const features = [
    {
        name: 'Week by Week',
        description:
            'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
        icon: CalendarIcon,
    },
    {
        name: 'First  Trimester',
        description:
            'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
        icon: LockClosedIcon,
    },
    {
        name: 'Second Trimester',
        description:
            'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Third Trimester',
        description:
            'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
        icon: FingerPrintIcon,
    },
]

export default function Example() {
    return (
        <div style={ {
            backgroundImage: "url(Bgrmv)",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderTopRightRadius: '40px',
            borderTopLeftRadius: '40px'
        } }>
            <div className=" py-24 pr-4 pl-4 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <p className="mt-2 text-3xl font-bold tracking-tight text-[#85586F] sm:text-4xl">
                            Pregnancy
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-700">
                            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                            pulvinar et feugiat blandit at. In mi viverra elit nunc.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            { features.map((feature) => (
                                <div key={ feature.name } className="relative pl-16">
                                    <div className="text-base font-semibold leading-7 text-[#85586F]">
                                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </div>
                                        { feature.name }
                                    </div>
                                    <div className="mt-2 text-base leading-7 text-gray-700">{ feature.description }</div>
                                </div>
                            )) }
                        </dl>
                    </div>
                    <div className="flex flex-wrap items-center justify-center">
                        <div className="relative flex-shrink-0 max-w-xs mx-2 mt-6 overflow-hidden bg-transparent rounded-lg shadow-lg sm:mb-0">                            <div className="relative flex items-center justify-center px-10 pt-10">
                            <div className="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24"></div>
                            <Image className="relative w-80 pb-10" src={ Bgrmv } alt="shopping item" />
                        </div>
                        </div>
                    </div>


                </div>
            </div>
        </div >
    )
}
