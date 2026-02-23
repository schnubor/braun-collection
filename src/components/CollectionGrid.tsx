"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import DeviceImage from "./DeviceImage";
import { collection, type Device, type Category } from "@/lib/collection";

const categoryLabels: Record<string, string> = {
    audio: "Audio",
    radio: "Radio",
    shaver: "Shaver",
    kitchen: "Kitchen",
    calculator: "Calculator",
    lighter: "Lighter",
    projector: "Projector",
    camera: "Camera",
    haircare: "Hair Care",
    clock: "Clock",
    charger: "Charger",
    fan: "Fan",
};

function DeviceCard({ device, index }: { device: Device; index: number }) {
    const delay = (index % 6) * 80;

    return (
        <Link
            href={`/device/${device.id}`}
            className="fade-up"
            style={{
                display: "block",
                textDecoration: "none",
                color: "inherit",
                animationDelay: `${delay}ms`,
            }}
        >
            <article>
                <div
                    className="card-image"
                    style={{
                        width: "100%",
                        aspectRatio: "4/3",
                        backgroundColor: "var(--braun-warm-grey)",
                        marginBottom: 24,
                        position: "relative",
                        overflow: "hidden",
                        transition: "opacity 220ms ease",
                    }}
                >
                    <DeviceImage
                        src={device.images[0]}
                        alt={device.name}
                        fill
                        fit="cover"
                        priority={false}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div
                        style={{
                            position: "absolute",
                            top: 16,
                            right: 16,
                            fontFamily: "var(--font-dm-mono), monospace",
                            fontSize: 10,
                            letterSpacing: "0.1em",
                            color: "var(--braun-mid-grey)",
                        }}
                    >
                        {device.year}
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "baseline",
                        justifyContent: "space-between",
                        marginBottom: 8,
                    }}
                >
                    <span
                        style={{
                            fontFamily: "var(--font-dm-mono), monospace",
                            fontSize: 10,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "var(--braun-mid-grey)",
                        }}
                    >
                        {categoryLabels[device.category]}
                    </span>
                    <span
                        style={{
                            fontFamily: "var(--font-dm-mono), monospace",
                            fontSize: 10,
                            letterSpacing: "0.08em",
                            color: "var(--braun-rule)",
                        }}
                    >
                        {device.condition}
                    </span>
                </div>

                <h2
                    className="card-name"
                    style={{
                        fontSize: 20,
                        fontWeight: 400,
                        letterSpacing: "-0.02em",
                        color: "var(--braun-black)",
                        lineHeight: 1.2,
                        transition: "color 200ms ease",
                    }}
                >
                    {device.name}
                </h2>
            </article>
        </Link>
    );
}

export default function CollectionGrid() {
    const [activeCategory, setActiveCategory] = useState<Category | null>(null);

    const categories = useMemo(() => {
        const seen = new Set<Category>();
        collection.forEach((d) => seen.add(d.category));
        return Array.from(seen).sort((a, b) =>
            categoryLabels[a].localeCompare(categoryLabels[b])
        );
    }, []);

    const filtered = useMemo(
        () =>
            activeCategory
                ? collection.filter((d) => d.category === activeCategory)
                : collection,
        [activeCategory]
    );

    return (
        <>
            {/* Filter */}
            <div className="fade-up" style={{ marginBottom: 56 }}>
                <select
                    value={activeCategory ?? ""}
                    onChange={(e) =>
                        setActiveCategory((e.target.value as Category) || null)
                    }
                    style={{
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: 10,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        padding: "6px 32px 6px 12px",
                        border: "1px solid var(--braun-rule)",
                        borderRadius: 0,
                        backgroundColor: "transparent",
                        color: activeCategory ? "var(--braun-black)" : "var(--braun-mid-grey)",
                        cursor: "pointer",
                        appearance: "none",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%239C9891'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 10px center",
                        outline: "none",
                    }}
                >
                    <option value="">All objects</option>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {categoryLabels[cat]}
                        </option>
                    ))}
                </select>
            </div>

            {/* Cards */}
            <div
                className="card-grid"
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "64px 32px",
                }}
            >
                {filtered.map((device, i) => (
                    <DeviceCard key={device.id} device={device} index={i} />
                ))}
            </div>

            <style>{`
        a:hover .card-image { opacity: 0.82; }
        a:hover .card-name { color: var(--braun-mid-grey); }
        select:hover { border-color: var(--braun-mid-grey) !important; }
      `}</style>
        </>
    );
}
