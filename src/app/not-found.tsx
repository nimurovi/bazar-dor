import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center bg-[#f3f8f4] px-4 text-center">
             

            <h1 className="text-6xl font-extrabold text-[#26352c]">
                404
            </h1>

            <h2 className="mt-4 text-2xl font-bold text-[#1d2b23]">
                Product Not Found!
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
                Sorry, the product you are looking for could not be found.
                Please check the URL or return to the homepage.
            </p>

            <Link
                href="/"
                className="mt-7 rounded-lg bg-[#26352c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3b5142]"
            >
                ← Back to Home
            </Link>
        </div>
    );
};

export default NotFound;