import { useSearchParams } from 'react-router-dom';
import { Blog, BlogProps } from '../Blog';

type DataListProps = BlogProps & {
    id: string;
}

type Props = {
    data: DataListProps[];
}

export function BlogList({ data }: Props) {
    const [searchParams] = useSearchParams();

    const title = searchParams.get('title');
    const category = searchParams.get('category');

    let filtered = data;
    if(title) {
        filtered = filtered.filter(blog => blog.title.includes(title));
    }
    
    if(category) {
        filtered = filtered.filter(blog => blog.categorie.includes(category));
    }

    return(
        // <Wrapper>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {filtered.map(blog => (
                    <Blog.Root
                        key={blog.id}
                    >
                        <Blog.Image 
                            bgImage={blog.bgImage}
                            bgImageAlt={blog.bgImageAlt}
                        />

                        <Blog.Content 
                            title={blog.title}
                            content={blog.content}
                        />

                        <Blog.Footer 
                            categorie={blog.categorie}
                        />
                    </Blog.Root>
                ))}
            </div>
        // </Wrapper>
    )
}