'use client';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export default function SignIn() {
    const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const user = Object.fromEntries(formData.entries()) as {
            email: string;
            password: string;
        };

        const { data, error } = await authClient.signIn.email({
            ...user,
        });
        if (data) {
            toast.success("User signed in successfully ");
            redirect("/");
        }
        if (error) {
            toast.error(error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
            
        });
        
    }
    const handleGithubSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
        });
         
    }

    return (
        <div className="min-h-screen bg-[#f0f6f1] flex flex-col items-center justify-center px-4">

            {/* Header */}
            <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-[#26332a]">
                    Sign In
                </h1>

                <p className="text-sm text-gray-500 mt-2">
                    Sign in to view detailed prices, compare markets, and access your profile.
                </p>
            </div>

            {/* Sign In Card */}
            <div className="w-full max-w-[370px] bg-[#fbfdfb] border border-[#dfe8e0] rounded-2xl p-5 sm:p-[21px]">

                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-800 mb-1.5"
                        >
                            Email
                        </label>

                        <input
                            name="email"
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            autoComplete="email"
                            required
                            className="w-full h-9 px-3 text-sm text-gray-800
              bg-transparent border border-[#dfe8e0] rounded-lg
              outline-none focus:border-green-600 focus:ring-1
              focus:ring-green-600 placeholder:text-gray-400"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-800 mb-1.5"
                        >
                            Password
                        </label>

                        <input
                            name="password"
                            id="password"
                            type="password"
                            placeholder="At least 8 characters"
                            autoComplete="current-password"
                            required
                            className="w-full h-9 px-3 text-sm text-gray-800
              bg-transparent border border-[#dfe8e0] rounded-lg
              outline-none focus:border-green-600 focus:ring-1
              focus:ring-green-600 placeholder:text-gray-400"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full h-9 bg-[#078b43] hover:bg-[#067737]
            text-white text-sm font-semibold rounded-lg
            shadow-[0_3px_3px_rgba(0,0,0,0.2)]
            transition-colors duration-200"
                    >
                        Sign In
                    </button>

                </form>

                {/* Divider */}
                <div className="flex items-center gap-3 my-5">
                    <div className="flex-1 h-px bg-[#dfe5df]" />

                    <span className="text-xs text-gray-600">
                        OR
                    </span>

                    <div className="flex-1 h-px bg-[#dfe5df]" />
                </div>

                {/* Social Sign In */}
                <div className="grid grid-cols-2 gap-2">

                    <button
                    onClick={handleGoogleSignIn}
                        type="button"
                        className="h-9 px-2 border border-[#dfe8e0]
            rounded-lg flex items-center justify-center gap-1.5
            text-xs sm:text-sm font-medium text-gray-800
            hover:bg-gray-100 transition-colors"
                    >
                        <FcGoogle className="text-base shrink-0" />
                        <span>Google</span>
                    </button>

                    <button
                    onClick={handleGithubSignIn}
                        type="button"
                        className="h-9 px-2 border border-[#dfe8e0]
            rounded-lg flex items-center justify-center gap-1.5
            text-xs sm:text-sm font-medium text-gray-800
            hover:bg-gray-100 transition-colors"
                    >
                        <FaGithub className="text-base shrink-0" />
                        <span>GitHub</span>
                    </button>

                </div>

                {/* Sign Up Link */}
                <p className="text-center text-xs text-gray-600 mt-4">
                    Do not have an account?{" "}
                    <Link
                        href="/signup"
                        className="text-[#078b43] font-medium hover:underline"
                    >
                        Sign up
                    </Link>
                </p>

            </div>

            {/* Back to Home */}
            <Link
                href="/"
                className="mt-5 text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
                ← Back to home
            </Link>

        </div>
    );
}
