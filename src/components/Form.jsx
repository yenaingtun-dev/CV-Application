import { useState } from "react";

function Form() {
    const [isPersonalActive, setIsPersonalActive] = useState(true);
    const [isEducationActive, setIsEducationActive] = useState(false);
    const [isExperienceActive, setIsExperienceActive] = useState(false);
    const [isSkillActive, setIsSkillActive] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [position, setPosition] = useState("");
    const [address, setAddress] = useState("");
    return (
        <main className="flex items-center justify-center px-8 sm:px-12 lg:col-span-7 lg:px-16 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
                <h1 className="mt-10 text-2xl text-gray-900 font-old sm:text-3xl md:text-4xl">
                    Welcome to Online CV Form Creation
                </h1>
                {/* form */}
                <form action="#" className="grid grid-cols-6 gap-6 mt-8">
                    <h3
                        className="col-span-6 text-xl font-semibold cursor-pointer"
                        onClick={() => setIsPersonalActive(!isPersonalActive)}
                    >
                        Personal Details
                    </h3>
                    {isPersonalActive && (
                        <>
                            {/* first name */}
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="FirstName"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    First Name
                                </label>

                                <input
                                    type="text"
                                    id="FirstName"
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                    className="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
                                />
                            </div>
                            {/* last name */}
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="LastName"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Last Name
                                </label>

                                <input
                                    type="text"
                                    id="LastName"
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                    className="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
                                />
                            </div>
                            {/* email */}
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="Email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    {" "}
                                    Email{" "}
                                </label>

                                <input
                                    type="email"
                                    id="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
                                />
                            </div>
                            {/* phone number */}
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="Phone Number"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    {" "}
                                    Phone Number{" "}
                                </label>

                                <input
                                    type="text"
                                    id="PhoneNumber"
                                    value={phoneNumber}
                                    onChange={(e) =>
                                        setPhoneNumber(e.target.value)
                                    }
                                    className="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
                                />
                            </div>
                            {/* position */}
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="Position"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Position
                                </label>

                                <input
                                    type="text"
                                    id="Position"
                                    value={position}
                                    onChange={(e) =>
                                        setPosition(e.target.value)
                                    }
                                    className="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
                                />
                            </div>
                            {/* address */}
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="Address"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Address
                                </label>

                                <input
                                    type="text"
                                    id="Address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
                                />
                            </div>
                        </>
                    )}
                    <h3
                        className="col-span-6 text-xl font-semibold cursor-pointer"
                        onClick={() => setIsEducationActive(!isEducationActive)}
                    >
                        Educations
                    </h3>
                    {isEducationActive && (
                        <>
                            {/* school */}
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="School"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    School
                                </label>

                                <input
                                    type="text"
                                    id="School"
                                    name="school"
                                    className="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
                                />
                            </div>
                            {/* degree */}
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="Degree"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Degree
                                </label>

                                <input
                                    type="text"
                                    id="Degree"
                                    name="degree"
                                    className="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
                                />
                            </div>
                            {/* start date */}
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="Start Date"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    {" "}
                                    Start Date{" "}
                                </label>

                                <input
                                    type="date"
                                    id="StartDate"
                                    name="startDate"
                                    className="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
                                />
                            </div>
                            {/* end date */}
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="End Date"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    {" "}
                                    End Date{" "}
                                </label>

                                <input
                                    type="date"
                                    id="EndDate"
                                    name="endDate"
                                    className="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
                                />
                            </div>
                            {/* location */}
                            <div className="col-span-6">
                                <label
                                    htmlFor="Location"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Location
                                </label>

                                <input
                                    type="text"
                                    id="Location"
                                    name="location"
                                    className="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
                                />
                            </div>
                        </>
                    )}
                    <h3
                        className="col-span-6 text-xl font-semibold cursor-pointer"
                        onClick={() =>
                            setIsExperienceActive(!isExperienceActive)
                        }
                    >
                        Experience
                    </h3>
                    {isExperienceActive && (
                        <>
                            {/* company name */}
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="Company Name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Company Name
                                </label>

                                <input
                                    type="text"
                                    id="Company Name"
                                    name="companyName"
                                    className="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
                                />
                            </div>
                            {/* position */}
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="Position"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Position
                                </label>

                                <input
                                    type="text"
                                    id="Position"
                                    name="position"
                                    className="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
                                />
                            </div>
                            {/* start date */}
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="Start Date"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    {" "}
                                    Start Date{" "}
                                </label>

                                <input
                                    type="date"
                                    id="StartDate"
                                    name="startDate"
                                    className="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
                                />
                            </div>
                            {/* end date */}
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="End Date"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    {" "}
                                    End Date{" "}
                                </label>

                                <input
                                    type="date"
                                    id="EndDate"
                                    name="endDate"
                                    className="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
                                />
                            </div>
                            {/* location */}
                            <div className="col-span-6">
                                <label
                                    htmlFor="Location"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Location
                                </label>

                                <input
                                    type="text"
                                    id="Location"
                                    name="location"
                                    className="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
                                />
                            </div>
                            {/* description */}
                            <div className="col-span-6">
                                <label
                                    htmlFor="Description"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Description
                                </label>

                                <input
                                    type="text"
                                    id="Description"
                                    name="description"
                                    className="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
                                />
                            </div>
                        </>
                    )}
                    <h3
                        className="col-span-6 text-xl font-semibold cursor-pointer"
                        onClick={() => setIsSkillActive(!isSkillActive)}
                    >
                        Skill
                    </h3>
                    {isSkillActive && (
                        <>
                            {/* skills */}
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="Skill"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Skill
                                </label>

                                <input
                                    type="text"
                                    id="Skill"
                                    name="skill"
                                    className="w-full mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm"
                                />
                            </div>
                        </>
                    )}
                    {/* download button */}
                    <div className="col-span-6 mb-12 sm:flex sm:items-center sm:gap-4">
                        <button className="inline-block px-12 py-3 text-sm font-medium text-white transition bg-blue-600 border border-blue-600 rounded-md shrink-0 hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                            Download CV
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Form;
