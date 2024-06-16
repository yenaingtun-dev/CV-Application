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
        <div className="grid grid-cols-1">
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
      {/* work experience */}
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
      {/* education */}
      <div className="space-y-4">
        <h3 className="text-xl text-semibold">Education</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="sr-only" htmlFor="degree">
              Degree Obtained
            </label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Degree Obtained"
              type="text"
              id="degree"
              name="degree"
              value={formData.degree || ""}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="institutionName">
              Institution Name
            </label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Institution Name"
              type="text"
              id="institutionName"
              name="institutionName"
              value={formData.institutionName || ""}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="schoolLocation">
              Location
            </label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Location"
              type="text"
              id="schoolLocation"
              name="schoolLocation"
              value={formData.schoolLocation || ""}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="graduationDate">
              Graduation Date
            </label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Graduation Date"
              type="date"
              id="graduationDate"
              name="graduationDate"
              value={formData.graduationDate || ""}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      {/* skills */}
      <div className="space-y-4">
        <h3 className="text-xl text-semibold">Skills</h3>
        <div className="grid grid-cols-1 space-y-4">
          <div>
            <label className="sr-only" htmlFor="technicalSkills">
              Technical Skills
            </label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Technical Skills"
              type="text"
              id="technicalSkills"
              name="technicalSkills"
              value={formData.technicalSkills || ""}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="softSkills">
              Soft Skills
            </label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Soft Skills"
              type="text"
              id="softSkills"
              name="softSkills"
              value={formData.softSkills || ""}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="languages">
              Languages
            </label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Languages"
              type="text"
              id="languages"
              name="languages"
              value={formData.languages || ""}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      {/* projects */}
      <div className="space-y-4">
        <h3 className="text-xl text-semibold">Projects</h3>
        <div className="grid grid-cols-1 space-y-4">
          <div>
            <label className="sr-only" htmlFor="projectTitle">
              Project Title
            </label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Project Title"
              type="text"
              id="projectTitle"
              name="projectTitle"
              value={formData.projectTitle || ""}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="projectDescription">
              Description
            </label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Description"
              type="text"
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription || ""}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="techonologies">
              Technologies
            </label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Technologies"
              type="text"
              id="techonologies"
              name="techonologies"
              value={formData.techonologies || ""}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
