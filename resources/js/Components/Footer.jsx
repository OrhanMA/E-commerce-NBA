import React from "react";
import { Link } from "@inertiajs/react";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

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
            <p className="mb-12 text-xl font-bold dark:text-white">
                Jersey shop
            </p>
            <div className="flex h-[200px] w-full justify-between sm:px-12 lg:px-24 items-center">
                <div className="h-full">
                    <p className="mb-4">Shop</p>
                    <div className="flex flex-col gap-1">
                        {routes.map((route, index) => {
                            return (
                                <Link
                                    href={`/products/${route}`}
                                    className="text-sm dark:hover:text-white"
                                    key={index}
                                >
                                    {route}
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <div className="h-full">
                    <p className="mb-4">Useful links</p>
                    <div className="flex flex-col gap-1">
                        {redirections.map((redir, index) => {
                            return (
                                <Link
                                    href={`/${redir.route}`}
                                    className="text-sm dark:hover:text-white"
                                    key={index}
                                >
                                    {redir.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                        <FaGithub />
                        <a target="_blank" href="https://github.com/OrhanMA">
                            OrhanMA
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <FaLink />
                        <a target="_blank" href="https://orhanma.dev">
                            orhanma.dev
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
