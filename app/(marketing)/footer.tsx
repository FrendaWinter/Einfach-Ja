import { Button } from "@/components/ui/button"
import Image from "next/image"

export const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-5xl mx-auto flex items-center justify-evenly h-full">
                <Button size={"lg"} variant={"ghost"}> 
                    <Image src="/de.svg" alt="Deutsch" height={32} width={40} className="mr-4 rounded-md"/>
                    Deutsch
                </Button>
                <Button size={"lg"} variant={"ghost"}>
                    <Image src="/jp.svg" alt="Japanese" height={32} width={40} className="mr-4 rounded-md"/>
                    Japanese
                </Button>
                <Button size={"lg"} variant={"ghost"}>
                    <Image src="/en.svg" alt="English" height={32} width={40} className="mr-4 rounded-md"/>
                    Japanese
                </Button>
                <Button size={"lg"} variant={"ghost"}>
                    <Image src="/vn.svg" alt="Vietnamese" height={32} width={40} className="mr-4 rounded-md"/>
                    Vietnamese
                </Button>
            </div>
        </footer>
    )
}