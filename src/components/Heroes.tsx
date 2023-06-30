import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <header className="relative bg-cover bg-fixed overflow-hidden" style={{ backgroundImage: "url('https://media.istockphoto.com/id/1225967990/photo/pregnant-woman-beaming-with-joy-holds-ultrasound-scan-in-front-of-round-belly.jpg?s=612x612&w=0&k=20&c=W4q1QOWQyROZ-KJ9y724tF22kvRcVSUUwTLaPDPmQIQ=')" }}>
            <div className="overlay w-full h-full p-10 text-white text-center">
                <h1 className="font-dancingScript text-6xl mb-8">Simply The Best</h1>
                <h3 className="font-openSans text-3xl mb-8">Reasons for Choosing US</h3>
                <p className="font-openSans text-xl mb-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
                <br />
                <button className="border-none outline-none py-2 px-6 rounded-full text-black bg-white mb-12 shadow-md">READ MORE</button>
                <button className="border-none outline-none py-2 px-6 rounded-full text-black bg-white mb-12 shadow-md">READ MORE</button>
            </div>
        </header>

    );
}
