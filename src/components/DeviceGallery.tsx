"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

interface DeviceGalleryProps {
  images: string[];
  name: string;
}

export default function DeviceGallery({ images, name }: DeviceGalleryProps) {
  const [selected, setSelected] = useState(0);
  const [dims, setDims] = useState<Record<number, [number, number]>>({});

  const handleLoad = useCallback(
    (index: number, e: React.SyntheticEvent<HTMLImageElement>) => {
      const img = e.currentTarget;
      setDims((d) => ({ ...d, [index]: [img.naturalWidth, img.naturalHeight] }));
    },
    []
  );

  const currentDims = dims[selected];
  const paddingBottom = currentDims
    ? `${(currentDims[1] / currentDims[0]) * 100}%`
    : "75%"; // 4/3 fallback

  return (
    <>
      {/* Primary image — height animates to natural aspect ratio */}
      <div
        className="fade-in"
        style={{
          width: "100%",
          position: "relative",
          paddingBottom,
          backgroundColor: "var(--braun-warm-grey)",
          marginBottom: 16,
          overflow: "hidden",
          animationDelay: "80ms",
          transition: "padding-bottom 420ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {images.map((src, i) => (
          <div
            key={src}
            style={{
              position: "absolute",
              inset: 0,
              opacity: i === selected ? 1 : 0,
              transition: "opacity 280ms ease",
              pointerEvents: i === selected ? "auto" : "none",
            }}
          >
            <Image
              src={src}
              alt={name}
              fill
              style={{ objectFit: "contain", objectPosition: "center" }}
              sizes="(max-width: 640px) 100vw, 50vw"
              priority={i === 0}
              onLoad={(e) => handleLoad(i, e)}
            />
          </div>
        ))}
      </div>

      {/* Thumbnail row — staggered fade-in */}
      <div style={{ display: "flex", gap: 8 }}>
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className="fade-up"
            style={{
              flex: 1,
              aspectRatio: "1/1",
              backgroundColor: "var(--braun-warm-grey)",
              position: "relative",
              overflow: "hidden",
              border: "none",
              padding: 0,
              cursor: "pointer",
              outline:
                selected === i
                  ? "2px solid var(--braun-red)"
                  : "2px solid transparent",
              outlineOffset: 2,
              transition: "outline-color 150ms ease, opacity 150ms ease",
              animationDelay: `${200 + i * 100}ms`,
            }}
            aria-label={`View ${i + 1}`}
          >
            <Image
              src={src}
              alt={`${name} — view ${i + 1}`}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              sizes="15vw"
            />
          </button>
        ))}
      </div>
    </>
  );
}
