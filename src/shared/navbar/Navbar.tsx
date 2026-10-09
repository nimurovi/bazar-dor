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
        <div className="container mx-auto flex justify-between items-center p-4 bg-white shadow-md">
            <Link href="/">
                <div className="flex items-center gap-3">
                    <Image src="/logo-icon.png" className='border rounded p-3 bg-green-500' alt="Logo" height={50} width={50} />
                    <div>
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