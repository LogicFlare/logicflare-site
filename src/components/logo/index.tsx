export function FlareLogo() {
    return (
        <div
            className='flex flex-col items-start text-main-white select-none cursor-pointer'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            <h1 className='text-[36px] sm:leading-[36px] font-bold font-spartan'>
                <span className='-tracking-[4.5px]'>Lo</span>
                <span className='-tracking-[3.4px]'>gic</span>
                <span className='-tracking-[3.7px] text-main-color'>
                    Fl
                </span>
                <span className='-tracking-[2.5px] text-main-color'>
                    ar
                </span>
                <span className='text-main-color'>e</span>
            </h1>
            <p className='hidden text-main-white sm:flex text-[8px] font-medium tracking-[3px] indent-[50.5px] font-montserrat -mt-[10px]'>
                TECHNOLOGY
            </p>
        </div>
    );
}