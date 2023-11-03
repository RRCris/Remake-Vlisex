import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import placeHolderImage from "@/assets/placeHolderImageDark.webp";

interface PropsImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}
export default function Image(props: PropsImage) {
  return (
    <LazyLoadImage
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      effect="blur"
      placeholderSrc={placeHolderImage}
    />
  );
}
