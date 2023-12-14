import React, { useState, useEffect } from "react";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { usePage } from "@inertiajs/react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const routes = [
    { route: "Jerseys" },
    { route: "Basketballs" },
    { route: "Clothing" },
    { route: "Goodies" },
    { route: "Other" },
];

export default function Authenticated({ auth, header, children }) {
    const { url } = usePage();
    let user = auth.user;
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();
    const [windowWidth, setWindowWidth] = useState(null);

    useEffect(() => {
        const updateWindowWidth = () => {
            setWindowWidth(window.innerWidth);
        };

        // Initial update
        updateWindowWidth();

        // Event listener for window resize
        window.addEventListener("resize", updateWindowWidth);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", updateWindowWidth);
        };
    }, [windowWidth]);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();

        // quand scroll si scroll en bas
        if (latest > previous && latest > 150) {
            // cache header
            setHidden(true);
        } else {
            // sinon c'est un scroll en haut et donc montre header
            setHidden(false);
        }
    });

    return (
        <motion.nav
            className="sticky top-0 z-20"
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.25, ease: "easeInOut" }}
        >
            <nav
                role="navigation"
                className=" bg-white dark:bg-zinc-800 dark:text-gray-200 border-b border-gray-400 border-opacity-25 dark:border-opacity-100"
            >
                <nav className="max-w-7xl mx-auto px-4  lg:px-8 ">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="mr-6 shrink-0 flex items-center">
                                <NavLink
                                    className="h-full"
                                    href={`/`}
                                    active={url == `/`}
                                    aria-current={
                                        url == `/` ? "page" : undefined
                                    }
                                >
                                    Home
                                </NavLink>

                                <h1 id="logoLabel" className="sr-only">
                                    Jersey Shop
                                </h1>
                            </div>

                            <div className="hidden space-x-1 md:space-x-8 sm:-my-px md:ms-10 sm:flex">
                                {routes.map((route, index) => {
                                    return (
                                        <NavLink
                                            key={index}
                                            href={`/products/${route.route}`}
                                            active={
                                                url ==
                                                `/products/${route.route}`
                                            }
                                            aria-current={
                                                url ==
                                                `/products/${route.route}`
                                                    ? `page ${route.route}`
                                                    : undefined
                                            }
                                        >
                                            {route.route}
                                        </NavLink>
                                    );
                                })}
                                <NavLink
                                    href={"/cart"}
                                    active={url == `/cart`}
                                    aria-current={
                                        url == `/cart`
                                            ? "page contact"
                                            : undefined
                                    }
                                >
                                    Cart
                                </NavLink>
                            </div>
                        </div>
                        <div className="hidden sm:flex sm:items-center sm:ms-6">
                            <div className="md:sm-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                aria-label={user && user.name}
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white dark:bg-zinc-400 dark:text-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {user ? (
                                                    <>{user.name}</>
                                                ) : (
                                                    <p>Guest</p>
                                                )}

                                                <svg
                                                    className="ms-2 -me-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content
                                        contentClasses={`
                                        ${hidden ? "hidden" : "visible"}
                                    bg-white dark:bg-zinc-700 dark:border dark:border-opacity-25 dark:border-gray-200`}
                                    >
                                        <Dropdown.Link href={"/cart"}>
                                            Cart
                                        </Dropdown.Link>
                                        <Dropdown.Link href={"/contact"}>
                                            Contact
                                        </Dropdown.Link>
                                        {user ? (
                                            <>
                                                <Dropdown.Link
                                                    href={"/my-orders"}
                                                >
                                                    My Orders
                                                </Dropdown.Link>
                                                {user.is_admin == 1 && (
                                                    <Dropdown.Link
                                                        className="text-violet-500"
                                                        href={"/admin"}
                                                    >
                                                        Admin dashboard
                                                    </Dropdown.Link>
                                                )}
                                                <Dropdown.Link
                                                    href={route("profile.edit")}
                                                >
                                                    Profile
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    href={route("logout")}
                                                    method="post"
                                                    as="button"
                                                >
                                                    Log Out
                                                </Dropdown.Link>
                                            </>
                                        ) : (
                                            <>
                                                <Dropdown.Link
                                                    href={route("login")}
                                                >
                                                    Log in
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    href={"/register"}
                                                    method="get"
                                                    as="button"
                                                >
                                                    Register
                                                </Dropdown.Link>
                                            </>
                                        )}
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </nav>

                <div
                    className={`
                   ${
                       (showingNavigationDropdown ? "block" : "hidden") +
                       " sm:hidden"
                   }
                 duration-200`}
                >
                    <div className="pt-2 pb-3 space-y-1">
                        {routes.map((route) => {
                            return (
                                <ResponsiveNavLink
                                    key={route.route}
                                    href={`/products/${route.route}`}
                                    aria-current={
                                        url == `/products/${route.route}`
                                            ? "page"
                                            : undefined
                                    }
                                >
                                    {route.route}
                                </ResponsiveNavLink>
                            );
                        })}

                        <ResponsiveNavLink href={"/cart"}>
                            Cart
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={"/contact"}>
                            Contact
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        {user ? (
                            <>
                                <div className="px-4">
                                    <div className="font-medium text-base text-gray-800 dark:text-white">
                                        {user.name}{" "}
                                        {user.is_admin == 1 && (
                                            <span>(admin)</span>
                                        )}
                                    </div>
                                    <div className="font-medium text-sm text-gray-400">
                                        {user.email}
                                    </div>
                                </div>
                                <div className="mt-3 space-y-1">
                                    {user && (
                                        <>
                                            {user.is_admin == 1 && (
                                                <ResponsiveNavLink
                                                    className="text-violet-500"
                                                    href={"/admin"}
                                                >
                                                    Admin dashboard
                                                </ResponsiveNavLink>
                                            )}
                                            <ResponsiveNavLink
                                                href={"my-orders"}
                                            >
                                                My Orders
                                            </ResponsiveNavLink>
                                        </>
                                    )}

                                    <ResponsiveNavLink
                                        href={route("profile.edit")}
                                    >
                                        Profile
                                    </ResponsiveNavLink>
                                    <ResponsiveNavLink
                                        method="post"
                                        href={route("logout")}
                                        as="button"
                                    >
                                        Log Out
                                    </ResponsiveNavLink>
                                </div>
                            </>
                        ) : (
                            <>
                                {" "}
                                <div className="mt-3 space-y-1">
                                    <ResponsiveNavLink
                                        method="get"
                                        href={route("login")}
                                        as="button"
                                    >
                                        Log In
                                    </ResponsiveNavLink>
                                    <ResponsiveNavLink
                                        method="get"
                                        href={"/register"}
                                        as="button"
                                    >
                                        Register
                                    </ResponsiveNavLink>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </nav>

            {header && (
                <header role="banner" className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </motion.nav>
    );
}
