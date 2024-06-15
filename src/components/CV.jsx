import React from "react";
import { useState } from "react";

const CV = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    summary: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-5">
          {/* form */}
          <div className="rounded-lg bg-white p-8 shadow-lg space-y-4 lg:col-span-3 lg:p-12">
            {/* contact info */}
            <div className="space-y-4">
              <h3 className="text-xl text-semibold">Contact Information</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="address">
                    First Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="First Name"
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="phone">
                    Last Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Last Name"
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName || ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone || ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="dateOfBirth">
                    Date Of Birth
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Date of Birth"
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth || ""}
                    onChange={handleInputChange}
                  />
                </div>
                {/* <div>
                  <label className="sr-only" htmlFor="address">
                    Address
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Address"
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address || ""}
                    onChange={handleInputChange}
                  />
                </div> */}
              </div>
            </div>
            {/* summary */}
            <div>
              <h3 className="text-xl text-semibold">Professional Summary</h3>
              <div className="my-3">
                <label className="sr-only" htmlFor="summary">
                  Professional Summary
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Professional Summary"
                  type="text"
                  id="summary"
                  name="summary"
                  value={formData.summary || ""}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          {/* card */}
          <div className="rounded-lg bg-white p-8 space-y-2 shadow-lg lg:col-span-2 lg:py-12">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="max-w-max">
                <p className="font-semibold">Name:</p>
                <p className="break-words">
                  {formData.firstName} {formData.lastName}
                </p>
              </div>
              <div className="max-w-max">
                <p className="font-semibold">Email:</p>
                <p className="break-words">{formData.email}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="max-w-max">
                <p className="font-semibold">Phone:</p>
                <p className="break-words">{formData.phone}</p>
              </div>
              <div className="max-w-max">
                <p className="font-semibold">DateOfBirth:</p>
                <p className="break-words">{formData.dateOfBirth}</p>
              </div>
            </div>
            {/* <div className="grid grid-cols-1 gap-4">
              <div className="max-w-sm wrap">
                <p className="font-semibold">Address:</p>
                <p className="break-words">{formData.address}</p>
              </div>
            </div> */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-block w-full  rounded-lg bg-black mt-5 px-3 py-1 font-medium text-white sm:w-auto"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
