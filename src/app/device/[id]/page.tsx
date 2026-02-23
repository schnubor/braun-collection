import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import DeviceGallery from "@/components/DeviceGallery";
import { collection, getDevice, conditionLabel, formatAcquired } from "@/lib/collection";

export function generateStaticParams() {
  return collection.map((d) => ({ id: d.id }));
}

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

const conditionDots: Record<string, number> = {
  mint: 5,
  excellent: 4,
  good: 3,
  fair: 2,
};

export default async function DevicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const device = getDevice(id);
  if (!device) notFound();

  const dots = conditionDots[device.condition] ?? 3;

  return (
    <>
      <Nav />

      <main style={{ paddingTop: 64 }}>
        {/* Back breadcrumb */}
        <div
          className="breadcrumb"
          style={{
            maxWidth: "var(--max-width)",
            margin: "0 auto",
            padding: "0 48px",
            paddingTop: 32,
            paddingBottom: 32,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 10,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--braun-mid-grey)",
              textDecoration: "none",
              transition: "color 160ms ease",
            }}
            className="back-link"
          >
            ← Collection
          </Link>
          <span
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 10,
              color: "var(--braun-rule)",
            }}
          >
            /
          </span>
          <span
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: 10,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--braun-black)",
            }}
          >
            {device.model}
          </span>
        </div>

        {/* Page header */}
        <section
          className="page-section"
          style={{
            maxWidth: "var(--max-width)",
            margin: "0 auto",
            padding: "64px 48px 56px",
          }}
        >
          <div className="fade-up">
            <div
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 10,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--braun-mid-grey)",
                marginBottom: 20,
                display: "flex",
                gap: 24,
              }}
            >
              <span>{categoryLabels[device.category]}</span>
              <span style={{ color: "var(--braun-rule)" }}>·</span>
              <span>{device.year}</span>
            </div>
            <h1
              style={{
                fontSize: "clamp(40px, 6vw, 88px)",
                fontWeight: 400,
                letterSpacing: "-0.04em",
                lineHeight: 0.95,
                color: "var(--braun-black)",
              }}
            >
              {device.name}
            </h1>
          </div>
        </section>

        {/* Main content */}
        <section
          className="page-section"
          style={{
            maxWidth: "var(--max-width)",
            margin: "0 auto",
            padding: "0 48px",
          }}
        >
          <div
            className="detail-content-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 0,
            }}
          >
            {/* Left: Image */}
            <div
              className="detail-image-col"
              style={{
                paddingTop: 64,
                paddingBottom: 64,
                paddingRight: 64,
              }}
            >
              <DeviceGallery images={device.images} name={device.name} />
            </div>

            {/* Right: Info */}
            <div
              className="detail-info-col"
              style={{
                paddingTop: 64,
                paddingBottom: 64,
                paddingLeft: 64,
                display: "flex",
                flexDirection: "column",
                gap: 0,
              }}
            >
              {/* Condition + Designer */}
              <div
                className="fade-up"
                style={{ marginBottom: 48, animationDelay: "100ms", display: "flex", gap: 48 }}
              >
                {/* Condition indicator */}
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 10,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--braun-mid-grey)",
                      marginBottom: 10,
                    }}
                  >
                    Condition
                  </div>
                  <div style={{ display: "flex", gap: 5, alignItems: "center", marginBottom: 8 }}>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        style={{
                          width: 28,
                          height: 3,
                          backgroundColor: i <= dots ? "var(--braun-black)" : "var(--braun-rule)",
                          transition: "background-color 200ms ease",
                        }}
                      />
                    ))}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 11,
                      letterSpacing: "0.08em",
                      color: "var(--braun-dark-grey)",
                    }}
                  >
                    {conditionLabel(device.condition)}
                  </div>
                </div>

                {/* Designer */}
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: 10,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--braun-mid-grey)",
                      marginBottom: 6,
                    }}
                  >
                    Designer
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 400,
                      color: "var(--braun-black)",
                    }}
                  >
                    {device.designer}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div
                className="fade-up"
                style={{ marginBottom: 48, animationDelay: "120ms" }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--braun-mid-grey)",
                    marginBottom: 16,
                  }}
                >
                  About
                </div>
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 400,
                    lineHeight: 1.75,
                    color: "var(--braun-dark-grey)",
                  }}
                >
                  {device.description}
                </p>
              </div>

              {/* Provenance */}
              <div
                className="fade-up"
                style={{ marginBottom: 40, animationDelay: "160ms" }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--braun-mid-grey)",
                    marginBottom: 16,
                  }}
                >
                  Provenance
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px 24px",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: 10,
                        letterSpacing: "0.08em",
                        color: "var(--braun-rule)",
                        marginBottom: 4,
                        textTransform: "uppercase",
                      }}
                    >
                      Acquired
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 400,
                        color: "var(--braun-dark-grey)",
                      }}
                    >
                      {formatAcquired(device.acquired)}
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: 10,
                        letterSpacing: "0.08em",
                        color: "var(--braun-rule)",
                        marginBottom: 4,
                        textTransform: "uppercase",
                      }}
                    >
                      Source
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 400,
                        color: "var(--braun-dark-grey)",
                      }}
                    >
                      {device.acquiredFrom}
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical specs */}
              <div className="fade-up" style={{ animationDelay: "200ms" }}>
                <div
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--braun-mid-grey)",
                    marginBottom: 16,
                  }}
                >
                  Technical Specifications
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {device.specs.map((spec, i) => (
                    <div
                      key={spec.label}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "140px 1fr",
                        gap: 16,
                        padding: "12px 0",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-dm-mono), monospace",
                          fontSize: 10,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "var(--braun-mid-grey)",
                          paddingTop: 2,
                        }}
                      >
                        {spec.label}
                      </div>
                      <div
                        style={{
                          fontSize: 14,
                          fontWeight: 400,
                          color: "var(--braun-dark-grey)",
                        }}
                      >
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
        .back-link:hover {
          color: var(--braun-black) !important;
        }
      `}</style>
    </>
  );
}
