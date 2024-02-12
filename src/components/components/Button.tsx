import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string;
}

export function Button({ label, ...rest }: Props) {

    return(
        <button
            className="bg-indigo-500 md:px-6 py-[.65rem] rounded text-sm font-medium uppercase hover:bg-indigo-600 transition"
            {...rest}
        >
            {label}
        </button>
    )
}