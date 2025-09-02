import { cva } from "class-variance-authority"

export const accordionTriggerStyles = cva(
  "flex  flex-1 !items-start !text-left !py-3 md:px-8 sm:px-6 px-4 focus:border-none focus-visible:border-none justify-between  data-[state=open]:font-bold  transition-all [&[data-state=open]>div>svg]:rotate-90 ",
  {
    variants: {
      variant: {
        default:
          "py-4 text-text-500 font-medium max-md:text-md text-xl data-[state=open]:bg-primary data-[state=open]:text-white [&[data-state=open]>div]:bg-landing-background",
        white:
          "py-4 bg-white data-[state=open]:!rounded-b-none font-medium max-md:text-md text-xl data-[state=open]:bg-white data-[state=open]:text-text-500 [&[data-state=open]>div]:bg-transparent"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export const accordionTriggerIconStyles = cva(
  "shrink-0 transition-transform duration-600 md:size-6 size-5 max-mini:size-4",
  {
    variants: {
      variant: {
        default: "text-secondary",
        white: "text-primary"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export const accordionTriggerIconWrapperStyles = cva(
  "ml-1 flex items-center justify-center rounded-full p-1 transition-all sm:ml-3",
  {
    variants: {
      variant: {
        default: "border-text-landing-highlight bg-primary-100/50",
        white: ""
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export const accordionContentStyles = cva(
  "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden transition-all",
  {
    variants: {
      variant: {
        default: "",
        white: "bg-white rounded-b-lg"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)
