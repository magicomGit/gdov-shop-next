/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Transition } from '@headlessui/react'
import { MenuIcon, XIcon, } from '@heroicons/react/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import DropDown from '../UI/DropDown'

const burgerMenu = [
    { name: 'Компьютеры', href: '/', },
    { name: 'Телефоны', href: '/phones', },
    { name: 'Спутниковое ТВ', href: '/sputnik', },
    { name: 'Электронные испарители', href: '/smoke', },
    { name: 'Ремонт компьютеров', href: '/repair', },
    { name: 'Печать фотографий', href: '/foto', },
    { name: 'Страхование', href: '/insure', },
    { name: 'Контакты', href: '/contacts', },


]






const NavBar3 = () => {
    const { pathname } = useRouter()

    const navigation = [
        { name: 'Компьютеры', href: '/', current: pathname === '/' ? true : false },
        { name: 'Телефоны', href: '/phones', current: pathname === '/phones' ? true : false },
        { name: 'Спутниковое ТВ', href: '/sputnik', current: pathname === '/sputnik' ? true : false },
        { name: 'Электронные испарители', href: '/smoke', current: pathname === '/smoke' ? true : false },
        { name: 'Контакты', href: '/contacts', current: pathname === '/contacts' ? true : false },
    ]

    const ddClass = pathname === '/repair' || pathname === '/foto' || pathname === '/insure'
        ? 'text-white bg-[#2bace4] border border-slate-300 rounded-md '
        : 'text-gray-200  hover:text-white  rounded-md '

    return (
        <Disclosure as="nav" className="bg-[#31b9f3] ">
            {({ open }) => (
                <>
                    <div className="max-w-[1300px] mx-auto px-2  ">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-[#2bace4] focus:outline-none ">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className=" flex items-center justify-center  lg:justify-start">
                                <div className="flex items-start">
                                    <Link href='/'>
                                        <img
                                            className="block  h-8 w-auto ml-2 cursor-pointer"
                                            src="/img/logowhite.webp"
                                            alt="Компьютерный мир"
                                        />
                                    </Link>

                                </div>
                                <div className="hidden lg:block lg:ml-6">
                                    <div className="flex ">
                                        {navigation.map((item) => (
                                            <Link className={`${item.current ? 'text-white bg-[#2bace4]' : 'text-gray-200  hover:text-white'}  
                                                px-2 py-2 rounded-md text-sm font-medium`} key={item.name} href={item.href}>
                                               
                                                    {item.name}
                                               </Link>
                                        ))}
                                        <div className={ddClass}>
                                            <DropDown />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Disclosure.Panel className="lg:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {burgerMenu.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className='text-gray-200 hover:bg-[#2bace4] hover:text-white block px-3 py-2 rounded-md text-base font-medium'


                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </Transition>
                </>
            )}
        </Disclosure>
    )
}
export default NavBar3
