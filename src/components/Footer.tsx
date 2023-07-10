export function Footer() {
    return (
        <section className="py-16 pb-40 relative">
            <div className="container">
                <div className="flex justify-between max-md:flex-col max-md:gap-16">
                    <p className="text-body-color w-96 max-md:w-full">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                        lobortis.
                    </p>
                    <div className="grid grid-cols-3 gap-8 max-md:grid-cols-2">
                        <div className="">
                            <ul className="flex flex-col gap-4">
                                <span className="text-white text-2xl font-bold mb-4">
                                    Useful Links
                                </span>
                                <li className="text-body-color">Blog</li>
                                <li className="text-body-color">Colletions</li>
                                <li className="text-body-color">About</li>
                            </ul>
                        </div>
                        <div className="">
                            <ul className="flex flex-col gap-4">
                                <span className="text-white text-2xl font-bold mb-4">
                                    Terms
                                </span>
                                <li className="text-body-color">TOS</li>
                                <li className="text-body-color">Privacy Policy</li>
                                <li className="text-body-color">Refund Policy</li>
                            </ul>
                        </div>
                        <div className="">
                            <ul className="flex flex-col gap-4">
                                <span className="text-white text-2xl font-bold mb-4">
                                    Support & Help
                                </span>
                                <li className="text-body-color">Open Source Ticket</li>
                                <li className="text-body-color">Terms of Use</li>
                                <li className="text-body-color">About</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-center border-t border-zinc-800 absolute left-0 right-0 bottom-0">
                    <div className="container">
                        <div className="flex py-4 justify-between max-md:flex-col max-md:gap-8">
                            <span>&copy; 2023</span>
                            <div className="space-x-4">
                                <a href="">Privacy Policy</a>
                                <a>Terms of Services</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
