"use client"
import React, { useState } from 'react'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { NavbarSidebar } from './navbar-sidebar'
import { Item } from '@radix-ui/react-select'
import { MenuIcon } from 'lucide-react'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['700'],
})

interface NavbarItemProps {
    href: string
    children: React.ReactNode
    isActive?: boolean
}

const NavbarItem: React.FC<NavbarItemProps> = ({ href, children, isActive }) => {
    return (
        <Button
            asChild
            variant="navlink"
            className={cn(
                "",
                isActive && "bg-black text-white hover:bg-black hover:text-white"
            )}
        >
            <Link href={href}>
                {children}
            </Link>
        </Button>
    )
}

const NavbarItems = [
    {
        href: '/',
        children: 'Home',
    },
    {
        href: '/about',
        children: 'About',
    },
    {
        href: '/features',
        children: 'Features',
    },
    {
        href: '/pricing',
        children: 'Pricing',
    },
    {
        href: '/contact',
        children: 'Contact',
    },
]

function navbar() {
    const pathname = usePathname()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    return (
        <div className='h-20 flex border-b justify-between font-medium bg-white'>
            <Link href={'/'} className='pl-6 flex items-center'>
                <span className={cn(poppins.className, 'text-3xl text-black')}>
                    <Image src={'/logo.svg'} alt='logo' width={150} height={150}></Image>
                </span>
            </Link>

            <div className='items-center gap-4  hidden lg:flex'>
                {NavbarItems.map((item) => (
                    <NavbarItem key={item.href} {...item} isActive={item.href === pathname} />
                ))}
            </div>

            <div className='hidden lg:flex'>
                <Link href="/sign-in">
                    <Button variant={'secondary'} className='border-l border-t-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg'>
                        Sign in
                    </Button>
                </Link>
                <Link href="/sign-up">
                    <Button variant={'secondary'} className='border-l border-t-0 border-r-0 px-12 h-full rounded-none bg-black hover:text-black text-white hover:bg-pink-400 transition-colors text-lg border-none'>
                        Start Selling
                    </Button>
                </Link>
            </div>
            <div className='flex lg:hidden items-center justify-center'>
                <Button variant={"ghost"} className='size-12 border-trasnparent bg-white' onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <MenuIcon />
                </Button>
            </div>
            <NavbarSidebar open={isSidebarOpen} setOpenChange={setIsSidebarOpen} items={NavbarItems} />
        </div>
    )
}

export default navbar
