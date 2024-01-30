import { Button } from '../Button';
import { Input } from '../Form/Input';
import { Textarea } from '../Form/TextArea';

export function Contact() {
    return(
        <section className="flex flex-col py-20 px-6 gap-12 lg:items-center">
            <h1 className="font-bold text-3xl text-slate-950">
                Entre em contato
            </h1>

            <form className="flex flex-col w-full lg:w-2/5 gap-6">
                <Input name="nome" />
                <Input name="email" />
                <Textarea name="assunto" />

                <Button label="Entrar em contato"/>
            </form>
        </section>
    )
}