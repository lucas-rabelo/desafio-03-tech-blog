import { TextareaHTMLAttributes } from "react";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    name: string;
}

export function Textarea({ name, ...rest }: Props) {
    return(
        <textarea 
            name={name} 
            placeholder={name.substring(0, 1).toUpperCase()+name.substring(1)} 
            className="py-4 px-[1.1rem] border-2 border-gray-200 rounded placeholder:text-gray-500 text-lg resize-none" 
            rows={5}
            {...rest} 
        ></textarea>
    );
}