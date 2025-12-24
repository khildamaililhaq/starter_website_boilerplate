import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-12 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help bring your vision to life.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}