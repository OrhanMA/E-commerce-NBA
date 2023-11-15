import PrimaryButton from "@/Components/PrimaryButton";
import { Link, Head } from "@inertiajs/react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import SearchBar from "@/Components/SearchBar";
import Guest from "@/Layouts/GuestLayout";
import Header from "@/Layouts/Header";
export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const routes = [
        { route: "Jerseys", image: "kobe-jersey.jpg" },
        { route: "Basketballs", image: "basketballs.jpg" },
        { route: "Clothing", image: "apparel.jpg" },
        { route: "Goodies", image: "goodies.jpg" },
        { route: "Other", image: "badges.jpg" },
    ];
    // console.log(auth);
    return (
        <>
            {/* {auth.user !== null ? (
                <Authenticated user={auth.user}></Authenticated>
            ) : (
                <Guest />
            )} */}
            <Header auth={auth} />
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-white dark:bg-dots-lighter  selection:bg-red-500 selection:text-white flex flex-col box-border">
                {/* <div className="hidden sm:flex bg-white w-full sm:sticky sm:top-0 sm:right-0 p-6 text-end">
                    {auth.user ? (
                        <div className="hidden sm:flex w-full flex-wrap-reverse justify-around gap-4 border-b pb-6">
                            <div className="hidden sm:flex justify-center gap-4">
                                {routes.map((route) => {
                                    return (
                                        <Link
                                            key={route.route}
                                            className="text-sm md:text-lg font-semibold text-gray-600 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                            href={`/products/${route.route}`}
                                        >
                                            {route.route}
                                        </Link>
                                    );
                                })}
                            </div>
                            <div className="flex w-full justify-end mb-2 border-b pb-4 gap-6">
                                <Link
                                    href={route("dashboard")}
                                    className="text-sm md: text-md font-semibold text-gray-600 hover:text-gray-900  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Dashboard
                                </Link>
                                <Link
                                    href={route("profile.edit")}
                                    className="text-sm md: text-md font-semibold text-gray-600 hover:text-gray-900  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Profile
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="text-sm md: text-md font-semibold text-gray-600 hover:text-gray-900  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="text-sm md: text-md ms-4 font-semibold text-gray-600 hover:text-gray-900  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div> */}
                <div className="flex flex-col items-center">
                    <SearchBar />
                    <img
                        src="/welcome/hero_city_jerseys.avif"
                        alt="City jerseys campagne"
                    />
                    <div className="w-full px-12 flex flex-col items-center">
                        <h1 className="text-2xl md:text-4xl lg:text-6xl lg:mb-6 text-blue-700 font-bold mt-16">
                            Jersey Shop
                        </h1>
                        <h2 className="md:text-xl lg:text-2xl text-center mt-6">
                            Show your love for the game with your favorite NBA
                        </h2>
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
