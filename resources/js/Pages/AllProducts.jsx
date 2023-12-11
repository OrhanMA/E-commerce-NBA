import SearchBar from "@/Components/SearchBar";
import { ProductCard } from "@/Components/ProductCard";
import { Head } from "@inertiajs/react";
import Header from "@/Layouts/Header";
import Footer from "@/Components/Footer";
import SortFilter from "@/Components/SortFilter";
const AllProducts = ({ auth, products }) => {
    return (
        <div className="dark:bg-zinc-900">
            <Header auth={auth} />
            <Head>
                <title>Search results page</title>
                <meta
                    name={`All products page`}
                    content={`Check here all items you might be looking for in the website!`}
                />
            </Head>
            <SearchBar />
            <div>
                {products.links.map((link) => {
                    <div key={link}>
                        <p>{link.url}</p>
                    </div>;
                })}
            </div>
            {products.data.length <= 0 ? (
                <>
                    <p>
                        No product found. Please make a new search or select a
                        new product category.
                    </p>
                </>
            ) : (
                <>
                    {/* <div className="flex flex-wrap justify-center w-full m-2 p-2 gap-6">
                        {products.data.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div> */}
                    <div className="pb-[250px] sm:mb-0 justify-between flex flex-col flex-nowrap">
                        <h1 className="text-center sm:text-left text-xl m-6 dark:text-gray-200">
                            All products
                        </h1>
                        <div className="flex items-center sm:flex-row flex-wrap justify-center w-full m-2 p-2">
                            {products.data.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                    </div>
                </>
            )}
            <Footer auth={auth} />
        </div>
    );
};

export default AllProducts;
