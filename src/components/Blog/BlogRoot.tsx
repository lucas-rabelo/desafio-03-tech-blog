import { ReactNode } from "react"

type BlogRootProps = {
    children: ReactNode;
}

export function BlogRoot({ children }: BlogRootProps) {
    return(
        <div className="flex flex-col w-full border-slate-100 border-[.2rem] rounded-lg hover:cursor-pointer hover:border-indigo-500 transition-colors">
            {children}
        </div>
    );
}