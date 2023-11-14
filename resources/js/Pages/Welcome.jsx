import PrimaryButton from "@/Components/PrimaryButton";
import { Link, Head } from "@inertiajs/react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useState } from "react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const routes = [
        { route: "Jerseys", image: "kobe-jersey.jpg" },
        { route: "Basketballs", image: "basketballs.jpg" },
        { route: "Clothing", image: "apparel.jpg" },
        { route: "Goodies", image: "goodies.jpg" },
        { route: "Other", image: "badges.jpg" },
    ];
    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-white dark:bg-dots-lighter  selection:bg-red-500 selection:text-white flex flex-col box-border">
                <div className="bg-white w-full sm:sticky sm:top-0 sm:right-0 p-6 text-end">
                    {auth.user ? (
                        <div className="flex justify-around gap-4">
                            <div className="flex justify-center gap-4">
                                {routes.map((route) => {
                                    return (
                                        <Link
                                            key={route.route}
                                            className="font-semibold text-gray-600 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                            href={`/products/${route.route}`}
                                        >
                                            {route.route}
                                        </Link>
                                    );
                                })}
                            </div>
                            <div className="flex gap-6">
                                <Link
                                    href={route("dashboard")}
                                    className="font-semibold text-gray-600 hover:text-gray-900  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Dashboard
                                </Link>
                                <Link
                                    href={route("profile.edit")}
                                    className="font-semibold text-gray-600 hover:text-gray-900  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Profile
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="font-semibold text-gray-600 hover:text-gray-900  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
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
                        </p>
                        <div className="my-16 w-full flex  gap-6 items-center flex-wrap justify-evenly text-lg md:text-xl font-semibold">
                            {routes.map((route) => {
                                return (
                                    <Link
                                        key={route.route}
                                        href={`/products/${route.route}`}
                                        className="lg:w-[20%] duration-200 text-gray-400 hover:text-gray-900 "
                                    >
                                        <div className="flex flex-col items-center">
                                            <p className="text-lg md:text-2xl mb-6">
                                                {route.route}
                                            </p>
                                            <img
                                                className="w-[100px] h-[100px] lg:w-[340px] lg:h-[360px] object-cover"
                                                src={`/welcome/${route.image}`}
                                                alt=""
                                            />
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export function SearchBar() {
    const [category, setCategory] = useState("jerseys");
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission, e.g., make an API request or update the state
        console.log("Category:", category);
        console.log("Query:", query);
    };

    return (
        <div className="w-full flex justify-center my-6">
            {/* <div className="flex justify-center  gap-4">
                <p>caté:{category}</p>
                <p>query:{query}</p>
            </div> */}
            <form className="flex items-center gap-4" onSubmit={handleSubmit}>
                <select
                    className="rounded-md text-sm p-2"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    name="category"
                    id="category"
                >
                    <option value="Jerseys">Jerseys</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Basketballs">Basketballs</option>
                    <option value="Goodies">Goodies</option>
                    <option value="Other">Other</option>
                </select>
                <input
                    className="w-[125px] text-sm md:text-md rounded-md border p-2"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Link href={`/search?query=${query}&category=${category}`}>
                    <button
                        className="bg-gray-200 px-4 py-2 rounded-md disabled:bg-gray-50 disabled:text-gray-300 duration-200"
                        disabled={query === "" ? true : false}
                        type="submit"
                    >
                        Search
                    </button>
                </Link>
            </form>
        </div>
    );
}
