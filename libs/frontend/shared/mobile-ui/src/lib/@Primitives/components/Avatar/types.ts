import type { Image } from "react-native"

import type {
  ComponentPropsWithAsChild,
  SlottableViewProps,
  ViewRef
} from "../../types"

type RootProps = SlottableViewProps & {
  alt: string
}

type ImageProps = Omit<ComponentPropsWithAsChild<typeof Image>, "alt"> & {
  children?: React.ReactNode
  onLoadingStatusChange?: (status: "error" | "loaded") => void
}

type FallbackProps = SlottableViewProps

type RootRef = ViewRef
type ImageRef = React.ElementRef<typeof Image>
type FallbackRef = ViewRef

export type {
  FallbackProps,
  FallbackRef,
  ImageProps,
  ImageRef,
  RootProps,
  RootRef
}
