import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award, Globe } from 'lucide-react'

const experience = [
  {
    title: 'Software Developer',
    company: 'Sidekick Health',
    location: 'Reykjavík, Iceland',
    period: 'June 2024 – Present',
    bullets: [
      'Backend development using Java, Spring Boot, and Python',
      'Contributed to leading the team in successful BSI submission, to achieve certification for Diga market entry',
      'Contribute to AI projects and implemented testing framework for AI projects',
      'Collaborate with cross-functional teams to deliver healthcare technology solutions',
      'Maintain and optimize PostgreSQL and MySQL database systems',
    ],
  },
  {
    title: 'Associate Software Developer',
    company: 'Sidekick Health',
    location: 'Reykjavík, Iceland',
    period: 'Dec 2023 – June 2024',
    bullets: [
      'Developed and maintained backend services using Java and Spring Boot',
      'Worked with PostgreSQL and MySQL databases for data management',
      'Participated in code reviews and technical discussions',
      'Assisted in testing and quality assurance processes',
    ],
  },
  {
    title: 'QA Engineer',
    company: 'Sidekick Health',
    location: 'Reykjavík, Iceland',
    period: 'May 2022 – Dec 2023',
    bullets: [
      'Developed and maintained custom test engine for testing Sidekicks Program Engine',
      'Implemented test automation for Sidekicks Web applications',
      'Participated in code reviews and technical discussions',
    ],
  },
]

const education = {
  degree: "Bachelor's Degree in Computer Software Engineering",
  school: 'Reykjavik University',
  location: 'Reykjavík, Iceland',
  period: '2019 – June 2022',
}

const certifications = [
  {
    name: 'ISTQB® Foundation Level',
    issuer: 'International Software Testing Qualifications Board',
    date: 'March 2023',
    id: '2023-CTFL-0005-ICE',
  },
]

const languages = [
  { name: 'Icelandic', level: 'Native' },
  { name: 'English', level: 'Fluent' },
]

const Experience = () => (
  <section id="experience" className="py-20 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Professional <span className="gradient-text">Experience</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-4"></div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A summary of my work experience, education, certifications, and language skills.
        </p>
      </motion.div>

      {/* Experience Timeline */}
      <div className="relative border-l-2 border-primary-700/30 ml-4 mb-16">
        {experience.map((role, idx) => (
          <motion.div
            key={role.title + role.period}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="mb-12 ml-8 relative"
          >
            <div className="absolute -left-6 top-2 bg-primary-500 rounded-full w-6 h-6 flex items-center justify-center">
              <Briefcase className="text-white" size={18} />
            </div>
            <div className="glass-effect rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-white">{role.title}</h3>
                  <span className="text-primary-400 font-semibold">{role.company}</span>
                  <span className="text-gray-400 ml-2">{role.location}</span>
                </div>
                <span className="text-gray-400 text-sm mt-2 md:mt-0">{role.period}</span>
              </div>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                {role.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education & Certifications */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-effect rounded-xl p-6 flex flex-col items-start"
        >
          <div className="flex items-center mb-4">
            <GraduationCap className="text-primary-400 mr-3" size={28} />
            <h3 className="text-lg font-bold text-white">Education</h3>
          </div>
          <div>
            <div className="font-semibold text-white">{education.degree}</div>
            <div className="text-primary-400">{education.school}</div>
            <div className="text-gray-400">{education.location}</div>
            <div className="text-gray-400 text-sm">{education.period}</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="glass-effect rounded-xl p-6 flex flex-col items-start"
        >
          <div className="flex items-center mb-4">
            <Award className="text-primary-400 mr-3" size={28} />
            <h3 className="text-lg font-bold text-white">Certifications</h3>
          </div>
          {certifications.map(cert => (
            <div key={cert.id} className="mb-2">
              <div className="font-semibold text-white">{cert.name}</div>
              <div className="text-primary-400">{cert.issuer}</div>
              <div className="text-gray-400 text-sm">{cert.date} | ID: {cert.id}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Languages */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="glass-effect rounded-xl p-6 flex flex-col items-start max-w-md mx-auto"
      >
        <div className="flex items-center mb-4">
          <Globe className="text-primary-400 mr-3" size={28} />
          <h3 className="text-lg font-bold text-white">Languages</h3>
        </div>
        <ul className="text-gray-300">
          {languages.map(lang => (
            <li key={lang.name} className="mb-1">
              <span className="font-semibold text-white">{lang.name}:</span> {lang.level}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
)

export default Experience