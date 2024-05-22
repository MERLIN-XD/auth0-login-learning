'use client';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function ProfileClient() {
    const { user, error, isLoading }: any = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    return (
        user && (
            <>
                <div className="flex h-screen">
                    <div className="m-auto">
                        <div className="p-5 bg-[#0e0e0eb5] rounded-lg text-white">
                            <center><h3>Auth0 - Learning</h3>
                                <p>ระบบสมาชิกโดย Auth0</p>
                                <hr />
                                <Image width={94} className='rounded-full mb-5 mt-5' height={94} src={user.picture} alt={user.name} />
                                <h2>{user.name}</h2>
                                <p>{user.email}</p>
                                <br />
                                <a href="/api/auth/logout" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 p-[10px] px-[152px] hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg transition duration-700 text-lg">logout</a>
                                <hr className='mt-[15px]' />
                                implement by : Keattipoom Chaesomchat
                            </center>
                        </div>
                    </div>
                </div>
            </>
        )
    );
}