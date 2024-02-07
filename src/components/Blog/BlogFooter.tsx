type BlogFooterProps = {
    categorie: string;
}

export function BlogFooter({ categorie }: BlogFooterProps) {
    return(
        <div className="flex flex-row whitespace-pre gap-2 px-5 pb-6">
            <div className="rounded-full bg-indigo-200 text-indigo-800 text-sm font-bold px-4 py-1">{categorie}</div>
        </div>
    );
}