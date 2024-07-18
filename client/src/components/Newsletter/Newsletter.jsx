import React from 'react'
import './Newsletter.css'
import { motion } from 'framer-motion'
const Newsletter = () => {
    return (
        <div className="newsletter" >
            <motion.h1
                initial={{ opacity: 1, y: 40 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.7 }}
            >Newsletter</motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.7 }}
            >Get timely updates from your favorite products.</motion.p>
            <motion.div className="form"
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.7 }}
            >
                <input type="text" placeholder="email address" />
                <button>Send</button>
            </motion.div>
        </div>
    )
}

export default Newsletter
