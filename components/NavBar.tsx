'use client'

import Link from "next/link"
import Image from "next/image"
import { CustomButton } from "."

const NavBar = () => {
    return (
        <header className="w-full absolute z-10">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center
            sm:px-16 px-6 py-4">
                <Link href='/' className="flex justify-centeri items-center">
                    <Image src='/logo.svg'
                        alt="Car Hub Logo"
                        width={118}
                        height={18}
                        className="object-contain"
                    />
                </Link>

                <CustomButton
                    title="Logar"
                    type="button"
                    containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
                    handleClick={() => { }}
                />

            </nav>
        </header>
    )
}

export default NavBar