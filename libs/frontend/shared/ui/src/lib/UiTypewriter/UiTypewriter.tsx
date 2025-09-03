"use client"

import { cn } from "@shared/utils/cn"
import { motion, stagger, useAnimate, useInView } from "framer-motion"
import { useEffect } from "react"
import { VariantProps } from "class-variance-authority"

import { UiText } from "../UiText"
import {
  typewriterVariants,
  typewriterContainerVariants,
  typewriterWordVariants,
  typewriterCharVariants,
  typewriterCursorVariants,
  typewriterSmoothContainerVariants,
  typewriterSmoothContentVariants,
  typewriterSmoothCharVariants,
  typewriterSmoothCursorVariants,
} from "./config"

interface UiTypewriterProps {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
  variant?: VariantProps<typeof typewriterVariants>['variant']
  containerVariant?: VariantProps<typeof typewriterContainerVariants>['variant']
  wordVariant?: VariantProps<typeof typewriterWordVariants>['variant']
  charVariant?: VariantProps<typeof typewriterCharVariants>['variant']
  cursorVariant?: VariantProps<typeof typewriterCursorVariants>['variant']
}

export const UiTypewriter = ({
  words,
  className,
  cursorClassName,
  variant = 'default',
  containerVariant = 'default',
  wordVariant = 'default',
  charVariant = 'default',
  cursorVariant = 'default'
}: UiTypewriterProps) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split("")
    }
  })

  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content"
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut"
        }
      )
    }
  }, [isInView])

  const renderWords = () => {
    return (
      <motion.div ref={scope} className={cn(typewriterContainerVariants({ variant: containerVariant }))}>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className={cn(typewriterWordVariants({ variant: wordVariant }))}>
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(typewriterCharVariants({ variant: charVariant }), word.className)}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          )
        })}
      </motion.div>
    )
  }
  return (
    <div className={cn(typewriterVariants({ variant }), className)}>
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className={cn(typewriterCursorVariants({ variant: cursorVariant }), cursorClassName)}
      ></motion.span>
    </div>
  )
}

interface UiTypewriterSmoothProps {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
  containerVariant?: VariantProps<typeof typewriterSmoothContainerVariants>['variant']
  contentVariant?: VariantProps<typeof typewriterSmoothContentVariants>['variant']
  charVariant?: VariantProps<typeof typewriterSmoothCharVariants>['variant']
  cursorVariant?: VariantProps<typeof typewriterSmoothCursorVariants>['variant']
}

export const UiTypewriterSmooth = ({
  words,
  className,
  cursorClassName,
  containerVariant = 'default',
  contentVariant = 'default',
  charVariant = 'default',
  cursorVariant = 'default'
}: UiTypewriterSmoothProps) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split("")
    }
  })
  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className={cn(typewriterWordVariants({ variant: 'default' }))}>
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn(typewriterSmoothCharVariants({ variant: charVariant }), word.className)}
                >
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className={cn(typewriterSmoothContainerVariants({ variant: containerVariant }), className)}>
      <motion.div
        className={cn(typewriterSmoothContentVariants({ variant: contentVariant }))}
        initial={{
          width: "0%"
        }}
        whileInView={{
          width: "fit-content"
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
          repeat: Infinity,
          repeatDelay: 1
        }}
      >
        <UiText className="nowrap">{renderWords()} </UiText>{" "}
      </motion.div>
      <motion.span
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          duration: 0.8,

          repeat: Infinity,
          repeatType: "reverse"
        }}
        className={cn(typewriterSmoothCursorVariants({ variant: cursorVariant }), cursorClassName)}
      ></motion.span>
    </div>
  )
}
