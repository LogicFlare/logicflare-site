import { MutableRefObject } from "react";
import { ChevronRight } from "lucide-react";
import { SectionContainer } from "../sectionContainer";

interface IServiceProps {
    serviceRef: MutableRefObject<null> | any;
}

export function Services({ serviceRef }: IServiceProps) {
    const lg_services = [
        {
            title: 'SOFTWARE SOB DEMANDA',
            data: [
                'Personalização Completa',
                'Maior Eficiência',
                'Segurança aprimorada',
                'Adaptação Rápida',
            ]
        },
        {
            title: 'APLICATIVO MÓVEL',
            data: [
                'Acessibilidade',
                'Engajamento do Cliente',
                'Experiência do Usuário',
                'Adaptação Rápida',
            ]
        },
        {
            title: 'CRIAÇÃO DE SITES',
            data: [
                'Visibilidade Online',
                'Credibilidade e Confiança',
                'Marketing 24/7',
                'Flexibilidade e Escalabilidade',
            ]
        },
        {
            title: 'PLATAFORMA',
            data: [
                'Implementação Rápida',
                'Personalização',
                'Custo-Benefício',
                'Atualizações Regulares',
            ]
        }
    ];

    return (
        <SectionContainer
            title="NOSSOS SERVIÇOS"
            leading={<p className='hidden sm:block self-end cursor-pointer hover:scale-105 duration-200'>CONHEÇA</p>}
        >
            <div
                ref={serviceRef}
                className='flex items-center justify-start lg:justify-between gap-12 px-4 max-w-full flex-wrap'
            >
                {lg_services.map((item, index: number) => <ServicesList key={index} title={item.title} data={item.data} />)}
            </div>
        </SectionContainer>
    );
}

function ServicesList({ title, data }: { title: string; data: string[]; }) {
    return (
        <div className='flex flex-col items-start justify-center'>
            <h3 className='uppercase font-montserrat font-normal text-xl mb-4 cursor-default'>
                {title}
            </h3>
            <ul className='flex flex-col items-start justify-center gap-3 w-fit'>
                {data.map(((d: string, index: number) => (
                    <li key={index} className='flex items-center justify-start gap-2'>
                        <ChevronRight className="size-[24px]" />
                        <p className='font-light text-lg'>{d}.</p>
                    </li>
                )))}
            </ul>
        </div>
    );
}