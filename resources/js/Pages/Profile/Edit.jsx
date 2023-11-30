import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import Header from "@/Layouts/Header";
import { Head } from "@inertiajs/react";
export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <>
            <Header auth={auth} />
            <Head title="Profile" />

            <div className="p-6 mb-[250px]">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-6 sm:p-8 mx-4 bg-gray-200 shadow sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-6 sm:p-8 mx-4 bg-gray-200 shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-6 sm:p-8 mx-4 bg-gray-200 shadow sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </>
    );
}
