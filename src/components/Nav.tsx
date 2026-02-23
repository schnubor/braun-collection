import Link from "next/link";
import BraunLogo from "./BraunLogo";

export default function Nav() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: "var(--braun-white)",
      }}
    >
      <div
        className="nav-inner"
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          padding: "0 48px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <BraunLogo height={22} />
        </Link>

        <span
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: 10,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--braun-black)",
            fontWeight: 500,
          }}
        >
          Personal Collection
        </span>
      </div>
    </header>
  );
}
