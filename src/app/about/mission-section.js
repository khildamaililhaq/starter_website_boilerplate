import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function MissionSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Our Mission</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.
            </p>
            <p className="text-muted-foreground">
              Founded in 2020, TechStart has been at the forefront of technological innovation, helping companies of all sizes navigate the complex digital landscape and achieve their goals through tailored software solutions.
            </p>
            <Button asChild className="mt-4">
              <Link href="/contact">Work With Us</Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              <Image
                src="/img/multi-platform_streaming_hub_illustration.png"
                alt="Multi-platform streaming hub illustration showing connected technology solutions"
                width={400}
                height={300}
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}