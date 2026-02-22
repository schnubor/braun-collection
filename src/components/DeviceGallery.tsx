"use client";

import { useState } from "react";
import DeviceImage from "./DeviceImage";

interface DeviceGalleryProps {
  images: string[];
  name: string;
}

export default function DeviceGallery({ images, name }: DeviceGalleryProps) {
  const [selected, setSelected] = useState(0);

  return (
    <>
      {/* Primary image */}
      <div
        className="fade-in"
        style={{
          width: "100%",
          aspectRatio: "4/3",
          backgroundColor: "var(--braun-warm-grey)",
          position: "relative",
          marginBottom: 16,
          animationDelay: "80ms",
          overflow: "hidden",
        }}
      >
        <DeviceImage
          src={images[selected]}
          alt={name}
          fill
          fit="cover"
          priority
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </div>

      {/* Thumbnail row */}
      <div style={{ display: "flex", gap: 8 }}>
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            style={{
              flex: 1,
              aspectRatio: "1/1",
              backgroundColor: "var(--braun-warm-grey)",
              position: "relative",
              overflow: "hidden",
              border: "none",
              padding: 0,
              cursor: "pointer",
              outline: selected === i
                ? "2px solid var(--braun-red)"
                : "2px solid transparent",
              outlineOffset: 2,
              transition: "outline-color 150ms ease, opacity 150ms ease",
            }}
            aria-label={`View ${i + 1}`}
          >
            <DeviceImage
              src={src}
              alt={`${name} — view ${i + 1}`}
              fill
              fit="cover"
              sizes="15vw"
            />
          </button>
        ))}
      </div>
    </>
  );
}
