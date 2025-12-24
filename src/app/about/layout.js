export const metadata = {
  title: "About Us",
  description: "Learn about our mission, values, and the talented team behind our innovative technology solutions.",
  keywords: ["about", "mission", "values", "team", "company"],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | Modern Tech Startup",
    description: "Learn about our mission, values, and the talented team behind our innovative technology solutions.",
    url: "/about",
    type: "website",
  },
}

export default function AboutLayout({ children }) {
  return children
}