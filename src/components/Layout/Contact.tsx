import { ContactForm } from '../Form/ContactForm';

export function Contact() {
    return(
        <section className="flex flex-col py-20 px-6 gap-12 lg:items-center">
            <h1 className="font-bold text-3xl text-slate-950">
                Entre em contato
            </h1>

            <ContactForm />
        </section>
    )
}