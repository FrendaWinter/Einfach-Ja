'use client'

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  return (
    <div className="max-w-247 mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <Button size={"lg"} variant={"secondary"} onClick={() => router.push("/learn")}>Click me</Button>
    </div>
  )
}
