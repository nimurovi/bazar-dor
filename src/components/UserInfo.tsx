'use client';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';

const UserInfo = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    // const handleSignOut = async () => {
    //     await authClient.signOut();
        
    // }
    return (

        <div>
            {user ? (
                <div className="flex flex-col items-center gap-2">

                    <div className="avatar w-24 rounded">
                        <img alt={user.name} src={user?.image} />
                    </div>

                    <p>Welcome, {user.name}!</p>

                </div>
            ) : (
                <div className="flex gap-2">
                    <Link href="/signin">
                        <button className='btn btn-active btn-success'>Sign In</button>
                    </Link>
                    <Link href="/signup">
                        <button className='btn btn-active btn-success'>Sign Up</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default UserInfo;