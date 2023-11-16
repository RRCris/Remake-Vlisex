import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import placeHolderImageDark from "@/assets/placeHolderImageDark.webp";
import placeHolderImageLigth from "@/assets/placeHolderImage.webp";
import { useTheme } from "@/providers/ProviderTheme";

interface PropsImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export default function Image(props: PropsImage) {
  const {
    currentValues: { scheme },
  } = useTheme();

  return (
    <LazyLoadImage
      style={{ objectFit: "cover" }}
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      effect="blur"
      placeholderSrc={
        scheme === "dark" ? placeHolderImageDark : placeHolderImageLigth
      }
    />
  );
}
