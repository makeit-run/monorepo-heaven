"use client"

import React, { ReactNode, useEffect } from "react"

import { customModalBlurMaskStyles, customModalCardStyles } from "./config"

interface UICustomModalProps {
  children: ReactNode
}

export const UICustomModal = ({ children }: UICustomModalProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "visible"
    }
  }, [])

  return (
    <div className="fixed left-0 top-0 z-50 flex size-full items-center justify-center">
      <div className={customModalBlurMaskStyles()} />
      <div className={customModalCardStyles()}>{children}</div>
    </div>
  )
}
