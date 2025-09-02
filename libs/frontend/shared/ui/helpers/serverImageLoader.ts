import { ImageLoaderProps } from "next/image"

const serverImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  //if (width) return `${src}?w=${width}&q=${quality || 75}`;
  // if (width) {
  //   return src
  // }
  //return `${src}?q=${quality || 75}`;
  return src
}

export default serverImageLoader
