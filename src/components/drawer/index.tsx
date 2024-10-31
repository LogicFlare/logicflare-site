import { useState } from 'react';
import { IMyNavbarProps } from '../navbar/index';
import { ArrowUpRightFromSquare } from 'lucide-react';

interface IDrawerProps extends IMyNavbarProps {
    onClick: (ref: any) => void;
}

export function MyDrawer(props: IDrawerProps) {
    const { aboutRef, serviceRef, contactRef, onClick } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button
                onClick={toggleDrawer}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 duration-100"
                data-drawer-target="drawer-right-example"
                data-drawer-show="drawer-right-example"
                data-drawer-placement="right"
                aria-controls="drawer-right-example"
            >
                <span className="sr-only">Open main menu</span>
                <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1h15M1 7h15M1 13h15"
                    />
                </svg>
            </button>
            <div
                id="drawer-right-example"
                className={`md:hidden fixed top-0 right-0 z-50 h-screen p-4 overflow-y-auto transition-transform bg-main-dark text-main-white w-80 border-l-2 border-main-color dark:bg-gray-900 ${isOpen ? '' : 'translate-x-full'}`}
                aria-labelledby="drawer-right-label"
                onClick={toggleDrawer}
            >
                {/* <h5
                    id="drawer-right-label"
                    className="inline-flex items-center mb-4 text-3xl capitalize text-main-color"
                >
                    Menu
                </h5> */}
                <button
                    type="button"
                    data-drawer-hide="drawer-right-example"
                    aria-controls="drawer-right-example"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white duration-100"
                >
                    <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                    </svg>
                    <span className="sr-only">Fechar menu</span>
                </button>
                <div className="w-full text-center md:w-auto mt-6" id="navbar-default">
                    <ul
                        className="font-medium flex flex-col gap-6 p-4 text-xl border-gray-100 text-main-white rounded-lg"
                        data-drawer-hide="drawer-right-example"
                        aria-controls="drawer-right-example"
                    >
                        <li>
                            <p
                                className="cursor-pointer duration-150 block bg-white/5 py-2 px-3 text-main-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                                onClick={() => onClick(serviceRef)}
                            >
                                Serviços
                            </p>
                        </li>
                        <li>
                            <p
                                className="cursor-pointer duration-150 block bg-white/5 py-2 px-3 text-main-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                                onClick={() => onClick(aboutRef)}
                            >
                                Sobre
                            </p>
                        </li>
                        <li>
                            <p
                                className="cursor-pointer duration-150 block bg-white/5 py-2 px-3 text-main-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                                onClick={() => onClick(contactRef)}
                            >
                                Contato
                            </p>
                        </li>
                        <li>
                            <p
                                className="flex items-center justify-center gap-2 cursor-pointer duration-150 bg-white/5 py-2 px-3 text-main-white rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                Plataforma
                                <ArrowUpRightFromSquare className='size-5'/>
                            </p>
                        </li>
                    </ul>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="flex items-center justify-center text-main-white uppercase font-spartan font-semibold opacity-80">
                    <p>LOGIC<span className='text-main-color'>FLARE</span>{' '}TECHNOLOGY</p>
                </div>
            </div>
        </>
    );
}
