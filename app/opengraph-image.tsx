export const dynamic = "force-static";
import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} - ${siteConfig.claim}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "radial-gradient(circle at top left, rgba(255,237,209,0.72), transparent 28%), linear-gradient(180deg, #fbf8f3 0%, #f6f1e8 100%)",
          color: "#20293a",
          padding: "56px",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: "40px",
            border: "1px solid rgba(216, 223, 235, 0.9)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(255,255,255,0.88))",
            padding: "56px",
            boxShadow: "0 32px 90px -52px rgba(42,59,88,0.28)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
            }}
          >
            <div
              style={{
                display: "flex",
                height: "64px",
                width: "64px",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "22px",
                background: "linear-gradient(135deg, #5e8cdc 0%, #8cb4ff 100%)",
                color: "#ffffff",
                fontSize: "32px",
                fontWeight: 700,
              }}
            >
              R
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <div style={{ fontSize: "34px", fontWeight: 700 }}>
                {siteConfig.name}
              </div>
              <div
                style={{
                  fontSize: "20px",
                  color: "#667089",
                }}
              >
                Schnell rechnen, klar verstehen.
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              maxWidth: "860px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                borderRadius: "999px",
                background: "rgba(237,244,255,0.92)",
                color: "#5e8cdc",
                padding: "12px 20px",
                fontSize: "22px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Rechner &amp; Steuerhilfe
            </div>
            <div
              style={{
                fontSize: "74px",
                lineHeight: 1,
                fontWeight: 700,
                letterSpacing: "-0.06em",
              }}
            >
              {siteConfig.claim}
            </div>
            <div
              style={{
                fontSize: "30px",
                lineHeight: 1.4,
                color: "#667089",
              }}
            >
              Kostenlose Online-Rechner für Alltag, Schule und Geld. Klar
              erklärt, mobil optimiert und ohne Anmeldung.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
