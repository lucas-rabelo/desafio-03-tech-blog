import { Button } from '../Button';

import HeroImage from '../../assets/image.svg';

import { Wrapper } from './Wrapper';

export function Header() {
    return(
        <Wrapper>
            <header className="w-full flex flex-col items-center justify-center gap-3 my-16 lg:flex-row-reverse lg:justify-between lg:mx-0">
                <img
                    className="w-52 h-60 md:w-[330px] md:h-[379.5px]"
                    src={HeroImage} 
                    alt="Hero Image SVG" 
                />

                <div className="flex flex-col gap-6 md:items-center lg:items-start">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl leading-8 lg:leading-[3.2rem] font-bold text-slate-950 text-center lg:text-left">
                        Encontre os <span className="text-2xl md:text-3xl lg:text-4xl leading-8 md:leading-[3.2rem] lg:leading-[3.2rem] font-bold text-indigo-500">melhores artigos</span> <br /> de programação em um só lugar
                    </h1>
                    
                    <p className="text-base md:text-lg lg:text-xl lg:leading-8 font-medium text-center lg:text-left text-slate-950">
                        Explore o topo da programação em um só lugar!<br /> 
                        Seu destino único para dicas e tendências atuais.
                    </p>

                    <Button 
                        label="Buscar artigos"
                    />
                </div>
            </header>
        </Wrapper>
    )
}