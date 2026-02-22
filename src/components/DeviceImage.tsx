"use client";

import Image from "next/image";
import { useState } from "react";

interface DeviceImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  fit?: "contain" | "cover";
}

export default function DeviceImage({ src, alt, fill, sizes, priority, fit = "contain" }: DeviceImageProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "var(--braun-warm-grey)",
        }}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      sizes={sizes ?? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
      priority={priority}
      style={{
        objectFit: fit,
        objectPosition: "center",
      }}
      onError={() => setErrored(true)}
    />
  );
}
