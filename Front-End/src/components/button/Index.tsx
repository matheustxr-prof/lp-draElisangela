import { ReactElement } from "react"

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

interface botaoProps{
    children: ReactElement | string
}

export default function Botao( {children}:botaoProps){
    return (
        <a 
            href="https://wa.me/553499353532?text=Olá,%20vim%20através%20do%20site,%20gostaria%20de%20agendar%20uma%20consulta." target='_blank'
            className="w-full md:max-w-[22.8rem] py-5 rounded font-bold text-white text-[26px] bg-purple-700 shadow-[0px_0px_20px_#000] hover:bg-[#028986] hover:shadow-[0px_0px_20px_#fff] transition-all duration-200"
        >
            <button className="w-full flex justify-center">
                <WhatsAppIcon className='fill-white !w-[40px] !h-[40px] mr-2 animate-bounce'/>
                {children}
            </button>
        </a>
    )
}