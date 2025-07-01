import { motion } from 'framer-motion'
import { Code, Database, Cloud, Wrench, Monitor, Layers } from 'lucide-react'

const skillGroups = [
  {
    title: 'Languages',
    icon: Code,
    skills: [
      'Java (robust backend systems)',
      'Python (data pipelines & APIs)',
      'Go (concurrent services, CLI tools)',
      'TypeScript (typed frontend logic)',
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Layers,
    skills: [
      'Spring Boot (enterprise-grade microservices)',
      'FastAPI (lightweight async APIs)',
      'React (component-driven UIs)',
      'GraphQL (declarative data fetching)',
      'gRPC (high-performance service communication)',
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: [
      'PostgreSQL (relational workhorse)',
      'MySQL (classic LAMP stack support)',
      'DynamoDB (scalable NoSQL on AWS)',
    ],
  },
  {
    title: 'Cloud & Messaging',
    icon: Cloud,
    skills: [
      'Google Cloud Platform (Cloud Run, Pub/Sub, IAM)',
      'AWS (selective services like S3, Lambda)',
      'Cloud-native event-driven design',
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: Wrench,
    skills: [
      'Docker (containerized environments)',
      'CI/CD Pipelines (automated testing & deployment)',
      'Microservices Architecture (modular & scalable)',
      'Observability (logs, metrics, tracing)',
    ],
  },
  {
    title: 'Frontend',
    icon: Monitor,
    skills: [
      'React (hooks, context, custom components)',
      'HTML & CSS (responsive layouts, modern semantics)',
      'TypeScript (typed interfaces & prop contracts)',
    ],
  },
]


const Skills = () => (
  <section id="skills" className="py-20 relative">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-4"></div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A factual list of technologies and tools I have real-world experience with.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="glass-effect rounded-xl p-6 flex flex-col"
          >
            <div className="flex items-center mb-4">
              <group.icon className="text-primary-400 mr-3" size={28} />
              <h3 className="text-lg font-bold text-white">{group.title}</h3>
            </div>
            <ul className="text-gray-300 text-base space-y-1 pl-1">
              {group.skills.map(skill => (
                <li key={skill} className="flex items-center">
                  <span className="w-2 h-2 bg-primary-400 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default Skills 