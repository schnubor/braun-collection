import Link from "next/link";
import Nav from "@/components/Nav";
import DeviceImage from "@/components/DeviceImage";
import { collection, type Device } from "@/lib/collection";

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
                {/* Image area */}
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

                {/* Meta row */}
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

                {/* Name */}
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

export default function HomePage() {
    return (
        <>
            <Nav />

            <main style={{ paddingTop: 64 }}>
                {/* Hero */}
                <section
                    className="page-section hero-section"
                    style={{
                        maxWidth: "var(--max-width)",
                        margin: "0 auto",
                        padding: "80px 48px 64px",
                    }}
                >
                    <div className="fade-up" style={{ maxWidth: 400 }}>
                        <p
                            style={{
                                fontSize: 15,
                                fontWeight: 400,
                                lineHeight: 1.75,
                                color: "var(--braun-dark-grey)",
                                marginBottom: 40,
                            }}
                        >
                            My personal collection of Braun objects, assembled
                            over the years out of a deep admiration for the work
                            of Dieter Rams. {collection.length} pieces — each chosen for
                            its honesty of form and the clarity of its purpose.
                        </p>

                        <div style={{ display: "flex", gap: 40 }}>
                            <div>
                                <div
                                    style={{
                                        fontSize: 24,
                                        fontWeight: 500,
                                        letterSpacing: "-0.04em",
                                        color: "var(--braun-black)",
                                        lineHeight: 1,
                                        marginBottom: 6,
                                    }}
                                >
                                    {collection.length}
                                </div>
                                <div
                                    style={{
                                        fontFamily:
                                            "var(--font-dm-mono), monospace",
                                        fontSize: 10,
                                        letterSpacing: "0.1em",
                                        textTransform: "uppercase",
                                        color: "var(--braun-mid-grey)",
                                    }}
                                >
                                    Objects
                                </div>
                            </div>

                            <div>
                                <div
                                    style={{
                                        fontSize: 24,
                                        fontWeight: 500,
                                        letterSpacing: "-0.04em",
                                        color: "var(--braun-black)",
                                        lineHeight: 1,
                                        marginBottom: 6,
                                    }}
                                >
                                    {Math.min(...collection.map(d => d.year))} – {Math.max(...collection.map(d => d.year))}
                                </div>
                                <div
                                    style={{
                                        fontFamily:
                                            "var(--font-dm-mono), monospace",
                                        fontSize: 10,
                                        letterSpacing: "0.1em",
                                        textTransform: "uppercase",
                                        color: "var(--braun-mid-grey)",
                                    }}
                                >
                                    Era
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Collection grid */}
                <section
                    className="page-section"
                    style={{
                        maxWidth: "var(--max-width)",
                        margin: "0 auto",
                        padding: "64px 48px 120px",
                    }}
                >
                    {/* Cards */}
                    <div
                        className="card-grid"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "64px 32px",
                        }}
                    >
                        {collection.map((device, i) => (
                            <DeviceCard
                                key={device.id}
                                device={device}
                                index={i}
                            />
                        ))}
                    </div>
                </section>

                {/* Footer */}
                <footer
                    style={{
                        padding: "28px 48px",
                        maxWidth: "var(--max-width)",
                        margin: "0 auto",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <span
                        style={{
                            fontFamily: "var(--font-dm-mono), monospace",
                            fontSize: 10,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "var(--braun-mid-grey)",
                        }}
                    >
                        Collection Korndörfer
                    </span>
                    <span
                        style={{
                            fontFamily: "var(--font-dm-mono), monospace",
                            fontSize: 10,
                            letterSpacing: "0.1em",
                            fontStyle: "italic",
                            color: "var(--braun-mid-grey)",
                        }}
                    >
                        Weniger, aber besser.
                    </span>
                </footer>
            </main>

            <style>{`
        a:hover .card-image { opacity: 0.82; }
        a:hover .card-name { color: var(--braun-dark-grey); }
      `}</style>
        </>
    );
}
