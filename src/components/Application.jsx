import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
function Application() {
    return (
        <aside className="relative block h-16 bg-gray-100 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            {/* personal */}
            <div className="pt-10 pb-3 pl-10 pr-10">
                <h1 className="text-3xl font-semibold uppercase">John Doe</h1>
                <p className="text-base">Web Developer</p>
                <div className="flex items-center justify-between pb-3 mt-1 text-sm">
                    <div className="flex items-center space-x-2">
                        <FaEnvelope />
                        <p>mail@mail.com</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaPhone />
                        <p>+44 3245 5521 5521</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaLocationArrow />
                        <p>London, UK</p>
                    </div>
                </div>
            </div>
            {/* experience */}
            <div className="pl-10 pr-10">
                <h1 className="pb-1 text-xl font-semibold uppercase border-b-4">
                    Experience
                </h1>
                <p className="text-lg">Web Developer</p>
                <p className="font-semibold">Myint Thu Kha Nadi Comapny</p>
                <div className="flex items-center space-x-3 text-sm">
                    <div className="flex items-center space-x-1">
                        <FaCalendar />
                        <p>2022 - 2023</p>
                    </div>
                    <div className="flex items-center space-x-1">
                        <FaLocationArrow />
                        <p>yangon</p>
                    </div>
                </div>
                <div className="text-sm">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Eos, aperiam.
                    </p>
                    <ul className="list-disc list-inside">
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>
            </div>
            {/* education */}
            <div className="pt-5 pl-10 pr-10">
                <h1 className="pb-1 text-xl font-semibold uppercase border-b-4">
                    Education
                </h1>
                <p className="text-lg">Botany</p>
                <p className="font-semibold">
                    Dagon University Distance Education
                </p>
                <div className="flex items-center space-x-3 text-sm">
                    <div className="flex items-center space-x-1">
                        <FaCalendar />
                        <p>2017 - 2019</p>
                    </div>
                    <div className="flex items-center space-x-1">
                        <FaLocationArrow />
                        <p>yangon</p>
                    </div>
                </div>
                <div className="text-sm">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Eos, aperiam.
                    </p>
                    <ul className="list-disc list-inside">
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>
            </div>
            {/* skill */}
            <div className="pt-5 pl-10 pr-10">
                <h1 className="pb-1 text-xl font-semibold uppercase border-b-4">
                    Skills
                </h1>
                <div className="flex flex-wrap my-2 space-x-3 text-sm flex-wrapnter">
                    <p className="pb-1 text-center border-b-2 border-black">
                        HTML
                    </p>
                    <p className="pb-1 text-center border-b-2 border-black">
                        CSS
                    </p>
                    <p className="pb-1 text-center border-b-2 border-black">
                        JavaScript
                    </p>
                    <p className="pb-1 text-center border-b-2 border-black">
                        ReactJS
                    </p>
                    <p className="pb-1 text-center border-b-2 border-black">
                        PHP
                    </p>
                    <p className="pb-1 text-center border-b-2 border-black">
                        Laravel
                    </p>
                </div>
            </div>
        </aside>
    );
}

export default Application;
