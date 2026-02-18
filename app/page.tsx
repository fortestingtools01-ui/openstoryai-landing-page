import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Open Story AI | 창의성 산업화 운영체제",
  description:
    "AI와 블록체인으로 스토리 IP의 생산, 검증, 확장, 유통을 통합 관리하는 창의성 산업화 플랫폼",
}

export default function Page() {
  return (
    <iframe
      src="/landing_v2.html"
      title="Open Story AI Landing Page"
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
        display: "block",
      }}
    />
  )
}
