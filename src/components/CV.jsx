import Application from "./Application";
import Form from "./Form";

function CV() {
    return (
        <section className="bg-white">
            <div className="lg:grid lg:grid-cols-12">
                <Application />
                <Form />
            </div>
        </section>
    );
}
export default CV;
