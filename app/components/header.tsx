"use client";
import Image from 'next/image'
import React from 'react'
import logoimage from '../../public/logoorange.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const Header = () => {
    const currentRoute = usePathname();

    return (
        <header className=''>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between'>
                    <div className='logo-container'>
                        <Link href={'/'}>
                            <Image src={logoimage} width={180} height={150} alt='logoimage' />
                        </Link>
                    </div>
                    <div>
                        <nav>
                            <ul className='flex gap-10'>
                                <li className={`px-4 py-2 rounded-xl ${currentRoute === "/" ? "bg-orange-600" : ""}`}>
                                    <Link href={'/'}>Home</Link>
                                </li>
                                <li className={`px-4 py-2 rounded-xl ${currentRoute === "/blogs" ? "bg-orange-600" : ""}`}>
                                    <Link href={'/blogs'}>Blogs</Link>
                                </li>
                                <li className={`px-4 py-2 rounded-xl ${currentRoute === "/products" ? "bg-orange-600" : ""}`}>
                                    <Link href={'/products'}>Products</Link>
                                </li>
                                <li className={`px-4 py-2 rounded-xl ${currentRoute === "/contact" ? "bg-orange-600" : ""}`}>
                                    <Link href={'/contact'}>Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
