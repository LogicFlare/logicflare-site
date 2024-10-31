import { twMerge } from 'tailwind-merge';

interface ILgButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    className?: string;
}

export function LgButton({ text, className = '', ...props }: ILgButton) {
    return (
        <button
            {...props}
            className={twMerge(
                className,
                'min-w-fit text-center bg-main-color hover:bg-blue-500 px-6 py-2 font-montserrat text-primary-white rounded-md duration-150'
            )}
        >
            {text}
        </button>
    );
}