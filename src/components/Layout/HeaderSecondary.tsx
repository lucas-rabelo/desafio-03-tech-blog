import { CaretCircleLeft } from "@phosphor-icons/react";

import { useNavigate } from "react-router-dom";

export function HeaderSecondary() {
    const navigate = useNavigate();

    function handleGoback() {
        navigate('/');
    }

    return(
        <div className="flex justify-between px-4 lg:px-0 mb-3">
            <div className="flex items-center gap-2">
                <button onClick={handleGoback} className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500">
                    <CaretCircleLeft weight='bold' size={24}/>
                </button>
                <h1 className="text-3xl text-black font-bold">
                    Tech<span className="text-indigo-500 font-bold">Blog</span>
                </h1>
            </div>

            {/* <button className="bg-indigo-500 md:px-8 py-[.80rem] px-8 rounded text-base font-medium uppercase hover:bg-indigo-600 transition">
                Entrar
            </button> */}
        </div>
    );
}