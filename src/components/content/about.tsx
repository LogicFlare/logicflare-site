import background from '../../assets/logicflare_branco.png';
import { Crown } from "lucide-react";
import { SectionContainer } from "../sectionContainer";
import { MutableRefObject } from "react";

interface IAboutProps {
    aboutRef: MutableRefObject<null> | any;
}

export function About({ aboutRef }: IAboutProps) {
    return (
        <SectionContainer title="SOBRE NÓS" dark>
            <div className='flex flex-col px-4 text-xl' ref={aboutRef}>
                <p className='text-wrap font-light pb-8 text-center sm:text-start'>
                    Na LogicFlare, somos mais do que uma empresa de desenvolvimento de sistemas e sites; somos parceiros dedicados ao sucesso das empresas estabelecidas.
                </p>
                <div className='flex flex-col xl:flex-row items-center xl:items-start gap-10 '>
                    <div className='lg:w-[544px]'>
                        <p className='text-wrap font-light text-center sm:text-start'>
                            Nosso objetivo é nos integrar perfeitamente à sua equipe, personalizando cada projeto  para atender às suas necessidades específicas.
                        </p>
                    </div>
                    <div>
                        <div
                            className='relative z-10 md:flex bg-cover bg-center sm:min-w-[496px] w-[256px] max-w-[216px] min-h-[256px] h-[256px] max-h-[320px] shadow-gray-900 rounded-lg'
                            style={{
                                backgroundImage: `url(${background})`
                            }}
                        />
                        <Crown className='hidden md:block absolute -mt-[360px] ml-[334.5px] rotate-[20deg] stroke-[0.15px] opacity-45 text-main-color' height={250} width={250} />
                    </div>
                    <div className='lg:w-[544px]'>
                        <p className='text-wrap font-light text-center sm:text-start'>
                            Especializados em criar sites e landing page que não só atendem, mas superam as expectativas. Nossa força está na nossa equipe dinâmica e criativa, que se destaca nas tecnologias web.

                        </p>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
}