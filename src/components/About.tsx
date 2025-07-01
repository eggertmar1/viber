import { motion } from 'framer-motion'
import { User, MapPin, Calendar, Mail, Github, Linkedin, Heart, Code } from 'lucide-react'

const About = () => {
  const stats = [
    { label: 'Backend Experience', value: '3+ Years' },
    { label: 'Main Stack', value: 'Java, Python, Spring Boot' },
    { label: 'Industry', value: 'Healthcare Tech' },
    { label: 'Philosophy', value: 'Simplicity & Scalability' },
  ]

  const info = [
    { icon: MapPin, label: 'Location', value: 'Reykjavík, Iceland' },
    { icon: Calendar, label: 'Experience', value: '3+ Years' },
    { icon: Mail, label: 'Email', value: 'eggertmar@gmail.com' },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image and info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile image placeholder */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-primary-600 p-1">
                <div className="w-full h-full rounded-full bg-dark-800 flex items-center justify-center">
                  <User size={120} className="text-primary-400" />
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full"
              />
            </div>

            {/* Personal info */}
            <div className="space-y-4">
              {info.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <item.icon size={20} className="text-primary-400" />
                  <span className="font-medium">{item.label}:</span>
                  <span>{item.value}</span>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex justify-center space-x-4">
              <motion.a
                href="https://github.com/eggertmar1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-dark-800 rounded-lg hover:bg-primary-500 transition-colors duration-200"
              >
                <Github size={24} className="text-primary-400" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/eggertmar/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-dark-800 rounded-lg hover:bg-primary-500 transition-colors duration-200"
              >
                <Linkedin size={24} className="text-primary-400" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Backend Developer at Sidekick Health
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Originally from Egilsstaðir in East Iceland, I now call Reykjavík home. 
                I'm passionate about building production-ready software that prioritizes 
                simplicity over complexity, making systems scalable and easy to debug.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                At Sidekick Health, I work on healthcare technology solutions using Java 
                microservices and Python APIs. My approach focuses on clean, maintainable 
                code that can scale with the needs of healthcare applications serving 
                millions of users.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                When I'm not coding, you'll find me working out and maintaining a healthy lifestyle. 
                I believe that physical fitness and mental clarity go hand in hand with 
                writing quality software.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                FYI This website is completely vibe coded, including some of the text, so if you see any bugs, I'm not to blame. Experience and technical skills are factually correct.
              </p>
            </div>
          

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 glass-effect rounded-lg"
                >
                  <div className="text-lg font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 