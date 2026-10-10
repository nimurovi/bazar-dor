'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import UserInfo from '@/components/UserInfo';
const NavbarPage = () => {

    const [date, setDate] = useState<string | null>(null);

    useEffect(() => {
        setDate(new Date().toLocaleDateString("en-US", {
            dateStyle: "full",
        }));
    }, []);
    return (
        <div className="container mx-auto flex flex-col gap-4 bg-white p-4 shadow-md sm:flex-row sm:items-center sm:justify-between">            <Link href="/">
            <div className="flex items-center gap-2 sm:gap-3">
                <Image src="/logo-icon.png" className="h-10 w-10 rounded border bg-green-500 p-2 sm:h-[50px] sm:w-[50px] sm:p-3" alt="Logo" height={50} width={50} />                <div>
                    <h1 className='text-2xl font-bold'>Bazar Dor</h1>
                    <p>{date}</p>
                </div>
            </div>
        </Link>
            <UserInfo />
        </div>
    );
};

export default NavbarPage;