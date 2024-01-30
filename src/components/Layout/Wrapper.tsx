import { ReactNode } from "react"

type Props = {
    children: ReactNode;
}

export function Wrapper({ children }: Props) {
    return(
        <div className="w-full lg:max-w-[1100px] my-0 mx-auto">
            {children}
        </div>
    )
}