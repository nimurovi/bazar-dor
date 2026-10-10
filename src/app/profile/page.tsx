
"use client";

import { FaArrowRightFromBracket, FaUser } from "react-icons/fa6";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

export default function Profile() {

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const handleSignOut = async () => {
        await authClient.signOut();
        toast.success("Signed out successfully!");
        redirect("/");
    };
    if (isPending) {
        return (
            <div className="min-h-screen bg-[#f0f6f1] flex items-center justify-center">
                <p className="text-sm text-gray-500">
                    Loading profile...
                </p>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen bg-[#f0f6f1] flex items-center justify-center px-4">
                <p className="text-center text-gray-500">
                    Please sign in to view your profile.
                </p>
            </div>
        );
    }
    const handleUpdateProfile = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const updatedUser = Object.fromEntries(formData.entries()) as {
            name: string;
        };
        await authClient.updateUser({
            ...updatedUser,
        });
        toast.success("Profile updated successfully!");
    }

    return (
        <div className="  min-h-screen bg-[#f0f6f1] px-4 py-12">
            <div className="max-w-[570px] mx-auto">

                {/* Page Heading */}
                <div className="mb-5">
                    <h1 className="text-xl font-bold text-[#26332a]">
                        My Profile
                    </h1>

                    <p className="text-xs text-gray-500 mt-1">
                        View and manage your account information.
                    </p>
                </div>

                {/* Profile Summary */}
                <div className="bg-[#fbfdfb] border border-[#dfe8e0] rounded-xl p-4 mb-[18px]">
                    <div className="flex items-center gap-3">

                        {/* Profile Image */}
                        {user.image ? (
                            <img
                                src={user.image}
                                alt={user.name || "Profile"}
                                className="w-[62px] h-[62px] rounded-xl object-cover shrink-0"
                            />
                        ) : (
                            <div className="w-[62px] h-[62px] rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                                <FaUser className="text-2xl text-green-700" />
                            </div>
                        )}

                        {/* User Details */}
                        <div className="flex-1 min-w-0">
                            <h2 className="text-base font-semibold text-[#26332a] truncate">
                                {user.name || "User"}
                            </h2>

                            <p className="text-xs sm:text-sm text-gray-500 truncate">
                                {user.email}
                            </p>
                        </div>

                        {/* Sign Out */}
                        <button
                            type="button"
                            onClick={handleSignOut}
                            className="shrink-0 flex items-center gap-2 border border-red-300
              text-red-500 hover:bg-red-50 rounded-lg px-3 py-2
              text-xs font-medium transition-colors"
                        >
                            <FaArrowRightFromBracket />
                            <span>Sign Out</span>
                        </button>
                    </div>
                </div>

                {/* Profile Update Form */}
                <div className="bg-[#fbfdfb] border border-[#dfe8e0] rounded-xl p-4 sm:p-5">
                    <h2 className="text-sm font-semibold text-[#26332a] mb-7">
                        Profile Information
                    </h2>

                    <form onSubmit={handleUpdateProfile} className="space-y-4">
                        <div className="mb-3">
                            <label
                                htmlFor="name"
                                className="block text-sm text-gray-700 mb-1.5"
                            >
                                Name
                            </label>

                            <input
                                name="name"
                                id="name"
                                type="text"


                                placeholder="Enter your name"
                                required
                                className="w-full h-9 px-3 text-sm text-gray-800
                bg-transparent border border-[#dfe8e0] rounded-lg
                outline-none focus:border-green-600 focus:ring-1
                focus:ring-green-600"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full h-9 bg-[#078b43] hover:bg-[#067737]
              text-white text-sm font-semibold rounded-lg
              shadow-[0_3px_3px_rgba(0,0,0,0.2)]
              transition-colors duration-200"
                        >
                            Update Profile
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}
