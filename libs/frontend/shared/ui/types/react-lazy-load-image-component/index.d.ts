// import React, {
//   ComponentType,
//   CSSProperties,
//   FunctionComponent,
//   ImgHTMLAttributes,
//   ReactElement,
//   ReactEventHandler,
//   ReactNode
// } from "react"
//
// declare module "react-lazy-load-image-component" {
//   type DelayMethod = "debounce" | "throttle"
//   type Effect = "blur" | "black-and-white" | "opacity"
//
//   interface ScrollPosition {
//     x: number
//     y: number
//   }
//
//   interface CommonProps {
//     /** @deprecated Use onLoad instead. This prop is only for backward compatibility. */
//     afterLoad?: (() => any) | undefined
//     /** Function called when the image has been loaded. This is the same function as the onLoad of an <img> which contains an event object. */
//     onLoad?: ReactEventHandler<HTMLImageElement>
//     /** Function called right before the placeholder is replaced with the image element. */
//     beforeLoad?: (() => any) | undefined
//     /* Method from lodash to use to delay the scroll/resize events. */
//     delayMethod?: DelayMethod | undefined
//     /** Time in ms sent to the delayMethod. */
//     delayTime?: number | undefined
//     /** Threshold in pixels. So the image starts loading before it appears in the viewport. */
//     threshold?: number | undefined
//     /** Whether to use browser's IntersectionObserver when available. */
//     useIntersectionObserver?: boolean | undefined
//     /** Whether the image must be visible from the beginning. */
//     visibleByDefault?: boolean | undefined
//     /** React element to use as a placeholder. Default is <span>. */
//     placeholder?: ReactElement | null | undefined
//     /** See trackWindowScroll(). */
//     scrollPosition?: ScrollPosition | undefined
//   }
//
//   interface LazyLoadImageProps
//     extends CommonProps,
//       Omit<ImgHTMLAttributes<HTMLImageElement>, "placeholder" | "onLoad"> {
//     /** Name of the effect to use. Requires importing CSS, see README.md. */
//     effect?: Effect | undefined
//     /** Image src to display while the image is not visible or loaded. */
//     placeholderSrc?: string | undefined
//     /** In some occasions (for example, when using a placeholderSrc) a wrapper span tag is rendered. This prop allows setting a class to that element. */
//     wrapperClassName?: string | undefined
//     /** Props that should be passed to the wrapper span when it is rendered (for example, when using placeholderSrc or effect) */
//     wrapperProps?: React.HTMLAttributes<HTMLSpanElement> | undefined
//   }
//
//   const LazyLoadImage: FunctionComponent<LazyLoadImageProps>
//
//   interface LazyComponentProps {
//     scrollPosition: ScrollPosition
//   }
//
//   function trackWindowScroll<P extends LazyComponentProps>(
//     BaseComponent: ComponentType<P>
//   ): ComponentType<Omit<P, "scrollPosition">>
//
//   interface LazyLoadComponentProps extends CommonProps {
//     children: ReactNode
//     style?: CSSProperties | undefined
//   }
//
//   const LazyLoadComponent: FunctionComponent<LazyLoadComponentProps>
// }
