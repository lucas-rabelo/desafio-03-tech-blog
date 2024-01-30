import { Blog, BlogProps } from "../Blog";
import { Wrapper } from "../Layout/Wrapper";

type DataListProps = BlogProps & {
    id: string;
}

type Props = {
    data: DataListProps[];
}

export function BlogList({ data }: Props) {

    return(
        <Wrapper>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {data.map(blog => (
                    <Blog
                        blogData={blog}
                    />
                ))}
            </div>
        </Wrapper>
    )
}