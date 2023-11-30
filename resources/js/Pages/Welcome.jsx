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
    return (
        <>
            <Header auth={auth} />
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-white dark:bg-dots-lighter  selection:bg-red-500 selection:text-white flex flex-col box-border">
                <div className="flex flex-col items-center">
                    <SearchBar />
                    <img
                        src="/welcome/hero_city_jerseys.avif"
                        alt="City jerseys campagne"
                    />
                    <div className="w-full px-12 flex flex-col items-center">
                        <h1 className="text-2xl md:text-4xl lg:text-6xl lg:mb-6 font-bold mt-16">
                            Jersey Shop
                        </h1>
                        <h2 className="md:text-xl lg:text-2xl text-center mt-6">
                            Show your love for the game with your favorite NBA
                            team jersey.
                        </h2>
                        <div className="my-16 w-full flex  gap-6 items-center flex-wrap justify-evenly text-lg md:text-xl font-semibold">
                            {routes.map((route) => {
                                return (
                                    <Link
                                        key={route.route}
                                        href={`/products/${route.route}`}
                                        className="lg:w-[20%] duration-200 hover:scale-105 text-gray-400 hover:text-gray-900 "
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
