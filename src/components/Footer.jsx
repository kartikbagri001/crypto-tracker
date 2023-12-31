import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
function Footer() {
    const [activeRoute, setactiveRoute] = useState(null)
    const { pathname } = useRouter();
    useEffect(() => {
        setactiveRoute(pathname)
    }, [pathname])
    return (
        <footer className="px-3 py-4 bg-slate-800    text-2 text-white  transition-colors duration-200">
            <div className="flex flex-col">
                <div className="md:hidden mt-7 mx-auto w-11 h-px rounded-full">
                </div>
                <div className="mt-4 md:mt-0 flex flex-col md:flex-row">
                    <nav className="flex-1 flex flex-col items-center justify-center md:items-end md:border-r border-gray-100 md:pr-5">
                        <Link href='/'><a className={activeRoute === "/" ? "text-gray-300" : "" + " hover:text-gray-300"}>
                            Home
                        </a></Link>
                        <Link href='/cryptocurrencies'><a className={activeRoute === "/cryptocurrencies" ? "text-gray-300" : "" + " hover:text-gray-300"}>
                            Cryptocurrencies
                        </a></Link>
                        <Link href='/exchanges'><a className={activeRoute === "/exchanges" ? "text-gray-300" : "" + " hover:text-gray-300"}>
                            Exchanges
                        </a></Link>
                        <Link href='/watchlist'><a className={activeRoute === "/watchlist" ? "text-gray-300" : "" + " hover:text-gray-300"}>
                            WatchList
                        </a></Link>
                    </nav>
                    <div className="md:hidden mt-4 mx-auto w-11 h-px rounded-full ">
                    </div>
                    <div className="mt-7 md:mt-0 flex-1 flex flex-col items-center justify-center md:items-start md:pl-5">
                        <span className="">
                            © 2023
                        </span>
                        <span className="mt-7 md:mt-1">
                            Created by
                            <a className="underline hover:text-primary-gray-20 pl-1" >
                                Nitesh Bagri
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
