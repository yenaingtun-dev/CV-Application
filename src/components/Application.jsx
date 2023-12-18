function Application() {
    return (
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
            <div className="p-10 text-center bg-red-300">
                <h1 className="text-xl uppercase">John Doe</h1>
                <div className="flex items-center justify-center">
                    <div>
                        <p>mail@mail.com</p>
                    </div>
                    <div>
                        <p>+44 3245 5521 5521</p>
                    </div>
                    <div>
                        <p>London, UK</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Application;
