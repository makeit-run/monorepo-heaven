"use client"

import { useEffect, useState } from "react"

import { breakpoints, BreakPointType } from "@frontend/shared/hooks/hooks/types"

export function useBreakpoints(): BreakPointType {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<BreakPointType>(
    getCurrentBreakpoint()
  )

  useEffect(() => {
    const handleResize = () => {
      setCurrentBreakpoint(getCurrentBreakpoint())
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return currentBreakpoint as BreakPointType
}

const getCurrentBreakpoint = (): BreakPointType => {
  const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0

  if (windowWidth >= breakpoints["2xl"]) {
    return "2xl"
  } else if (windowWidth >= breakpoints.xl) {
    return "xl"
  } else if (windowWidth >= breakpoints.lg) {
    return "lg"
  } else if (windowWidth >= breakpoints.md) {
    return "md"
  } else if (windowWidth >= breakpoints.sm) {
    return "sm"
  } else {
    return "xs"
  }
}

// import { useEffect, useState } from "react";
// import tailwindConfig from '../../../../../apps/machelp/tailwind.config.js';
//
// const tailwindBreakpoints = tailwindConfig.theme.screens;
//
// export function useBreakpoints() {
//   const [currentBreakpoint, setCurrentBreakpoint] = useState<string>(getCurrentBreakpoint());
//
//   useEffect(() => {
//     const handleResize = () => {
//       setCurrentBreakpoint(getCurrentBreakpoint());
//     };
//
//     window.addEventListener('resize', handleResize);
//
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);
//
//   return currentBreakpoint;
// }
//
// const getCurrentBreakpoint = (): string => {
//   const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
//
//   // Extract breakpoints from Tailwind config
//   const breakpoints = Object.values(tailwindBreakpoints);
//
//   // Find the current breakpoint based on window width and Tailwind breakpoints
//   for (let i = breakpoints.length - 1; i >= 0; i--) {
//     if (windowWidth >= breakpoints[i]) {
//       return Object.keys(tailwindBreakpoints)[i];
//     }
//   }
//
//   // Default to 'xs' if no breakpoint is matched
//   return "xs";
// };
