'use client'

import { useEffect, useRef, useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaTwitter, FaTelegramPlane } from 'react-icons/fa'
import { Users, TrendingUp, Shield, Construction } from 'lucide-react'

const ComingSoonButton = () => {
  return (
    <Link 
      href="https://app.twyne.xyz"
      className="
        px-6 py-2 font-medium rounded-full relative overflow-hidden
        bg-white text-purple-600 border border-purple-600
        transition-all duration-300 ease-in-out
        hover:bg-purple-600 hover:text-white
        group inline-flex items-center justify-center
      "
      aria-label="Launch App (Coming Soon)"
    >
      <span className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">
        Launch App
      </span>
      <span 
        className="
          absolute inset-0 opacity-0
          group-hover:opacity-100 transition-opacity duration-300 ease-in-out
          flex items-center justify-center font-bold
        "
      >
        <Construction className="w-4 h-4 mr-2" />
        Try Demo
      </span>
    </Link>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
}

export default function LandingPage() {
  const circle1Ref = useRef<HTMLDivElement>(null)
  const circle2Ref = useRef<HTMLDivElement>(null)
  const [currentProtocol, setCurrentProtocol] = useState(0)
  const protocols = useMemo(() => ['Aave', 'Morpho', 'Euler', 'Cross Market Lending'], [])

  useEffect(() => {
    const animate = () => {
      if (circle1Ref.current && circle2Ref.current) {
        const time = Date.now() / 1000
        const amplitude = 200
        const translateY1 = Math.sin(time * 0.5) * amplitude
        const translateX1 = Math.cos(time * 0.5) * amplitude
        const translateY2 = Math.sin(time * 0.5 + Math.PI) * amplitude
        const translateX2 = Math.cos(time * 0.5 + Math.PI) * amplitude
        circle1Ref.current.style.transform = `translate(${translateX1}px, ${translateY1}px)`
        circle2Ref.current.style.transform = `translate(${translateX2}px, ${translateY2}px)`
      }
      requestAnimationFrame(animate)
    }
    animate()
  
    const intervalId = setInterval(() => {
      setCurrentProtocol((prev) => (prev + 1) % protocols.length)
    }, 2000)
  
    return () => {
      clearInterval(intervalId)
    }
  }, [protocols])

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden bg-white text-gray-800">
      {/* Animated Circles */}
      <div
        ref={circle1Ref}
        className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-300 opacity-30 blur-3xl"
        style={{ transition: 'transform 0.5s ease-out' }}
        aria-hidden="true"
      />
      <div
        ref={circle2Ref}
        className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-200 opacity-30 blur-3xl"
        style={{ transition: 'transform 0.5s ease-out' }}
        aria-hidden="true"
      />
      
      {/* Header */}
      <header className="relative z-10 px-4 lg:px-6 h-16 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="/logo.png"
            alt="Twyne Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="ml-2 text-2xl font-bold text-black">Twyne</span>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link 
            href="https://docs.twyne.xyz" 
            className="text-gray-600 hover:text-gray-900 font-medium py-2"
          >
            Documentation
          </Link>
          <ComingSoonButton />
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative z-10 flex-1 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-lg md:text-xl text-purple-600 mb-4">
            Earn, Borrow and Liquidate
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 text-gray-900">
            Unlocking
            <br />
            <span className="relative inline-block h-[1.2em] w-full overflow-hidden">
              {protocols.map((protocol, index) => (
                <span
                  key={protocol}
                  className="absolute inset-0 w-full flex items-center justify-center transition-all duration-300 ease-in-out"
                  style={{
                    opacity: currentProtocol === index ? 1 : 0,
                    transform: `translateY(${(index - currentProtocol) * 100}%)`,
                  }}
                >
                  {protocol}
                </span>
              ))}
            </span>
          </h1>
          <p className="text-md md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Connecting Lending Markets through a Credit-Layer
          </p>
          <div className="flex flex-col items-center justify-center space-y-4"> 
            <div className="flex justify-center space-x-4">
              <a href="https://twitter.com/twyne_xyz" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-purple-600 hover:text-purple-700 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="https://t.me/taulantx" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-purple-600 hover:text-purple-700 transition-colors">
                <FaTelegramPlane size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 min-h-screen bg-gradient-to-b from-white to-purple-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Structuring DeFi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Twyne is an advanced Lending Market integration that introduces flexible loan terms through a division of roles:
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              { icon: Users, title: "Lenders", description: "Give up borrowing power for more yield", benefits: ["Restake to earn dual rewards", "Aave deposit rates", "Twyne credit delegation rates"] },
              { icon: TrendingUp, title: "Borrowers", description: "Give up yield for more borrowing power", benefits: ["Use Aave, but better", "Boost borrowing power of Aave collateral", "Use more tokens as collateral"] },
              { icon: Shield, title: "Liquidators", description: "Earn yield for securing the protocol", benefits: ["Buy assets at a Discount", "Liquidate without a technical setup", "Earn dual rewards & liquidation incentive"] }
            ].map((item) => (
              <motion.div
                key={item.title}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
              >
                <div className="flex items-center mb-4">
                  <item.icon className="h-8 w-8 text-purple-600 mr-3" aria-hidden="true" />
                  <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 text-lg">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="h-6 w-6 flex items-center justify-center bg-purple-100 rounded-full mr-2 mt-1">
                        <span className="text-purple-600 text-sm">✓</span>
                      </span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
          
          <p className="text-center text-gray-600 mt-12 text-lg max-w-3xl mx-auto">
            Our segmented approach optimizes performance, enhances resilience, and maximizes value creation, unlike traditional one-size-fits-all offerings.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative z-10 min-h-screen bg-gradient-to-b from-purple-50 to-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">How It Works</h2>

          {/* Big Image */}
          <div className="mb-16">
            <Image
              src="/how-it-works.svg"
              alt="How Twyne Works"
              width={800}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <p className="text-center text-gray-600 mt-12 text-lg">
            These functionalities are fully permissionless built on top, requiring no governance votes or changes within the Aave protocol, ensuring a seamless and efficient user experience.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Twyne Labs. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  )
}