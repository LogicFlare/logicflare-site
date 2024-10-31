import { FlareLogo } from "../logo";

export function MyFooter() {
    return (
        <footer className="bg-main-dark font-montserrat py-[72px] px-[32px] lg:px-[120px]">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <FlareLogo />
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-main-dark uppercase dark:text-white">Siga-nos</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline ">LinkedIn</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Instagram</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-main-dark uppercase dark:text-white">Contato</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="break-all sm:break-normal hover:underline text-sm sm:text-base">
                                        logicflare3@gmail.com</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Assis/SP
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy; 2023 <a href="#" className="hover:underline text-white">Logic<span className='text-main-color '>Flare</span>™</a>. Todos direitos reservados.
                    </span>
                </div>
            </div>
        </footer>
    );
}