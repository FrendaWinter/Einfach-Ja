import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { SidebarItem } from "@/components/sidebar-item"

type Props = {
    className?: String
}

export const Sidebar = ({ className }: Props) => {
    return (
        <div className={cn("flex h-full lg:w-[256px] lg:fixed top-0 left-0 px-4 border-r-2 flex-col", className)}>
            <Link href={"/learn"}>
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="/Dino1.svg" height={40} width={40} alt="Mascot"/>
                    <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">Einfach-Ja</h1>
                </div>
            </Link>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem label={"Learn"} iconSrc={"/learn.svg"} href={"/learn"}></SidebarItem>
                <SidebarItem label={"Achievement"} iconSrc={"/achievement.svg"} href={"/achievement"}></SidebarItem>
            </div>
        </div>
    )
}