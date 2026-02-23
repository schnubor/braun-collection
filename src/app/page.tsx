import Nav from "@/components/Nav";
import CollectionGrid from "@/components/CollectionGrid";
import { collection } from "@/lib/collection";

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
                            of the Braun Design. {collection.length} pieces —
                            each chosen for its honesty of form and the clarity
                            of its purpose.
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
                                    {Math.min(...collection.map((d) => d.year))}{" "}
                                    –{" "}
                                    {Math.max(...collection.map((d) => d.year))}
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
                    <CollectionGrid />
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
        </>
    );
}
