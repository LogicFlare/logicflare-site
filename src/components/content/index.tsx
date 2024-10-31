import background from '../../assets/templates/macbook_iphone.jpg';
import { Flame } from 'lucide-react';
import { About } from './about';
import { Contact } from './contact';
import { Services } from './services';
import { MutableRefObject } from 'react';

interface IContentProps {
    aboutRef: MutableRefObject<null> | any;
    serviceRef: MutableRefObject<null> | any;
    contactRef: MutableRefObject<null> | any;
}

export function Content(props: IContentProps) {
    const { aboutRef, serviceRef, contactRef } = props;

    return (
        <div className='flex flex-col w-full bg-gray-900'>
            <div
                className='relative flex items-center bg-cover bg-center w-full h-[400px] sm:h-[550px] shadow-gray-900'
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className='flex  justify-center w-full max-w-screen-xl text-main-white capitalize text-wrap'>
                    <div className='sm:absolute m-auto left-0 top-36 right-0 flex flex-col justify-center items-start gap-2 max-w-[555px] bg-main-black/65 sm:bg-main-black/80 sm:border-2 sm:border-main-black shadow-md shadow-main-dark mx-3 mt-4 sm:m-auto px-3 sm:px-6 py-4 sm:py-6 sm:rounded-lg'>
                        <h1 className='text-2xl normal-case font-medium border-b-2 self-center sm:self-start'>
                            Bem-vindo à Logic<span className='text-main-color'>Flare</span>!
                        </h1>
                        <p className='font-light normal-case text-lg text-center sm:text-justify text-main-white'>
                            Transformamos processos, criamos possibilidades, e impulsionamos seu negócio através da tecnologia.
                            Se deseja sonhar alto, impulsionar sua empresa ou agilizar processos, você encontrou o lugar certo!
                        </p>
                        <span className='flex flex-col sm:flex-row items-center justify-center gap-1 text-center sm:text-start text-[15px] leading-[20px] font-light normal-case text-main-color'>
                            Onde inovação não é apenas o que fazemos, é o que vivemos.
                            <Flame className='stroke-[1.5px]' color='#f59e0b' width={16} height={16} />
                        </span>
                    </div>
                </div>
            </div>
            <section className='flex flex-col bg-main-white xl:px-0'>
                <Services serviceRef={serviceRef} />

                <About aboutRef={aboutRef} />

                <Contact contactRef={contactRef} />
            </section>
        </div>
    );
}