import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import PropTypes from "prop-types";

function Application({ formData }) {
    return (
        <aside className="relative block h-16 bg-gray-100 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            {/* personal */}
            <div className="pt-10 pb-3 pl-10 pr-10">
                <h1 className="text-3xl font-semibold uppercase">
                    {formData.firstName} {formData.lastName}
                </h1>
                <p className="text-base">{formData.position}</p>
                <div className="flex items-center justify-between pb-3 mt-1 text-sm">
                    <div className="flex items-center space-x-2">
                        <FaEnvelope />
                        <p>{formData.email}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaPhone />
                        <p>{formData.phone}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaLocationArrow />
                        <p>{formData.location}</p>
                    </div>
                </div>
            </div>
            {/* experience */}
            <div className="pl-10 pr-10">
                <h1 className="pb-1 text-xl font-semibold uppercase border-b-4">
                    Experience
                </h1>
                <p className="text-lg">{formData.jobPosition}</p>
                <p className="font-semibold">{formData.companyName}</p>
                <div className="flex items-center space-x-3 text-sm">
                    <div className="flex items-center space-x-1">
                        <FaCalendar />
                        <p>
                            {formData.startDate} - {formData.endDate}
                        </p>
                    </div>
                    <div className="flex items-center space-x-1">
                        <FaLocationArrow />
                        <p>{formData.companyLocation}</p>
                    </div>
                </div>
                <div className="text-sm">
                    <p>{formData.jobDescription}</p>
                    <ul className="list-disc list-inside">
                        <li>{formData.jobLists}</li>
                        <li>{formData.jobLists}</li>
                        <li>{formData.jobLists}</li>
                    </ul>
                </div>
            </div>
            {/* education */}
            <div className="pt-5 pl-10 pr-10">
                <h1 className="pb-1 text-xl font-semibold uppercase border-b-4">
                    Education
                </h1>
                <p className="text-lg">{formData.major}</p>
                <p className="font-semibold">{formData.university}</p>
                <div className="flex items-center space-x-3 text-sm">
                    <div className="flex items-center space-x-1">
                        <FaCalendar />
                        <p>
                            {formData.universityStartDate} -{" "}
                            {formData.universityEndDate}
                        </p>
                    </div>
                    <div className="flex items-center space-x-1">
                        <FaLocationArrow />
                        <p>{formData.universityLocation}</p>
                    </div>
                </div>
                <div className="text-sm">
                    <p>{formData.universityDescription}</p>
                </div>
            </div>
            {/* skill */}
            <div className="pt-5 pl-10 pr-10">
                <h1 className="pb-1 text-xl font-semibold uppercase border-b-4">
                    Skills
                </h1>
                <div className="flex flex-wrap my-2 space-x-3 text-sm flex-wrapnter">
                    <p className="pb-1 text-center border-b-2 border-black">
                        {formData.skill1}
                    </p>
                    <p className="pb-1 text-center border-b-2 border-black">
                        {formData.skill2}
                    </p>
                    <p className="pb-1 text-center border-b-2 border-black">
                        {formData.skill3}
                    </p>
                    <p className="pb-1 text-center border-b-2 border-black">
                        {formData.skill4}
                    </p>
                    <p className="pb-1 text-center border-b-2 border-black">
                        {formData.skill5}
                    </p>
                    <p className="pb-1 text-center border-b-2 border-black">
                        {formData.skill6}
                    </p>
                </div>
            </div>
        </aside>
    );
}

Application.propTypes = {
    formData: PropTypes.string.isRequired,
};

export default Application;
