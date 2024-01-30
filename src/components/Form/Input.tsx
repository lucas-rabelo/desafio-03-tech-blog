import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
    name: string;
}

export function Input({ name, ...rest }: Props) {
    return(
        <input 
            name={name} 
            placeholder={name.substring(0, 1).toUpperCase()+name.substring(1)} 
            className="py-4 px-[1.1rem] border-2 border-gray-200 rounded placeholder:text-gray-500 text-lg" 
            {...rest} 
        />
    );
}