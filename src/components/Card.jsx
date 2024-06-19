import React from "react";
import jsPDF from "jspdf";

const Card = ({ formData, previewUrl }) => {
  const downloadPDF = () => {
    const doc = new jsPDF("portrait", "px", "a4");
    const margin = 10;
    const element = document.querySelector("#cv-card");
    doc.html(element, {
      x: margin,
      y: margin,
      html2canvas: { scale: 0.6 },
      callback: function (doc) {
        doc.save(`${formData.firstName}.pdf`);
      },
    });
  };

  return (
    <div className="rounded-lg bg-white p-8 space-y-5 shadow-lg lg:col-span-2 lg:py-12">
      {/* image */}
      <div className="flex mb-3">
        <div className="shrink-0">
          {previewUrl ? (
            <img
              id="preview_img"
              className="h-20 w-20 object-cover rounded-full"
              src={previewUrl}
              alt="Current profile photo"
            />
          ) : (
            <img
              id="preview_img"
              className="h-20 w-20 object-cover rounded-full"
              src="https://yoonskin.com.mm/default_image.png"
              alt="Current profile photo"
            />
          )}
        </div>
      </div>
      <div id="cv-card">
        {/* contact information */}
        <div className="space-y-2">
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
        </div>
        {/* work experience */}
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
        {/* education */}
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
        {/* skills */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold my-3">Skills</h3>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="max-w-max">
              <p className="font-semibold">Technical Skills:</p>
              <p className="break-words">{formData.technicalSkills}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="max-w-max">
              <p className="font-semibold">Soft Skills:</p>
              <p className="break-words">{formData.softSkills}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="max-w-max">
              <p className="font-semibold">Languages:</p>
              <p className="break-words">{formData.languages}</p>
            </div>
          </div>
        </div>
        {/* projects */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold my-3">Projects</h3>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="max-w-max">
              <p className="font-semibold">Project Title:</p>
              <p className="break-words">{formData.projectTitle}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="max-w-max">
              <p className="font-semibold">Description:</p>
              <p className="break-words">{formData.projectDescription}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="max-w-max">
              <p className="font-semibold">Technologies:</p>
              <p className="break-words">{formData.techonologies}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={downloadPDF}
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
