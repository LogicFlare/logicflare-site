import { Send } from "lucide-react";
import { useEmail } from "../../hooks/useEmail";
import { zodResolver } from "@hookform/resolvers/zod";
import { MutableRefObject } from "react";
import { SectionContainer } from "../sectionContainer";
import { Controller, useForm } from "react-hook-form";

interface IContactProps {
    contactRef: MutableRefObject<null> | any;
}

export function Contact(props: IContactProps) {
    const { contactRef } = props;

    const { EmailFormSchema, sendEmail } = useEmail();
    const {
        reset,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(EmailFormSchema),
        defaultValues: {
            from: "",
            subject: "",
            body: ""
        }
    });

    async function onSubmit(event: any) {
        await sendEmail(event).then(() => {
            reset({
                from: "",
                subject: "",
                body: ""
            });
        });

    }

    return (
        <SectionContainer title="ENTRE EM CONTATO">
            <div
                ref={contactRef}
                className='flex flex-col lg:flex-row items-start justify-between gap-14 text-xl'
            >
                <p className='lg:w-1/2 text-wrap text-center sm:text-start'>
                    Contate-nos caso tenha interesse em ter acesso as nossas soluções prontas ou nos mande informações de seu projeto personalizado.
                    <br /> Iremos analisar e retornar o contato para discutir detalhes e fornecer um orçamento!
                </p>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-col justify-center gap-4 w-full lg:w-1/2'
                >
                    <div className='flex flex-col md:flex-row items-center gap-4 w-full justify-between mb-2'>
                        <div className='flex flex-col items-start w-full mb-2 md:mb-0'>
                            <Controller
                                name="from"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        id="from"
                                        {...field}
                                        type="text"
                                        placeholder="Seu e-mail:"
                                        className='border border-main-dark focus:outline-none rounded-lg focus:border-main-color-dark focus:ring-0 duration-200 bg-main-white h-[50px] w-full'
                                    />
                                )}
                            />
                            {errors.from && <span className='absolute text-sm font-medium text-red-600 pl-2 mt-[50px]'>{errors.from.message}</span>}
                        </div>
                        <div className='flex flex-col items-start w-full mb-1 md:mb-0'>
                            <Controller
                                name="subject"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        id="subject"
                                        {...field}
                                        type="text"
                                        placeholder="Assunto:"
                                        className='border border-main-dark focus:outline-none rounded-lg focus:border-main-color-dark focus:ring-0 duration-200 bg-main-white h-[50px] w-full'
                                    />
                                )}
                            />
                            {errors.subject && <span className='absolute text-sm font-medium text-red-600 pl-2 mt-[50px]'>{errors.subject.message}</span>}
                        </div>
                    </div>
                    <div className='flex flex-col items-start w-full mb-1 md:mb-0'>
                        <Controller
                            name="body"
                            control={control}
                            render={({ field }) => (
                                <textarea
                                    id="body"
                                    {...field}
                                    placeholder="Detalhes do seu projeto:"
                                    className='border border-main-dark focus:outline-none rounded-lg focus:border-main-color-dark focus:ring-0 duration-200 bg-main-white min-h-[185px] w-full'
                                />
                            )}
                        />
                        {errors.body && <span className='absolute text-sm font-medium text-red-600 pl-2 mt-[186px]'>{errors.body.message}</span>}
                    </div>
                    <button
                        type="submit"
                        className='flex items-center justify-center rounded-lg gap-2 select-none h-[45px] mt-1.5 text-main-dark bg-main-color hover:bg-main-color-dark duration-200'
                    >
                        <p className='text-lg'>Enviar</p>
                        <Send className='stroke-[1.2px] size-5' />
                    </button>
                </form>
            </div>
        </SectionContainer>
    );
}