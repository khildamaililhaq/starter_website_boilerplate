import { motion } from "framer-motion"

export function ValuesSection() {
  return (
    <section className="py-12 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">Our Values</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do and shape our approach to innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              title: "Innovation",
              description: "We embrace new technologies and creative solutions to solve complex problems.",
              icon: "💡",
            },
            {
              title: "Excellence",
              description: "We strive for the highest quality in everything we deliver.",
              icon: "⭐",
            },
            {
              title: "Collaboration",
              description: "We believe in the power of teamwork and open communication.",
              icon: "🤝",
            },
            {
              title: "Integrity",
              description: "We conduct business with honesty, transparency, and ethical practices.",
              icon: "🛡️",
            },
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-card p-4 md:p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="text-3xl md:text-4xl mb-2 md:mb-4">{value.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">{value.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}