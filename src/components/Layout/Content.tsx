import { blogExamples } from '../../utils/blog-examples';
import { BlogList } from '../Lists/BlogList';
import { Wrapper } from './Wrapper';

type Props = {
    title?: string;
}

export function Content({ title = 'Artigos recomendados' }: Props) {
    return(
        <section className="w-full flex flex-col items-center bg-white py-16 px-6 md:px-8">
            <Wrapper>
                <h1 className="text-slate-950 text-2xl font-bold mb-10">{ title }</h1>

                <BlogList 
                    data={blogExamples}
                />
            </Wrapper>
        </section>
    )
}