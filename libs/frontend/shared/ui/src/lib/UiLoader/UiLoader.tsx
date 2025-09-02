import { cn } from "@shared/utils/cn"
import { VariantProps } from "class-variance-authority"
import { Loader } from "lucide-react"
import React from "react"

import { loaderStyles } from "./config"

interface UiLoaderProps extends VariantProps<typeof loaderStyles> {
  className?: string
}
export const UiLoader = ({ variant, className }: UiLoaderProps) => {
  return <Loader className={cn(loaderStyles({ variant }), className)} />
}
