import Application from "./Application";
import Form from "./Form";
import { useState } from "react";

function CV() {
    const [formData, setFormData] = useState({
        firstName: "John",
        lastName: "Doe",
        position: "Web Developer",
        email: "mail@mail.com",
        phone: "+44 3245 5521 5521",
        location: "London, UK",
        jobPosition: "Web Developer",
        companyName: "Myint Thu Kha Nadi Comapny",
        startDate: "2022",
        endDate: "2023",
        companyLocation: "yangon",
        jobDescription:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, aperiam.",
        jobLists: "Lorem ipsum dolor sit amet.",
        major: "Botany",
        university: "Dagon University Distance Education",
        universityStartDate: "2017",
        universityEndDate: "2019",
        universityLocation: "yangon",
        universityDescription:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, aperiam.",
        skill1: "HTML",
        skill2: "CSS",
        skill3: "JavaScript",
        skill4: "ReactJS",
        skill5: "PHP",
        skill6: "Laravel",
    });

    return (
        <section className="bg-white">
            <div className="lg:grid lg:grid-cols-12">
                <Application formData={formData} />
                <Form />
            </div>
        </section>
    );
}
export default CV;
