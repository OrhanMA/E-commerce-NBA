import React from "react";
import { Link } from "@inertiajs/react";
import { FaGithub } from "react-icons/fa";

const routes = ["Jerseys", "Basketballs", "Clothing", "Goodies", "Other"];
const logged_redirections = [
    { name: "Contact", route: "contact" },
    { name: "Profile", route: "profile" },
    { name: "My orders", route: "my-orders" },
];
const guest_redirections = [
    { name: "Contact", route: "contact" },
    { name: "Login", route: "login" },
    { name: "Register", route: "register" },
];
function Footer({ auth }) {
    let user = auth.user;
    const redirections = user ? logged_redirections : guest_redirections;
    return (
        <div className="dark:bg-zinc-700 border-t dark:border-gray-200 dark:text-gray-200 p-12">
            <p className="mb-12 text-center text-xl md:text-2xl font-bold dark:text-white">
                Jersey shop
            </p>
            <div className="flex flex-col sm:flex-wrap h-[200px] w-full gap-6 justify-around sm:px-12 pb-6 lg:px-24 items-center">
                <div className="w-full sm:w-2/3  flex justify-around flex-wrap">
                    <div className="h-full">
                        <p className="mb-4 font-semibold md:text-xl">Shop</p>
                        <div className="flex flex-col gap-1">
                            {routes.map((route, index) => {
                                return (
                                    <Link
                                        href={`/products/${route}`}
                                        className="text-sm dark:hover:text-white hover:underline duration-200 md:text-lg"
                                        key={index}
                                    >
                                        {route}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <div className="h-full">
                        <p className="mb-4 font-semibold md:text-xl">
                            Useful links
                        </p>
                        <div className="flex flex-col gap-1">
                            {redirections.map((redir, index) => {
                                return (
                                    <Link
                                        href={`/${redir.route}`}
                                        className="text-sm dark:hover:text-white hover:underline duration-200 md:text-lg"
                                        key={index}
                                    >
                                        {redir.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-1/3 flex items-center justify-evenly gap-6">
                    <a
                        target="_blank"
                        className="md:text-lg"
                        href="https://github.com/OrhanMA"
                    >
                        <FaGithub size={30} />
                    </a>
                    <a
                        target="_blank"
                        className="md:text-lg"
                        href="https://orhanma.dev"
                    >
                        orhanma.dev
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
