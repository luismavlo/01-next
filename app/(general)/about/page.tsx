import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About description",
  keywords: ["About Page", "Luis Miguel", "Información", "..."],
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About Page</span>
    </>
  );
}
