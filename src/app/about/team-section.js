import { motion } from "framer-motion"

export function TeamSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">Meet Our Team</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            The talented individuals behind TechStart's success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              name: "Alex Johnson",
              role: "CEO & Founder",
              bio: "Visionary leader with 15+ years in tech innovation.",
              avatar: "👨‍💼",
            },
            {
              name: "Sarah Chen",
              role: "CTO",
              bio: "Expert in scalable architecture and emerging technologies.",
              avatar: "👩‍💻",
            },
            {
              name: "Mike Rodriguez",
              role: "Lead Developer",
              bio: "Full-stack wizard passionate about clean, efficient code.",
              avatar: "👨‍💻",
            },
          ].map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-card p-4 md:p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="text-4xl md:text-6xl mb-2 md:mb-4">{member.avatar}</div>
              <h3 className="text-lg md:text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-primary font-medium mb-2 md:mb-3">{member.role}</p>
              <p className="text-sm md:text-base text-muted-foreground">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}