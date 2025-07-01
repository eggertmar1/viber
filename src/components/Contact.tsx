import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
    
    // Show success message (you can implement a toast notification here)
    alert('Message sent successfully!')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'eggertmar@gmail.com',
      link: 'mailto:eggertmar@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+354 844 9496',
      link: 'tel:+358449496'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Reykjavik, Iceland',
      link: '#'
    }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/eggertmar1', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/eggertmar/', label: 'LinkedIn' },
  ]

  return (
    <section id="contact" className="py-20 relative min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start a project or just want to chat? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="flex flex-col items-center justify-center w-full min-h-[40vh] gap-10">
          {/* Contact Info Cards */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex flex-col items-center p-6 glass-effect rounded-xl hover:bg-primary-500/10 transition-colors duration-200 min-w-[220px] text-center"
              >
                <div className="p-3 bg-primary-500/20 rounded-full mb-3">
                  <info.icon size={32} className="text-primary-400" />
                </div>
                <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                <p className="text-gray-400 text-base break-all">{info.value}</p>
              </motion.a>
            ))}
          </div>

          {/* Social Links Row */}
          <div className="flex space-x-6 justify-center mt-2">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 bg-dark-800 rounded-lg hover:bg-primary-500 transition-colors duration-200"
              >
                <social.icon size={28} className="text-primary-400" />
              </motion.a>
            ))}
          </div>

          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-effect rounded-lg p-4 flex items-center gap-3 mt-6"
          >
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
            <span className="text-yellow-400 text-base font-medium">Currently available for part time work</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 