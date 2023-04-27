import Image from "next/image"
import { Inter } from "next/font/google"
import { useState } from "react"
import { data } from "autoprefixer"

const inter = Inter({ subsets: ['latin'] })


export default function ImageComp(props) {
    const [load,setLoad] = useState(true);

    return (
        <div className={`${inter.className} inline-block rounded-md`}>
            <Image src={props?.url && props?.url}
            onLoadingComplete={()=>{
                setLoad(false);
            }} 
            height={200} width={200}
            className={`rounded-md hover:opacity-75 duration-150 ease-in-out ${load? 'grayscale blur-2xl scale-110':'grayscale-0 blur-0 scale-100'}`} alt="idk" />
            <i className="not-italic block px-2 py-2 text-sm font-semibold border border-black border-t-0 rounded-md rounded-tl-none rounded-tr-none">{props.description}</i>
        </div>
    )
}