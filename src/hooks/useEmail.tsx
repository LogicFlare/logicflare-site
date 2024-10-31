import { z } from 'zod';
import { http } from '../service/index';

interface IEmail {
    from: string;
    subject: string;
    body: string;
}

export function useEmail() {
    const EmailFormSchema = z.object({
        from: z
            .string({ required_error: "Campo obrigatório." })
            .email({ message: "E-mail inválido." })
            .max(100, { message: "Formato inválido."}),
        subject: z
            .string({ required_error: "Campo obrigatório." })
            .min(1, { message: "Campo obrigatório." })
            .max(100, { message: "Máximo de 100 caracteres."}),
            body: z
            .string({ required_error: "Campo obrigatório."})
            .min(1, { message: "Preencha o corpo do e-mail." })
            .max(500, { message: "Máximo de 500 caracteres."})
    });

    async function sendEmail(data: any) {
        const email: IEmail = {
            from: data.from,
            subject: data.subject,
            body: data.body
        };

        try {
            await http
                .post('/email/send', email)
                .then(() => alert('Email enviado com sucesso!'));
        } catch (error) {
            alert(error);
            console.error(error);
        }
    };

    return {
        sendEmail,
        EmailFormSchema
    };
}

