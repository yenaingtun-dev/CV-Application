import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
function Application() {
    return (
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <div className="p-10 text-center bg-red-300">
                <h1 className="text-xl uppercase">John Doe</h1>
                <div className="flex items-center justify-center">
                    <div className="flex items-center">
                        <FaEnvelope />
                        <p>mail@mail.com</p>
                    </div>
                    <div className="flex items-center">
                        <FaPhone />
                        <p>+44 3245 5521 5521</p>
                    </div>
                    <div className="flex items-center">
                        <FaLocationArrow />
                        <p>London, UK</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Application;
