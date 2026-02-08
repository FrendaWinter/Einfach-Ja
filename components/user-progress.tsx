import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { fail } from "node:assert"

type Props = {
    activeCourse: { imageSrc: string, title: string} //TODO: Replace with database type
    correct: number
    fail: number
    stars: number
}

export const UserProgress = ( {activeCourse, correct, fail, stars}: Props) => {
    return (
        <div className="flex justify-between gap-x-2 w-full">
            <Link href={"/courses"}>
                <Button variant={"ghost"}>
                    <Image src={activeCourse.imageSrc} alt={activeCourse.title} width={32} height={32} className="rounded-md border"/>
                </Button>
                <Button variant={"ghost"}>
                    <Image src="/correct.svg" alt="correct_img" width={22} height={22} className="rounded-md border"/>
                    {correct}
                </Button>
                <Button variant={"ghost"}>
                    <Image src="/fail.svg" alt="fail_img" width={22} height={22} className="rounded-md border"/>
                    {fail}
                </Button>
                <Button variant={"ghost"}>
                    <Image src="/stars.svg" alt="stars_img" width={22} height={22} className="rounded-md border"/>
                    {stars}
                </Button>
            </Link>
        </div>
    )
}