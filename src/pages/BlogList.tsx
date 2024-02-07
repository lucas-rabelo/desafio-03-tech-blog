import { Content } from "../components/Layout/Content";
import { Wrapper } from "../components/Layout/Wrapper";
import { BlogFilter } from '../components/Form/BlogFilter';
import { HeaderSecondary } from '../components/Layout/HeaderSecondary';

export function BlogList() {
    return(
        <div className="flex flex-col items-center justify-center">
            <Wrapper>
                <header className="flex flex-col justify-center gap-3 py-6">
                    <HeaderSecondary />

                    <BlogFilter />
                </header>
            </Wrapper>

            <main className="w-full flex flex-col items-center">
                <Content title="Artigos relacionados" />
            </main>
        </div>
    );
}