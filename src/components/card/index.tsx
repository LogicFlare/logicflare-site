import type { LucideIcon } from 'lucide-react';

interface ICardProps {
    title: string;
    description: string;
    icon: LucideIcon;
}

export function Card({ title, description, icon: Icon }: ICardProps) {
    return (
        <div className="flex flex-col items-center justify-between gap-2 w-full max-w-sm h-[350px] bg-white border py-2 border-gray-200 rounded-lg shadow shadow-main-black/25 hover:shadow-md dark:bg-gray-900 dark:border-gray-700 cursor-default hover:scale-95 duration-300">
            <Icon className='text-main-white size-32 h-[128px] px-4 bg-gray-700 rounded-lg' />
            <div className="flex flex-col items-start justify-between px-5 pb-5 max-h-full">
                <span className="text-xl font-semibold tracking-tight text-gray-900 dark:text-main-white">
                    {description}
                </span>

                <p className="text-3xl font-bold text-gray-900 dark:text-amber-500 select-none">
                    {title}
                </p>
            </div>
        </div>
    );
}
