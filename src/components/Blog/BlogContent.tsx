type BlogContentProps = {
    title?: string;
    content?: string;
}

export function BlogContent({ title, content }: BlogContentProps) {
    return(
        <div className="flex flex-col px-5 py-6 gap-3 w-full">
            {
                title &&
                <h1 className="text-xl text-slate-950 font-bold">{title}</h1>
            }

            {
                content &&
                <p className="text-base text-slate-950">{content}</p>
            }
        </div>
    );
}