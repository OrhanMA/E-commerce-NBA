import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-200 ease-in-out focus:outline-none " +
                (active
                    ? "border-black text-black focus:border-black "
                    : "border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-700 focus:text-gray-700 focus:border-gray-300 ") +
                className
            }
        >
            {children}
        </Link>
    );
}
