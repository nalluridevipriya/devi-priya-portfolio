import { ImageResponse } from "next/og"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fbf5f1",
          color: "#2d2824",
          padding: "72px 78px",
          position: "relative",
          fontFamily: "Arial, sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(89, 62, 95, 0.18) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "-90px",
            top: "88px",
            width: "430px",
            height: "430px",
            borderRadius: "50%",
            background: "rgba(235, 226, 220, 0.92)",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: "18px" }}>
            <span
              style={{
                color: "#593e5f",
                fontSize: "25px",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              dP
            </span>
            <span
              style={{
                color: "#593e5f",
                fontSize: "34px",
                fontWeight: 800,
                letterSpacing: "-0.02em",
              }}
            >
              devi
            </span>
            <span
              style={{
                color: "#593e5f",
                fontSize: "18px",
                fontWeight: 700,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
              }}
            >
              Priya
            </span>
          </div>
          <div
            style={{
              border: "1px solid rgba(89, 62, 95, 0.22)",
              borderRadius: "999px",
              padding: "10px 18px",
              color: "#593e5f",
              fontSize: "22px",
              fontWeight: 700,
            }}
          >
            UX Portfolio
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "26px",
            maxWidth: "850px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "84px",
              lineHeight: 0.95,
              letterSpacing: "-0.045em",
              fontWeight: 700,
            }}
          >
            Devi Priya Nalluri
          </h1>
          <p
            style={{
              margin: 0,
              maxWidth: "760px",
              color: "#593e5f",
              fontSize: "32px",
              lineHeight: 1.35,
              fontWeight: 500,
            }}
          >
            Portfolio of Devi Priya — UX Designer creating user-centered
            experiences through research, strategy, interaction design, and
            prototyping.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "14px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {["UX Research", "Product Design", "Case Studies"].map((label) => (
            <span
              key={label}
              style={{
                border: "1px solid rgba(45, 40, 36, 0.12)",
                borderRadius: "999px",
                background: "rgba(255, 252, 250, 0.9)",
                padding: "12px 18px",
                color: "#45455d",
                fontSize: "22px",
                fontWeight: 700,
              }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    ),
    size
  )
}
