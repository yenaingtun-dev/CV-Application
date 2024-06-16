import React from "react";

const Card = ({ formData }) => {
  return (
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
      <div className="grid grid-cols-1 gap-4">
        <div className="max-w-max ">
          <p className="font-semibold">Professional Summary:</p>
          <p className="break-words">{formData.summary}</p>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-bold my-3">Experience</h3>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="max-w-max">
            <p className="font-semibold">Job Title:</p>
            <p className="break-words">{formData.jobTitle}</p>
          </div>
          <div className="max-w-max">
            <p className="font-semibold">Company Name:</p>
            <p className="break-words">{formData.companyName}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="max-w-max">
            <p className="font-semibold">Location:</p>
            <p className="break-words">{formData.location}</p>
          </div>
          <div className="max-w-max">
            <p className="font-semibold">Date Of Employment:</p>
            <p className="break-words">{formData.dateOfEmployment}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="max-w-max">
            <p className="font-semibold">Job Description:</p>
            <p className="break-words">{formData.jobDescription}</p>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-bold my-3">Education</h3>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="max-w-max">
            <p className="font-semibold">Degree Obtained:</p>
            <p className="break-words">{formData.degree}</p>
          </div>
          <div className="max-w-max">
            <p className="font-semibold">Institution Name:</p>
            <p className="break-words">{formData.institutionName}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="max-w-max">
            <p className="font-semibold">Location:</p>
            <p className="break-words">{formData.schoolLocation}</p>
          </div>
          <div className="max-w-max">
            <p className="font-semibold">Graduation Date:</p>
            <p className="break-words">{formData.graduationDate}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-block w-full  rounded-lg bg-black mt-5 px-3 py-1 font-medium text-white sm:w-auto"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default Card;
