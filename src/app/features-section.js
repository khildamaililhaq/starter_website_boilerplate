import { motion } from "framer-motion"
import Image from "next/image"

export function FeaturesSection() {
  const features = [
    {
      title: "Innovation First",
      description: "We stay ahead of the curve with the latest technologies and trends.",
      icon: "🚀",
      image: "/img/analytics_dashboard_with_charts_and_metrics.png",
      alt: "Analytics dashboard showing charts and metrics"
    },
    {
      title: "Expert Team",
      description: "Our experienced developers and designers deliver quality solutions.",
      icon: "👥",
      image: "/img/talent_management_system_interface.png",
      alt: "Talent management system interface"
    },
    {
      title: "Scalable Solutions",
      description: "Build applications that grow with your business needs.",
      icon: "📈",
      image: "/img/marketing_automation_tools_visualization.png",
      alt: "Marketing automation tools visualization"
    },
  ]

  return (
    <section className="py-12 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">Why Choose TechStart?</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine cutting-edge technology with proven methodologies to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-card p-4 md:p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-32 md:h-40 mb-4 md:mb-6 rounded-lg overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-3xl md:text-4xl mb-2 md:mb-4">{feature.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">{feature.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}