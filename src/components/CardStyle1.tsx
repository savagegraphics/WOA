import React from "react";
import Image from "next/image";
import Link from "next/link";

interface SingleCardProps {
    image: string;
    CardTitle: string;
    CardDescription: string;
    Button: string;
    titleHref: string;
    btnHref: string;
}

const SingleCard: React.FC<SingleCardProps> = ({
    image,
    CardTitle,
    CardDescription,
    Button,
    titleHref,
    btnHref,
}) => {
    return (
        <div className="card">
            <Image src={image} alt={CardTitle} width={600} height={400} />
            <h2 className="text-xl m-4">{CardTitle}</h2>
            <p className="text-left p-4">{CardDescription}</p>
            <Link className="inline-block ml-24 rounded-full mt-4 mb-6 text-indigo-600 border border-[#E5E7EB] py-2 px-7 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-indigo-300"
                href={btnHref}>{Button}</Link>
        </div>
    );
};

const Card = () => {
    return (
        <>
            <section className="flex justify-center items-center pt-20 lg:pt-[120px] pb-10 lg:pb-20 h-full bg-[#F3F4F6]">
                <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">

                    <div> <SingleCard
                        image="https://i.ibb.co/r2zns1m/image-01.jpg"
                        CardTitle="Creative Card Component designs graphic elements"
                        titleHref="/#"
                        btnHref="/#"
                        CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit."
                        Button="View Details"
                    /></div>
                    <div> <SingleCard
                        image="https://i.ibb.co/0nbbWM9/image-02-1.jpg"
                        CardTitle="Creative Card Component designs graphic elements"
                        CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing"
                        Button="View Details"
                        titleHref="/#"
                        btnHref="/#"
                    /></div>
                    <div> <SingleCard
                        image="https://i.ibb.co/0nbbWM9/image-02-1.jpg"
                        CardTitle="Creative Card Component designs graphic elements"
                        CardDescription="Lorem ipsum dolor sit amet pretium consectetur adipiscing"
                        Button="View Details"
                        titleHref="/#"
                        btnHref="/#"
                    /></div>
                </div>
            </section>
        </>
    );
};

export default Card;
