import React from "react";

const Form = ({ formData, setFormData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
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
      {/* Work Experience */}
      <div className="space-y-4">
        <h3 className="text-xl text-semibold">Work Experience</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="sr-only" htmlFor="jobTitle">
              Job Title
            </label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Job Title"
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle || ""}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="companyName">
              Company Name
            </label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Company Name"
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName || ""}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="sr-only" htmlFor="location">
              Location
            </label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Location"
              type="text"
              id="location"
              name="location"
              value={formData.location || ""}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="dateOfEmployment">
              Dates of Employment
            </label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Date of Employment"
              type="date"
              id="dateOfEmployment"
              name="dateOfEmployment"
              value={formData.dateOfEmployment || ""}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="sr-only" htmlFor="jobDescription">
              Job Description
            </label>
            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Job Description"
              type="text"
              id="jobDescription"
              name="jobDescription"
              value={formData.jobDescription || ""}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
