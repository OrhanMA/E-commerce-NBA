import PrimaryButton from "@/Components/PrimaryButton";
import { Link, Head } from "@inertiajs/react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-white dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white flex flex-col">
                <div className="bg-white w-full sm:sticky sm:top-0 sm:right-0 p-6 text-end">
                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
                <div className="flex flex-col items-center">
                    <SearchBar />
                    <img
                        src="/welcome/hero_city_jerseys.avif"
                        alt="City jerseys campagne"
                    />
                    <div className="w-full px-12 flex flex-col items-center">
                        <h1 className="text-2xl md:text-4xl text-blue-700 font-bold mt-16">
                            Jersey Shop
                        </h1>
                        <p className="md:text-xl text-center mt-6">
                            Show your love for the game with your favorite NBA
                            products
                        </p>
                        <div className="mt-16 w-full flex flex-col gap-2 items-start text-lg md:text-xl font-semibold">
                            <p className="hover:text-red-500 duration-200">
                                Jerseys
                            </p>
                            <p className="hover:text-red-500 duration-200">
                                Clothing
                            </p>
                            <p className="hover:text-red-500 duration-200">
                                Basketballs
                            </p>
                            <p className="hover:text-red-500 duration-200">
                                Goodies
                            </p>
                            <p className="hover:text-red-500 duration-200">
                                Other
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function SearchBar() {
    return (
        <div className="my-2">
            <form className="flex items-center gap-4" action="">
                <select defaultValue={"jerseys"} name="category" id="category">
                    <option value="jerseys">Jerseys</option>
                    <option value="clothing">Clothing</option>
                    <option value="basketballs">Basketballs</option>
                    <option value="goodies">Goodies</option>
                    <option value="other">Other</option>
                </select>
                <input
                    className="border-2 border-black rounded-md"
                    type="text"
                ></input>
                <PrimaryButton type="submit">Search</PrimaryButton>
            </form>
        </div>
    );
}
