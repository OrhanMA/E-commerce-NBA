import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import Header from "@/Layouts/Header";
import { Head } from "@inertiajs/react";
import Footer from "@/Components/Footer";
export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <div className="min-h-screen dark:bg-zinc-900">
            <Header auth={auth} />
            <Head title="Profile" />

            <div className="p-6 mb-[250px] sm:mb-0 dark:bg-zinc-900 h-full">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-6 sm:p-8 mx-4 bg-white  dark:bg-zinc-700 sm:rounded-lg shadow-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-6 sm:p-8 mx-4 bg-white  dark:bg-zinc-700 sm:rounded-lg shadow-lg">
                        <UpdatePasswordForm className="max-w-xl " />
                    </div>

                    <div className="p-6 sm:p-8 mx-4 bg-white  dark:bg-zinc-700 sm:rounded-lg shadow-lg">
                        <DeleteUserForm className="max-w-xl " />
                    </div>
                </div>
            </div>
            <Footer auth={auth} />
        </div>
    );
}
