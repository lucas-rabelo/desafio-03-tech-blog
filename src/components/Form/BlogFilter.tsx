import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { useSearchParams } from 'react-router-dom';

const blogFilterSchema = z.object({
    title: z.string(),
    category: z.string()
})

type BlogFilterSchema = z.infer<typeof blogFilterSchema>;

export function BlogFilter() {
    const [, setSearchParams] = useSearchParams();

    const { register, handleSubmit } = useForm<BlogFilterSchema>({
        resolver: zodResolver(blogFilterSchema)
    });

    function handleFilterBlog({ title, category }: BlogFilterSchema) {
        setSearchParams(state => {
            if(title) {
                state.set('title', title)
            } else {
                state.delete('title')
            }

            return state
        })

        setSearchParams(state => {
            if(category) {
                state.set('category', category)
            } else {
                state.delete('category')
            }

            return state
        })
    }

    return(
        <form onSubmit={handleSubmit(handleFilterBlog)} className="flex flex-col md:flex-row items-end md:items-center px-4 lg:px-0 my-2 gap-2 w-full"> 
            <input 
                className="w-full py-4 px-[1.1rem] border-y-2 border-x-2 border-b-2 border-gray-200 rounded-r rounded-ee placeholder:text-gray-500 text-lg text-slate-950"
                placeholder="Procure o tema que deseja saber"
                {...register('title')}
            />

            <input 
                className="w-full py-4 px-[1.1rem] border-y-2 border-x-2 border-b-2 border-gray-200 rounded-l rounded-ss placeholder:text-gray-500 text-lg text-slate-950"
                placeholder="Procure pela categoria"
                {...register('category')}
            />

            <button type="submit" className="flex items-center justify-center ml-2">
                <MagnifyingGlass weight='bold' size={24} color="#000000"/>

                <span className="text-xl ml-2 text-black">Filtrar</span>
            </button>
        </form>
    );
}