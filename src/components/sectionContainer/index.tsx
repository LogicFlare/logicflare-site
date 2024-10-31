import { twMerge } from 'tailwind-merge';

interface ISectionContainerProps {
    title: string;
    leading?: React.ReactNode;
    children: React.ReactNode;
    dark?: boolean;
    className?: string;
}

export function SectionContainer({ title, leading, children, dark = false, className = '' }: ISectionContainerProps) {
    return (
        <section className={twMerge(`${dark && 'text-main-white bg-main-dark'} w-full px-[32px] lg:px-[120px] py-[72px]`, className)}>
            <div className={`flex justify-between w-full border-b mb-4 ${dark ? 'border-b-main-white' : 'border-b-main-dark'}`}>
                <h2 className='self-start uppercase font-light text-[31.5px] sm:text-[40px]'>
                    {title}
                </h2>
                {leading}
            </div>
            {children}
        </section>
    );
}