'use client'
import * as React from "react"
import { Progress } from "@/components/ui/progress"


function ProgressDemo ({score}:{score:number}) {
  const [progress, setProgress] = React.useState(16)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(score), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className="w-[60%]" />
}

export default ProgressDemo;