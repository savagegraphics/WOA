
import { Fragment, useState } from 'react'
import { useEffect } from 'react';
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import './Tailwind.css';
import Image from 'next/image';
import Heros from './Heros';

const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
    { name: 'Totes', href: '#' },
    { name: 'Backpacks', href: '#' },
    { name: 'Travel Bags', href: '#' },
    { name: 'Hip Bags', href: '#' },
    { name: 'Laptop Sleeves', href: '#' },
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
                                        <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                                            { subCategories.map((category) => (
                                                <li key={ category.name }>
                                                    <a href={ category.href } className="block px-2 py-3">
                                                        { category.name }
                                                    </a>
                                                </li>
                                            )) }
                                        </ul>

                                        { filters.map((section) => (
                                            <Disclosure as="div" key={ section.id } className="border-t border-gray-200 px-4 py-6">
                                                { ({ open }) => (
                                                    <>
                                                        <h3 className="-mx-2 -my-3 flow-root">
                                                            <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                                <span className="font-medium text-gray-900">{ section.name }</span>
                                                                <span className="ml-6 flex items-center">
                                                                    { open ? (
                                                                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                                    ) : (
                                                                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                                    ) }
                                                                </span>
                                                            </Disclosure.Button>
                                                        </h3>
                                                        <Disclosure.Panel className="pt-6">
                                                            <div className="space-y-6">
                                                                { section.options.map((option, optionIdx) => (
                                                                    <div key={ option.value } className="flex items-center">
                                                                        <input
                                                                            id={ `filter-mobile-${section.id}-${optionIdx}` }
                                                                            name={ `${section.id}[]` }
                                                                            defaultValue={ option.value }
                                                                            type="checkbox"
                                                                            defaultChecked={ option.checked }
                                                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                        />
                                                                        <label
                                                                            htmlFor={ `filter-mobile-${section.id}-${optionIdx}` }
                                                                            className="ml-3 min-w-0 flex-1 text-gray-500"
                                                                        >
                                                                            { option.label }
                                                                        </label>
                                                                    </div>
                                                                )) }
                                                            </div>
                                                        </Disclosure.Panel>
                                                    </>
                                                ) }
                                            </Disclosure>
                                        )) }
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                        { isLargeScreen ? (
                            <h1 className="text-xl font-thin tracking-tight text-gray-900 hidden lg:block">Guides</h1>
                        ) : null }
                        <h1 className="text-xl font-thin tracking-tight text-gray-900">
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
                                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                                    { subCategories.map((category) => (
                                        <li key={ category.name }>
                                            <a href={ category.href }>{ category.name }</a>
                                        </li>
                                    )) }
                                </ul>

                                { filters.map((section) => (
                                    <Disclosure as="div" key={ section.id } className="border-b border-gray-200 py-6">
                                        { ({ open }) => (
                                            <>
                                                <h3 className="-my-3 flow-root">
                                                    <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                                        <span className="font-medium text-gray-900">{ section.name }</span>
                                                        <span className="ml-6 flex items-center">
                                                            { open ? (
                                                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                            ) : (
                                                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                            ) }
                                                        </span>
                                                    </Disclosure.Button>
                                                </h3>
                                                <Disclosure.Panel className="pt-6">
                                                    <div className="space-y-4">
                                                        { section.options.map((option, optionIdx) => (
                                                            <div key={ option.value } className="flex items-center">
                                                                <input
                                                                    id={ `filter-${section.id}-${optionIdx}` }
                                                                    name={ `${section.id}[]` }
                                                                    defaultValue={ option.value }
                                                                    type="checkbox"
                                                                    defaultChecked={ option.checked }
                                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                />
                                                                <label
                                                                    htmlFor={ `filter-${section.id}-${optionIdx}` }
                                                                    className="ml-3 text-sm text-gray-600"
                                                                >
                                                                    { option.label }
                                                                </label>
                                                            </div>
                                                        )) }
                                                    </div>
                                                </Disclosure.Panel>
                                            </>
                                        ) }
                                    </Disclosure>
                                )) }
                            </form>

                            {/* Product grid */ }
                            <div className="lg:col-span-3 lg:ml-12">
                                <Heros />


                                <div className="grid lg:grid-cols-3 sm:grid-cols-2 custom-grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                                    <div className="image-container">
                                        <img
                                            src="https://media.istockphoto.com/id/500753843/photo/young-pregnant-woman.jpg?s=612x612&w=0&k=20&c=ukvDWdHuX6U4caIQabsFAn-6KyaZd7uq4X-5GwMMEQ0="
                                            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                                            className="rounded-lg bg-gray-100"
                                        />
                                        <div className="text-overlay">How to Get Free Baby Stuff While Pregnant</div>
                                    </div>
                                    <div className="image-container">
                                        <img
                                            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                                            alt="Top down view of walnut card tray with embedded magnets and card groove."
                                            className="rounded-lg bg-gray-100"
                                        />
                                    </div>
                                    <div className="image-container">
                                        <img
                                            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                                            alt="Side of walnut card tray with card groove and recessed card area."
                                            className="rounded-lg bg-gray-100"
                                        />
                                    </div>
                                    { isLargeScreen ? null : (
                                        <div className="image-container">
                                            <img
                                                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                                                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                                                className="rounded-lg bg-gray-100"
                                            />
                                        </div>
                                    ) }
                                </div>
                                <div className="flex justify-center items-center">
                                    <button className="px-6 py-2 font-medium tracking-wide text-purple hover:text-white capitalize transition-colors duration-300 transform bg-white border rounded-lg hover:bg-purple focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 custom-button">
                                        View all in Products
                                    </button>
                                </div>

                                <div className="lg:col-span-3 lg:ml-12">
                                    <div>Products</div>
                                    <hr />
                                    <Heros />
                                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 custom-grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                                        <div className="image-container">
                                            <img
                                                src="https://media.istockphoto.com/id/500753843/photo/young-pregnant-woman.jpg?s=612x612&w=0&k=20&c=ukvDWdHuX6U4caIQabsFAn-6KyaZd7uq4X-5GwMMEQ0="
                                                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                                                className="rounded-lg bg-gray-100"
                                            />
                                            <div className="text-overlay">How to Get Free Baby Stuff While Pregnant</div>
                                        </div>
                                        <div className="image-container">
                                            <img
                                                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                                                alt="Top down view of walnut card tray with embedded magnets and card groove."
                                                className="rounded-lg bg-gray-100"
                                            />
                                        </div>
                                        <div className="image-container">
                                            <img
                                                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                                                alt="Side of walnut card tray with card groove and recessed card area."
                                                className="rounded-lg bg-gray-100"
                                            />
                                        </div>
                                        { isLargeScreen ? null : (
                                            <div className="image-container">
                                                <img
                                                    src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                                                    alt="Walnut card tray filled with cards and card angled in dedicated groove."
                                                    className="rounded-lg bg-gray-100"
                                                />
                                            </div>
                                        ) }
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <button className="px-6 py-2 font-medium tracking-wide text-purple hover:text-white capitalize transition-colors duration-300 transform bg-white border rounded-lg hover:bg-purple focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 custom-button">
                                            View all in Products
                                        </button>
                                    </div>
                                </div>
                                <div className="lg:col-span-3 lg:ml-12">
                                    <div>Products</div>
                                    <hr />
                                    <Heros />
                                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 custom-grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                                        <div className="image-container">
                                            <img
                                                src="https://media.istockphoto.com/id/500753843/photo/young-pregnant-woman.jpg?s=612x612&w=0&k=20&c=ukvDWdHuX6U4caIQabsFAn-6KyaZd7uq4X-5GwMMEQ0="
                                                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                                                className="rounded-lg bg-gray-100"
                                            />
                                            <div className="text-overlay">How to Get Free Baby Stuff While Pregnant</div>
                                        </div>
                                        <div className="image-container">
                                            <img
                                                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                                                alt="Top down view of walnut card tray with embedded magnets and card groove."
                                                className="rounded-lg bg-gray-100"
                                            />
                                        </div>
                                        <div className="image-container">
                                            <img
                                                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                                                alt="Side of walnut card tray with card groove and recessed card area."
                                                className="rounded-lg bg-gray-100"
                                            />
                                        </div>
                                        { isLargeScreen ? null : (
                                            <div className="image-container">
                                                <img
                                                    src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                                                    alt="Walnut card tray filled with cards and card angled in dedicated groove."
                                                    className="rounded-lg bg-gray-100"
                                                />
                                            </div>
                                        ) }
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <button className="px-6 py-2 font-medium tracking-wide text-purple hover:text-white capitalize transition-colors duration-300 transform bg-white border rounded-lg hover:bg-purple focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 custom-button">
                                            View all in Products
                                        </button>
                                    </div>
                                </div>
                                <div className="lg:col-span-3 lg:ml-12">
                                    <div>Products</div>
                                    <hr />
                                    <Heros />
                                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 custom-grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                                        <div className="image-container">
                                            <img
                                                src="https://media.istockphoto.com/id/500753843/photo/young-pregnant-woman.jpg?s=612x612&w=0&k=20&c=ukvDWdHuX6U4caIQabsFAn-6KyaZd7uq4X-5GwMMEQ0="
                                                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                                                className="rounded-lg bg-gray-100"
                                            />
                                            <div className="text-overlay">How to Get Free Baby Stuff While Pregnant</div>
                                        </div>
                                        <div className="image-container">
                                            <img
                                                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                                                alt="Top down view of walnut card tray with embedded magnets and card groove."
                                                className="rounded-lg bg-gray-100"
                                            />
                                        </div>
                                        <div className="image-container">
                                            <img
                                                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                                                alt="Side of walnut card tray with card groove and recessed card area."
                                                className="rounded-lg bg-gray-100"
                                            />
                                        </div>
                                        { isLargeScreen ? null : (
                                            <div className="image-container">
                                                <img
                                                    src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                                                    alt="Walnut card tray filled with cards and card angled in dedicated groove."
                                                    className="rounded-lg bg-gray-100"
                                                />
                                            </div>
                                        ) }
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <button className="px-6 py-2 font-medium tracking-wide text-purple hover:text-white capitalize transition-colors duration-300 transform bg-white border rounded-lg hover:bg-purple focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 custom-button">
                                            View all in Products
                                        </button>
                                    </div>
                                </div>
                                <div className="lg:col-span-3 lg:ml-12">
                                    <div>Products</div>
                                    <hr />
                                    <Heros />
                                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 custom-grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                                        <div className="image-container">
                                            <img
                                                src="https://media.istockphoto.com/id/500753843/photo/young-pregnant-woman.jpg?s=612x612&w=0&k=20&c=ukvDWdHuX6U4caIQabsFAn-6KyaZd7uq4X-5GwMMEQ0="
                                                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                                                className="rounded-lg bg-gray-100"
                                            />
                                            <div className="text-overlay">How to Get Free Baby Stuff While Pregnant</div>
                                        </div>
                                        <div className="image-container">
                                            <img
                                                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                                                alt="Top down view of walnut card tray with embedded magnets and card groove."
                                                className="rounded-lg bg-gray-100"
                                            />
                                        </div>
                                        <div className="image-container">
                                            <img
                                                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                                                alt="Side of walnut card tray with card groove and recessed card area."
                                                className="rounded-lg bg-gray-100"
                                            />
                                        </div>
                                        { isLargeScreen ? null : (
                                            <div className="image-container">
                                                <img
                                                    src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                                                    alt="Walnut card tray filled with cards and card angled in dedicated groove."
                                                    className="rounded-lg bg-gray-100"
                                                />
                                            </div>
                                        ) }
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <button className="px-6 py-2 font-medium tracking-wide text-purple hover:text-white capitalize transition-colors duration-300 transform bg-white border rounded-lg hover:bg-purple focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 custom-button">
                                            View all in Products
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
