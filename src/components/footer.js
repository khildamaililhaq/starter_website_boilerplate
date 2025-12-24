import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="border-t bg-background"
    >
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">TechStart</h3>
            <p className="text-sm text-muted-foreground">
              Innovative solutions for modern businesses. Building the future, one line of code at a time.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-muted-foreground">Web Development</span></li>
              <li><span className="text-muted-foreground">Mobile Apps</span></li>
              <li><span className="text-muted-foreground">AI Solutions</span></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-muted-foreground">LinkedIn</span></li>
              <li><span className="text-muted-foreground">Twitter</span></li>
              <li><span className="text-muted-foreground">GitHub</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 TechStart. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  )
}