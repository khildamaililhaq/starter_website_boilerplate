import { motion } from "framer-motion"

export function FAQSection() {
  return (
    <section className="py-12 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">Frequently Asked Questions</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Quick answers to common questions about our services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {[
            {
              question: "How long does a typical project take?",
              answer: "Project timelines vary based on complexity, but most web applications take 4-12 weeks from start to finish.",
            },
            {
              question: "Do you provide ongoing support?",
              answer: "Yes, we offer maintenance packages and ongoing support to ensure your application continues to perform optimally.",
            },
            {
              question: "What technologies do you specialize in?",
              answer: "We work with modern web technologies including React, Next.js, Node.js, Python, and cloud platforms like AWS and Vercel.",
            },
            {
              question: "How do you handle project pricing?",
              answer: "We provide detailed quotes based on project requirements. Contact us for a free consultation and estimate.",
            },
          ].map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-card p-4 md:p-6 rounded-lg border shadow-sm"
            >
              <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">{faq.question}</h3>
              <p className="text-sm md:text-base text-muted-foreground">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}