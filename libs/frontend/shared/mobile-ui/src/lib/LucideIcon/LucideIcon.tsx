import { LucideIcon as ILucideIcon, LucideProps } from "lucide-react-native"
import { Platform, View } from "react-native"
import { cssInterop } from "react-native-css-interop"

type IconProps = LucideProps & {
  icon: ILucideIcon
}

export function iconWithClassName(icon: ILucideIcon) {
  cssInterop(icon, {
    className: {
      target: "style",
      nativeStyleToProp: {
        color: true,
        opacity: true,
        width: true,
        height: true,
        stroke: true
      }
    }
  })
}

export const LucideIcon = ({
  icon: LucideIcon,
  className,
  ...props
}: IconProps) => {
  iconWithClassName(LucideIcon)

  const iconClassName = Platform.select({
    native: className
  })

  return (
    <View className={className}>
      <LucideIcon className={iconClassName} {...props} />
    </View>
  )
}
