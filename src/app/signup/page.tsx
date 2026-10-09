'use client';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
export default function SignUp() {
    const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const user = Object.fromEntries(formData.entries()) as {
            name: string;
            email: string;
            password: string;
            image: string;
            confirmPassword: string;
        };

        const { data, error } = await authClient.signUp.email({
            ...user,
        })
        if (data) {
            toast.success("User signed up successfully:");
            redirect("/");
        }
        if (error) {
            toast.error(error.message);
        }

    }
const handleGoogleSignUp = async () => {
         await authClient.signIn.social({
            provider: "google",
        });
    }

    const handleGithubSignUp = async () => {
              await authClient.signIn.social({
                provider: "github",
            });
        }

    return (
        <div className="min-h-screen bg-[#f3f8f4] flex flex-col items-center justify-center px-4">

            {/* Header */}
            <div className="text-center mb-5">
                <h1 className="text-2xl font-bold text-gray-800">
                    Create an Account
                </h1>

                <p className="text-sm text-gray-500 mt-1">
                    Sign up to get started and enjoy our services
                </p>
            </div>

            {/* Form Card */}
            <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">

                <form className="space-y-4" onSubmit={handleSubmit}>

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                        </label>

                        <input
                            name="name"
                            type="text"
                            placeholder="Example: John Doe"
                            className="w-full h-10 px-3 text-sm border border-gray-200 rounded-md 
              outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 
              placeholder:text-gray-400"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>

                        <input
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            className="w-full h-10 px-3 text-sm border border-gray-200 rounded-md 
              outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 
              placeholder:text-gray-400"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>

                        <input
                            name="password"
                            type="password"
                            placeholder="At least 8 characters"
                            className="w-full h-10 px-3 text-sm border border-gray-200 rounded-md 
              outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 
              placeholder:text-gray-400"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm Password
                        </label>

                        <input
                            name="confirmPassword"
                            type="password"
                            placeholder="Enter your password again"
                            className="w-full h-10 px-3 text-sm border border-gray-200 rounded-md 
              outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 
              placeholder:text-gray-400"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full h-10 bg-green-600 hover:bg-green-700 
            text-white text-sm font-medium rounded-md transition-colors 
            shadow-sm"
                    >
                        Create Account
                    </button>

                </form>

                {/* Divider */}
                <div className="flex items-center gap-3 my-4">
                    <div className="flex-1 h-px bg-gray-200"></div>

                    <span className="text-xs text-gray-500">
                        OR
                    </span>

                    <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                {/* Social Buttons */}
                <div className="grid grid-cols-2 gap-2">

                    <button
                        onClick={handleGoogleSignUp}
                        type="button"
                        className="h-9 border border-gray-200 rounded-md 
            flex items-center justify-center gap-2 text-xs font-medium 
            text-gray-700 hover:bg-gray-50 transition"
                    >
                        <FcGoogle className="text-base" />
                        Sign up with Google
                    </button>

                    <button
                        onClick={handleGithubSignUp}
                        type="button"
                        className="h-9 border border-gray-200 rounded-md 
            flex items-center justify-center gap-2 text-xs font-medium 
            text-gray-700 hover:bg-gray-50 transition"
                    >
                        <FaGithub className="text-base" />
                        Sign up with GitHub
                    </button>

                </div>

                {/* Login */}
                <p className="text-center text-xs text-gray-500 mt-4">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="text-green-600 hover:text-green-700 font-medium"
                    >
                        Sign in
                    </Link>
                </p>

            </div>

            {/* Back */}
            <Link
                href="/"
                className="mt-5 text-xs text-gray-400 hover:text-gray-600"
            >
                ← Back to home
            </Link>

        </div>
    );
}