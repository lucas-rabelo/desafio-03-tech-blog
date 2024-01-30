export type BlogProps = {
    bgImage: string;
    bgImageAlt: string;
    title: string;
    content: string;
}

type Props = {
    blogData: BlogProps;
}

export function Blog({ blogData }: Props) {
    
    const { bgImage, bgImageAlt, title, content } = blogData;
    
    return(
        <div className="flex flex-col w-full md:w-[20.94rem] border-slate-100 border-[.2rem] rounded-lg mb-8 hover:cursor-pointer hover:border-indigo-500 transition-colors">
            <img src={bgImage} alt={bgImageAlt} />

            <div className="flex flex-col px-5 py-6 gap-3 w-full">
                <h1 className="text-xl text-slate-950 font-bold">{title}</h1>

                <p className="text-base text-slate-950">{content}</p>
            </div>
        </div>
    )
}