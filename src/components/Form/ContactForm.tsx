import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../components/Button";

const ContactFormSchema = z.object({
    name: z.string(),
    email: z.string(),
    subject: z.string()
})

type ContactFormSchema = z.infer<typeof ContactFormSchema>;

export function ContactForm() {
    const { register, handleSubmit } = useForm<ContactFormSchema>({
        resolver: zodResolver(ContactFormSchema)
    });

    function handleSendContact(data: ContactFormSchema) {
        console.log(data);
    }

    return(
        <form onSubmit={handleSubmit(handleSendContact)} className="flex flex-col w-full lg:w-2/5 gap-6">
            <input 
                className="py-4 px-[1.1rem] border-2 border-gray-200 rounded placeholder:text-gray-500 text-lg"
                placeholder='Nome'
                {...register("name")}
            />
            <input 
                className="py-4 px-[1.1rem] border-2 border-gray-200 rounded placeholder:text-gray-500 text-lg"
                placeholder="E-mail" 
                {...register("email")}
            />
            <textarea 
                placeholder="Assunto da mensagem"
                className="py-4 px-[1.1rem] border-2 border-gray-200 rounded placeholder:text-gray-500 text-lg resize-none" 
                rows={5}
                {...register('subject')}
            />

            <Button label="Entrar em contato"/>
        </form>
    )
}