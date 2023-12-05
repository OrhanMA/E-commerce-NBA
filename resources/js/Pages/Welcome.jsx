import { Link, Head } from "@inertiajs/react";
import SearchBar from "@/Components/SearchBar";
import Header from "@/Layouts/Header";
import Footer from "@/Components/Footer";
export default function Welcome({ auth }) {
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
            <Head>
                <title>Welcome to JerseyShop</title>
                <meta
                    name={`JerseyShop, the best NBA fan E-commerce`}
                    content={`You can fin all the items you might want to buy on JerseyShop!`}
                />
            </Head>
            <div className=" sm:mb-0 relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center dark:bg-zinc-900 dark:text-white bg-white dark:bg-dots-lighter  selection:bg-red-500 selection:text-white flex flex-col box-border">
                <div className="flex flex-col items-center">
                    <SearchBar />
                    <img
                        src="/welcome/hero_city_jerseys.avif"
                        alt="City jerseys campaign - Showcase of NBA city jerseys for the Welcome to JerseyShop"
                    />
                    <main className="w-full px-12 flex flex-col items-center">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl lg:mb-6 font-bold mt-16">
                            Jersey Shop
                        </h1>
                        <h2 className="font-semibold text-lg md:text-xl lg:text-xl xl:text-2xl text-center mt-6">
                            Show your love for the game with your favorite NBA
                            team jersey.
                        </h2>
                        <nav
                            role="navigation"
                            className="my-16 w-full flex  gap-6 items-center flex-wrap justify-evenly text-lg md:text-xl font-semibold"
                        >
                            {routes.map((route) => {
                                return (
                                    <Link
                                        aria-label={`navigate to ${route.route} products`}
                                        key={route.route}
                                        href={`/products/${route.route}`}
                                        className="lg:w-[20%] duration-200 hover:scale-105 text-gray-400 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white "
                                    >
                                        <div className="flex flex-col items-center">
                                            <h4 className="text-lg md:text-2xl mb-6">
                                                {route.route}
                                            </h4>
                                            <img
                                                className="rounded-md w-[125px] h-[125px] lg:w-[275px] lg:h-[360px] object-cover"
                                                src={`/welcome/${route.image}`}
                                                alt=""
                                            />
                                        </div>
                                    </Link>
                                );
                            })}
                        </nav>
                        <article
                            aria-label="Presentation of the Jerseyshop website"
                            className="sm:w-4/5 xl:w-3/5 my-12 flex flex-col gap-6 leading-7 text-justify"
                        >
                            <h3 className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl text-center mb-6">
                                Your Ultimate Destination for NBA Merchandise!
                            </h3>
                            <p className="xl:text-xl md:text-lg ">
                                Welcome to JerseyShop, where passion for
                                basketball meets the highest quality NBA
                                merchandise. As avid fans of the NBA, we
                                understand the thrill and excitement that comes
                                with supporting your favorite teams and players.
                                That's why we've created JerseyShop – your go-to
                                online store for an extensive range of
                                NBA-inspired products.
                            </p>
                            <div className="flex flex-col gap-4 mt-2">
                                <h4 className="text-xl xl:text-2xl font-semibold dark:text-zinc-400">
                                    Jerseys
                                </h4>
                                <p className="xl:text-xl md:text-lg ">
                                    At JerseyShop, we pride ourselves on
                                    offering a diverse selection of authentic
                                    NBA jerseys, each crafted with precision and
                                    attention to detail. Whether you're a
                                    die-hard fan of the Los Angeles Lakers,
                                    Chicago Bulls, or any other NBA team, we
                                    have the perfect jersey to showcase your
                                    team spirit. Our jerseys feature the iconic
                                    designs and colors that represent the rich
                                    history and tradition of the NBA.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 mt-2">
                                <h4 className="text-xl xl:text-2xl font-semibold dark:text-zinc-400">
                                    Apparel and accesories
                                </h4>
                                <p className="xl:text-xl md:text-lg ">
                                    But we're not just about jerseys – we offer
                                    a comprehensive collection of NBA-themed
                                    apparel and accessories to complement your
                                    game-day look. From stylish hoodies and
                                    comfortable T-shirts to trendy hats and
                                    accessories, we've got everything you need
                                    to showcase your love for the NBA in style.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 mt-2">
                                <h4 className="text-xl xl:text-2xl font-semibold dark:text-zinc-400">
                                    Quality and authenticity
                                </h4>
                                <p className="xl:text-xl md:text-lg ">
                                    What sets JerseyShop apart is our commitment
                                    to quality and authenticity. We source our
                                    products from reputable suppliers to ensure
                                    that every item in our store meets the
                                    highest standards. When you shop with us,
                                    you can trust that you're getting genuine
                                    NBA merchandise that reflects the true
                                    essence of the game.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 mt-2">
                                <h4 className="text-xl xl:text-2xl font-semibold dark:text-zinc-400">
                                    Customer-first
                                </h4>
                                <p className="xl:text-xl md:text-lg ">
                                    As a customer-centric company, we prioritize
                                    your shopping experience. Our user-friendly
                                    website makes it easy for you to browse
                                    through our catalog, find your favorite
                                    items, and place your order with confidence.
                                    We also offer fast and reliable shipping to
                                    ensure that your NBA gear arrives promptly,
                                    so you can gear up for the next big game.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 mt-2">
                                <h4 className="text-xl xl:text-2xl font-semibold dark:text-zinc-400">
                                    Check it out!
                                </h4>
                                <p className="xl:text-xl md:text-lg ">
                                    Whether you're looking to update your
                                    wardrobe with the latest NBA fashion or
                                    searching for the perfect gift for a fellow
                                    basketball enthusiast, JerseyShop has you
                                    covered. Join us in celebrating the passion
                                    and excitement of the NBA – shop with
                                    JerseyShop today and elevate your fan
                                    experience to a whole new level!
                                </p>
                            </div>
                        </article>
                    </main>
                </div>
            </div>
            <Footer auth={auth} />
        </>
    );
}
