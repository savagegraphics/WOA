
import { Fragment, useState } from 'react'
import { useEffect } from 'react';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import './Tailwind.css';
import Image from 'next/image';
import Heros from './Heros';
import HerosOne from '../guides/HerosOne';
import HerosTwo from '../guides/HerosTwo';
import HerosThree from '../guides/HerosThree';
import HerosFour from '../guides/HerosFour';
import HerosFive from '../guides/HerosFive';
import HerosSix from '../guides/HerosSix';

const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#' },
    { name: 'Sample Registry', href: '#' },
    { name: 'Pregnancy', href: '#' },
    { name: 'Pregnancy Week by Week', href: '#' },
    { name: 'Baby Names', href: '#' },
    { name: 'Parenting', href: '#' },
    { name: 'Friends & Family', href: '#' },
]
const filters = [
    {
        id: 'color',
        name: 'Color',
        options: [
            { value: 'white', label: 'White', checked: false },
            { value: 'beige', label: 'Beige', checked: false },
            { value: 'blue', label: 'Blue', checked: true },
            { value: 'brown', label: 'Brown', checked: false },
            { value: 'green', label: 'Green', checked: false },
            { value: 'purple', label: 'Purple', checked: false },
        ],
    },
    {
        id: 'category',
        name: 'Category',
        options: [
            { value: 'new-arrivals', label: 'New Arrivals', checked: false },
            { value: 'sale', label: 'Sale', checked: false },
            { value: 'travel', label: 'Travel', checked: true },
            { value: 'organization', label: 'Organization', checked: false },
            { value: 'accessories', label: 'Accessories', checked: false },
        ],
    },
    {
        id: 'size',
        name: 'Size',
        options: [
            { value: '2l', label: '2L', checked: false },
            { value: '6l', label: '6L', checked: false },
            { value: '12l', label: '12L', checked: false },
            { value: '18l', label: '18L', checked: false },
            { value: '20l', label: '20L', checked: false },
            { value: '40l', label: '40L', checked: true },
        ],
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [ mobileFiltersOpen, setMobileFiltersOpen ] = useState(false)
    const [ isLargeScreen, setIsLargeScreen ] = useState(false);
    const backgroundImageStyle = {
        backgroundImage: "url(https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80)",
    };

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="bg-white">
            <div>
                {/* Mobile filter dialog */ }
                <Transition.Root show={ mobileFiltersOpen } as={ Fragment }>
                    <Dialog as="div" className="relative z-40 lg:hidden" onClose={ setMobileFiltersOpen }>
                        <Transition.Child
                            as={ Fragment }
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={ Fragment }
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                    <div className="flex items-center justify-between px-4">
                                        <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                        <button
                                            type="button"
                                            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                            onClick={ () => setMobileFiltersOpen(false) }
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>

                                    {/* Filters */ }
                                    <form className="mt-4 border-t border-gray-200">
                                        <h3 className="sr-only">Categories</h3>
                                        <ul role="list" className="px-2 py-3 font-semibold text-xl text-gray-dark">
                                            { subCategories.map((category) => (
                                                <li key={ category.name }>
                                                    <a href={ category.href } className="block px-2 py-3">
                                                        { category.name }
                                                    </a>
                                                </li>
                                            )) }
                                        </ul>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-baseline justify-between pb-6 pt-24">
                        { isLargeScreen ? (
                            <h1 className="text-xl font-thin border-b border-gray-light pb-6 w-1/6 tracking-tight text-gray-900 hidden lg:block">Guides</h1>
                        ) : null }
                        <h1 className="text-xl font-thin border-b border-gray-light pb-6 w-1/2 tracking-tight text-gray-900">
                            Products
                        </h1>
                        <div className="flex items-center">
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                        Sort
                                        <ChevronDownIcon
                                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>
                                </div>

                                <Transition
                                    as={ Fragment }
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            { sortOptions.map((option) => (
                                                <Menu.Item key={ option.name }>
                                                    { ({ active }) => (
                                                        <a
                                                            href={ option.href }
                                                            className={ classNames(
                                                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                                active ? 'bg-gray-100' : '',
                                                                'block px-4 py-2 text-sm'
                                                            ) }
                                                        >
                                                            { option.name }
                                                        </a>
                                                    ) }
                                                </Menu.Item>
                                            )) }
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>

                            <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                                <span className="sr-only">View grid</span>
                                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                            </button>
                            <button
                                type="button"
                                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                onClick={ () => setMobileFiltersOpen(true) }
                            >
                                <span className="sr-only">Filters</span>
                                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>

                    <section aria-labelledby="products-heading" className="pb-24 pt-6">
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>

                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            {/* Filters */ }
                            <form className="hidden lg:block">
                                <h3 className="sr-only">Categories</h3>
                                <ul role="list" className="space-y-4 pb-6 font-semibold text-xl text-gray-dark">
                                    { subCategories.map((category) => (
                                        <li key={ category.name }>
                                            <a href={ category.href }>{ category.name }</a>
                                        </li>
                                    )) }
                                </ul>
                            </form>

                            {/* Product grid */ }
                            <div className="lg:col-span-3 lg:ml-12">
                                <Heros />


                                <div className="grid lg:grid-cols-3 mb-36 sm:grid-cols-2 custom-grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                                    <div className="image-container">
                                        <img
                                            src="https://media.istockphoto.com/id/1360064272/photo/young-pregnant-woman-with-glasses-and-a-medical-mask-in-a-baby-store-the-girl-chooses-a.webp?b=1&s=170667a&w=0&k=20&c=KDeBWGLj90Of9IZ1y4TkT-J0QmcoAxwb2DPTPo84jUA="
                                            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                                            className="bg-gray-100 img"
                                        />
                                        <div className="text-overlay">5 Baby Gear Essentials You Won&amp;t Need To Upgrade</div>
                                    </div>
                                    <div className="image-container">
                                        <img
                                            src="https://media.istockphoto.com/id/1336699745/photo/pregnant-woman-and-her-son-choosing-baby-carriage-in-a-store.webp?b=1&s=170667a&w=0&k=20&c=jJmINmAm-QTvkHj2WLjMmKx-LzCVidDf70kghjwP08U="
                                            alt="Top down view of walnut card tray with embedded magnets and card groove."
                                            className="bg-gray-100 img"
                                        />
                                         <div className="text-overlayed">Best Rotating Car Seats</div>
                                    </div>
                                    <div className="image-container">
                                        <img
                                            src="https://media.istockphoto.com/id/1166345332/photo/pregnant-woman-shopping.webp?b=1&s=170667a&w=0&k=20&c=J0_YnehPqVkCIGoc_OCGFi2iYYwaCshNiaoZs-vzSeU="
                                            alt="Side of walnut card tray with card groove and recessed card area."
                                            className="bg-gray-100 img"
                                        />
                                     <div className="text-overlay">How to Get Free Baby Stuff While Pregnant</div>
                                    </div>
                                    { isLargeScreen ? null : (
                                        <div className="image-container">
                                            <img
                                                src="https://media.istockphoto.com/id/1368186851/photo/young-couple-in-a-shopping-store.webp?b=1&s=170667a&w=0&k=20&c=vxQl5jHnGQqZ1LgieIt8r9mK-qXki4cYkc84AE08Lyw="
                                                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                                                className="bg-gray-100 img"
                                            />
                                             <div className="text-overlay">8 Essential Things You Need to Bring Home a Newborn</div>
                                        </div>
                                    ) }
                                </div>
                                <div className="flex justify-center items-center mt-12">
                                    <button className="px-6 py-2 font-medium tracking-wide text-purple hover:text-white capitalize transition-colors duration-300 transform bg-white border rounded-lg hover:bg-purple focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 custom-button">
                                        View all in Products
                                    </button>
                                </div>

                                <div className="lg:col-span-3 lg:ml-12">
                                <div className='text-2xl font-thin'>Sample Registries</div>
                                    <hr />
                                    <HerosOne />
                                    <div className="grid lg:grid-cols-3 mb-36 sm:grid-cols-2 custom-grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                                        <div className="image-container">
                                            <img
                                                src="https://res.cloudinary.com/babylist/image/upload/f_auto,q_auto:best,c_scale,w_768/v1556658235/hello-baby/etsy-baby-sample-registry-header.jpg"
                                                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                                                className="bg-gray-100 img"            
                                        />
                                            <div className="text-overlayed">Etsy Baby Registry</div>
                                        </div>
                                        <div className="image-container">
                                            <img
                                                src="https://res.cloudinary.com/babylist/image/upload/f_auto,q_auto:best,c_scale,w_768/v1565376312/hello-baby/products-for-summer-babies-swimsuit-hat-header.jpg"
                                                alt="Top down view of walnut card tray with embedded magnets and card groove."
                                                className="bg-gray-100 img"
                                            />
                                             <div className="text-overlay">Having a Summer Baby? Here Are Your Registry Must-Haves</div>
                                        </div>
                                        <div className="image-container">
                                            <img
                                                src="https://res.cloudinary.com/babylist/image/upload/f_auto,q_auto:best,c_scale,w_768/v1576619084/hello-baby/500-dollar-baby-registry-header.jpg"
                                                alt="Side of walnut card tray with card groove and recessed card area."
                                                className="bg-gray-100 img"
                                            />
                                             <div className="text-overlay">Build Your Baby Registry on a $500 Budget</div>
                                        </div>
                                        { isLargeScreen ? null : (
                                            <div className="image-container">
                                                <img
                                                    src="https://res.cloudinary.com/babylist/image/upload/f_auto,q_auto:best,c_scale,w_768/v1580838100/hello-baby/green-baby-sample-registry-header.jpg"
                                                    alt="Walnut card tray filled with cards and card angled in dedicated groove."
                                                    className="bg-gray-100 img"                                                />
                                      <div className="text-overlay">Eco-Friendly Baby Registry</div>
                                            </div>
                                        ) }
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <button className="px-6 py-2 font-medium tracking-wide text-purple hover:text-white capitalize transition-colors duration-300 transform bg-white border rounded-lg hover:bg-purple focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 custom-button">
                                          View all sample registries
                                        </button>
                                    </div>
                                </div>
                                <div className="lg:col-span-3 lg:ml-12">
                                <div className='text-2xl font-thin'>Pregnancy</div>
                                    <hr />
                                    <HerosTwo />
                                    <div className="grid lg:grid-cols-3 mb-36 sm:grid-cols-2 custom-grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                                        <div className="image-container">
                                            <img
                                                src="https://res.cloudinary.com/babylist/image/upload/f_auto,q_auto:best,c_scale,w_768/v1563315823/hello-baby/best-pregnancy-baby-books-2019-header.jpg"
                                                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                                                className="bg-gray-100 img"                                            />
                                            <div className="text-overlay">Best Pregnancy Books</div>
                                        </div>
                                        <div className="image-container">
                                            <img
                                                src="https://res.cloudinary.com/babylist/image/upload/f_auto,q_auto:best,c_scale,w_768/v1508362419/csection_header_alpdy2.jpg"
                                                alt="Top down view of walnut card tray with embedded magnets and card groove."
                                                className="bg-gray-100 img"                                            />
                                             <div className="text-overlay">What to Know about C-Sections</div>
                                        </div>
                                        <div className="image-container">
                                            <img
                                                src="https://res.cloudinary.com/babylist/image/upload/f_auto,q_auto:best,c_scale,w_768/v1650392978/hello-baby/Hospital-Bag-Essentials-Header.jpg"
                                                alt="Side of walnut card tray with card groove and recessed card area."
                                                className="bg-gray-100 img"                                            />
                                             <div className="text-overlay">Ultimately Hospital Bag Checklist for Mom and Baby</div>
                                        </div>
                                        { isLargeScreen ? null : (
                                            <div className="image-container">
                                                <img
                                                    src="https://res.cloudinary.com/babylist/image/upload/f_auto,q_auto:best,c_scale,w_768/v1561148722/hello-baby/best-pregnancy-tests-to-take-header.jpg"
                                                    alt="Walnut card tray filled with cards and card angled in dedicated groove."
                                                    className="bg-gray-100 img"                                                />
                                            <div className="text-overlay">Best Pregnancy Tests to Take in 2023</div>
                                            </div>
                                        ) }
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <button className="px-6 py-2 font-medium tracking-wide text-purple hover:text-white capitalize transition-colors duration-300 transform bg-white border rounded-lg hover:bg-purple focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 custom-button">
                                            View all in Pregnancy
                                        </button>
                                    </div>
                                </div>
                                <div className="lg:col-span-3 lg:ml-12">
                                <div className='text-2xl font-thin'>Pregnancy Week by Week </div>
                                    <hr />
                                    <HerosThree />
                                    <div className="grid lg:grid-cols-3 mb-36 sm:grid-cols-2 custom-grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                                        <div className="image-container">
                                            <img
                                                src="https://res.cloudinary.com/babylist/image/upload/f_auto,q_auto:best,c_scale,w_768/v1572634986/pregnancy-week-by-week/4-weeks-pregnant-babysize-poppy-seed-header.jpg"
                                                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                                                className="bg-gray-100 img"                                            />
                                            <div className="text-overlayed">4 Weeks Pregnant</div>
                                        </div>
                                        <div className="image-container">
                                            <img
                                                src="https://res.cloudinary.com/babylist/image/upload/f_auto,q_auto:best,c_scale,w_768/v1571689046/pregnancy-week-by-week/5-weeks-pregnant-babysize-pop-rock-header.jpg"
                                                alt="Top down view of walnut card tray with embedded magnets and card groove."
                                                className="bg-gray-100 img"                                            />
                                                 <div className="text-overlayed">5 Weeks Pregnant</div>
                                        </div>
                                        <div className="image-container">
                                            <img
                                                src="https://res.cloudinary.com/babylist/image/upload/f_auto,q_auto:best,c_scale,w_768/v1572635703/pregnancy-week-by-week/6-weeks-pregnant-babysize-chiclet-header.jpg"
                                                alt="Side of walnut card tray with card groove and recessed card area."
                                                className="bg-gray-100 img"                                            />
                                                 <div className="text-overlayed">6 Weeks Pregant</div>
                                        </div>
                                        { isLargeScreen ? null : (
                                            <div className="image-container">
                                                <img
                                                    src="https://res.cloudinary.com/babylist/image/upload/f_auto,q_auto:best,c_scale,w_768/v1572643792/pregnancy-week-by-week/29-weeks-pregnant-fanny-pack-header.jpg"
                                                    alt="Walnut card tray filled with cards and card angled in dedicated groove."
                                                    className="bg-gray-100 img"                                                />
                                                     <div className="text-overlay">29 Weeks Pregnant</div>
                                            </div>
                                        ) }
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <button className="px-6 py-2 font-medium tracking-wide text-purple hover:text-white capitalize transition-colors duration-300 transform bg-white border rounded-lg hover:bg-purple focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 custom-button">
                                            View all in Pregnant Week by Week
                                        </button>
                                    </div>
                                </div>
                                <div className="lg:col-span-3 lg:ml-12">
                                <div className='text-2xl font-thin'>Baby Names</div>
                                    <hr />
                                    <HerosFour />
                                    <div className="grid lg:grid-cols-3 mb-36 sm:grid-cols-2 custom-grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                                        <div className="image-container">
                                            <img
                                                src="https://res.cloudinary.com/babylist/image/upload/f_auto,q_auto:best,c_scale,w_768/v1680277846/hello-baby/Baby%20Names/Boy_Baby_Name.jpg"
                                                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                                                className="bg-gray-100 img"                                            />
                                            <div className="text-overlay">Baby Boy Name That Start with A</div>
                                        </div>
                                        <div className="image-container">
                                            <img
                                                src="https://res.cloudinary.com/babylist/image/upload/f_auto,q_auto:best,c_scale,w_768/v1680277846/hello-baby/Baby%20Names/Gender_Neutral_Baby_Name.jpg"
                                                alt="Top down view of walnut card tray with embedded magnets and card groove."
                                                className="bg-gray-100 img"                                            />
                                                 <div className="text-overlay">Gender-Neutral Baby Names That Start with A</div>
                                        </div>
                                        <div className="image-container">
                                            <img
                                                src="https://res.cloudinary.com/babylist/image/upload/f_auto,q_auto:best,c_scale,w_768/v1680277846/hello-baby/Baby%20Names/Girl_Baby_Name.jpg"
                                                alt="Side of walnut card tray with card groove and recessed card area."
                                                className="bg-gray-100 img"                                            />
                                                 <div className="text-overlay">Baby Girl Names That Start with B</div>
                                        </div>
                                        { isLargeScreen ? null : (
                                            <div className="image-container">
                                                <img
                                                    src="https://res.cloudinary.com/babylist/image/upload/f_auto,q_auto:best,c_scale,w_768/v1680277846/hello-baby/Baby%20Names/Boy_Baby_Name.jpg"
                                                    alt="Walnut card tray filled with cards and card angled in dedicated groove."
                                                    className="bg-gray-100 img"                                                />
                                                     <div className="text-overlay">Baby Boy Names That Start with B</div>
                                            </div>
                                        ) }
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <button className="px-6 py-2 font-medium tracking-wide text-purple hover:text-white capitalize transition-colors duration-300 transform bg-white border rounded-lg hover:bg-purple focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 custom-button">
                                            View all in Baby Names
                                        </button>
                                    </div>
                                </div>
                                <div className="lg:col-span-3 lg:ml-12">
                                <div className='text-2xl font-thin'>Parenting</div>
                                    <hr />
                                    <HerosFive />
                                    <div className="grid lg:grid-cols-3 mb-36 sm:grid-cols-2 custom-grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                                        <div className="image-container">
                                            <img
                                                src="https://images.babylist.com/image/upload/f_auto,q_auto:best,c_scale,w_768/v1687296935/hello-baby/how_montessori_can_help_babys_development.jpg"
                                                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                                                className="bg-gray-100 img"                                            />
                                            <div className="text-overlay">Everything You Need to Know About Montessori for Babies</div>
                                        </div>
                                        <div className="image-container">
                                            <img
                                                src="https://images.babylist.com/image/upload/f_auto,q_auto:best,c_scale,w_768/v1686543805/hello-baby/How_to_Plan_a_Disney_Vacation_with_a_Baby_or_Toddler.jpg"
                                                alt="Top down view of walnut card tray with embedded magnets and card groove."
                                                className="bg-gray-100 img"
                                            />
                                                 <div className="text-overlay">How to Plan a Disney Vacation with a Baby</div>
                                        </div>
                                        <div className="image-container">
                                            <img
                                                src="https://images.babylist.com/image/upload/f_auto,q_auto:best,c_scale,w_768/v1687469472/hello-baby/Crafts_for_Toddlers.jpg"
                                                alt="Side of walnut card tray with card groove and recessed card area."
                                                className="bg-gray-100 img"                                            />
                                                 <div className="text-overlay">The Best Crafts for Toddlers</div>
                                        </div>
                                        { isLargeScreen ? null : (
                                            <div className="image-container">
                                                <img
                                                    src="https://images.babylist.com/image/upload/f_auto,q_auto:best,c_scale,w_768/v1681404971/hello-baby/What_is_a_Smash_Cake.jpg"
                                                    alt="Walnut card tray filled with cards and card angled in dedicated groove."
                                                    className="bg-gray-100 img"                                                />
                                                     <div className="text-overlay">Everything You Need to Know About Smash Cakes</div>
                                            </div>
                                        ) }
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <button className="px-6 py-2 font-medium tracking-wide text-purple hover:text-white capitalize transition-colors duration-300 transform bg-white border rounded-lg hover:bg-purple focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 custom-button">
                                            View all in Parenting
                                        </button>
                                    </div>
                                </div>
                                <div className="lg:col-span-3 lg:ml-12">
                                <div className='text-2xl font-thin'>Friends & Family</div>
                                    <hr />
                                    <HerosSix />
                                    <div className="grid lg:grid-cols-3 mb-36 sm:grid-cols-2 custom-grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                                        <div className="image-container">
                                            <img
                                                src="https://res.cloudinary.com/babylist/image/upload/f_auto,q_auto:best,c_scale,w_768/v1523294946/baby_sprinkle_header_egg9kd.jpg"
                                                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                                                className="bg-gray-100 img"                                            />
                                            <div className="text-overlay">What Is a Baby Sprinkle?</div>
                                        </div>
                                        <div className="image-container">
                                            <img
                                                src="https://res.cloudinary.com/babylist/image/upload/f_auto,q_auto:best,c_scale,w_768/v1585852810/hello-baby/virtual-baby-shower-online-header.jpg"
                                                alt="Top down view of walnut card tray with embedded magnets and card groove."
                                                className="bg-gray-100 img"                                            />
                                                 <div className="text-overlay">How to Throw a Virtual Baby Shower</div>
                                        </div>
                                        <div className="image-container">
                                            <img
                                                src="https://images.babylist.com/image/upload/f_auto,q_auto:best,c_scale,w_768/v1677614002/hello-baby/Best_Gifts_for_Toddlers.jpg"
                                                alt="Side of walnut card tray with card groove and recessed card area."
                                                className="bg-gray-100 img"                                            />
                                                 <div className="text-overlay">Best Gifts for Toddlers</div>
                                        </div>
                                        { isLargeScreen ? null : (
                                            <div className="image-container">
                                                <img
                                                    src="https://images.babylist.com/image/upload/f_auto,q_auto:best,c_scale,w_768/v1676595679/hello-baby/How_to_Save_for_Your_Child_s_College_Education_With_a_529.jpg"
                                                    alt="Walnut card tray filled with cards and card angled in dedicated groove."
                                                    className="bg-gray-100 img"                                                 />
                                                     <div className="text-overlay">How to Pay for Baby&apos;s Education with a 529 Plan</div>
                                            </div>
                                        ) }
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <button className="px-6 py-2 font-medium tracking-wide text-purple hover:text-white capitalize transition-colors duration-300 transform bg-white border rounded-lg hover:bg-purple focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 custom-button">
                                            View all in Friends & Family
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}
