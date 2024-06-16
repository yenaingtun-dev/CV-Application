import React from "react";
import Form from "./Form";
import { useState } from "react";
import Card from "./Card";

const CV = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    summary: "",
    jobTitle: "",
    companyName: "",
    location: "",
    dateOfEmployment: "",
    jobDescription: "",
    degree: "",
    institutionName: "",
    schoolLocation: "",
    graduationDate: "",
    technicalSkills: "",
    softSkills: "",
    languages: "",
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
          <Form  formData={formData} setFormData={setFormData}  />
          {/* card */}
          <Card formData={formData} />
        </div>
      </div>
    </section>
  );
};

export default CV;
