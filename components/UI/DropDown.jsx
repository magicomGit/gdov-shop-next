/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'



export default function DropDown() {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md   px-4 py-2  text-sm font-medium
                   focus:outline-none  ">
                    Услуги и сервис
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <div className="z-10 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1 ">
                        <Link className='text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100' href="/repair" >                            
                                Ремонт комьютеров                           
                        </Link>
                        <Link className='text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100' href="/foto" >                           
                                Печать фотографий                           
                        </Link>
                        <Link className='text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100' href="/insure" >                           
                                Страхование                            
                        </Link>

                    </div>
                </div>
            </Transition>
        </Menu>
    )
}
