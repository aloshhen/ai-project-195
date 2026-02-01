import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Heart, Star, Zap, Music, Camera, Sun, Moon, ChevronLeft, ChevronRight, Instagram, Youtube, Twitter, Mail } from 'lucide-react'

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const heroRef = useRef(null)
  const manifestoRef = useRef(null)
  const musicRef = useRef(null)
  const lifestyleRef = useRef(null)

  const isManifestoInView = useInView(manifestoRef, { once: true })
  const isMusicInView = useInView(musicRef, { once: true })
  const isLifestyleInView = useInView(lifestyleRef, { once: true })

  const artists = [
    { name: 'FreshFact', aka: 'Ромчик', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80', color: 'from-pink-500 to-purple-600' },
    { name: '9Mice', aka: '', image: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&q=80', color: 'from-fuchsia-500 to-pink-600' },
    { name: 'Lildrughill', aka: '', image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400&q=80', color: 'from-rose-500 to-pink-500' },
    { name: 'Timati', aka: '', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80', color: 'from-pink-600 to-red-500' },
    { name: 'Playboi Carti', aka: '', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80', color: 'from-fuchsia-600 to-pink-700' },
  ]

  const lifestyleSlides = [
    {
      title: 'Techno Rave Queen',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80',
      overlay: 'from-fuchsia-600/80 to-pink-600/80',
      text: 'Танцпол - мой храм',
      icon: Music
    },
    {
      title: 'Баня-Life',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
      overlay: 'from-pink-500/80 to-rose-400/80',
      text: 'Не вылезаю из парилки',
      icon: Sun
    },
    {
      title: 'Оман',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
      overlay: 'from-pink-400/80 to-fuchsia-500/80',
      text: 'Мой люкс-эскейп',
      icon: Camera
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % lifestyleSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + lifestyleSlides.length) % lifestyleSlides.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Pink Noise Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-fuchsia-600 to-pink-700 noise-bg"></div>
        
        {/* Animated Hearts */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300/30"
            initial={{ y: '100vh', x: Math.random() * window.innerWidth }}
            animate={{ 
              y: '-100vh',
              x: Math.random() * window.innerWidth,
              rotate: 360
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5
            }}
          >
            <Heart size={Math.random() * 30 + 20} fill="currentColor" />
          </motion.div>
        ))}

        {/* Main Content */}
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 
              className="font-gothic text-7xl md:text-9xl font-black mb-4 text-shadow-neon-pink glitch-text"
              data-text="KATYA GOLUBENKO"
            >
              KATYA GOLUBENKO
            </h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-pixel text-xl md:text-3xl text-pink-200 mb-8 tracking-wider"
            >
              Вайпер Оболони
            </motion.div>

            {/* Photo Slot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative w-64 h-64 md:w-96 md:h-96 mx-auto mb-12"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-fuchsia-600 rounded-full blur-2xl opacity-50 animate-pulse-slow"></div>
              <div className="relative w-full h-full rounded-full border-4 border-pink-300 neon-border overflow-hidden plastic-texture">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" 
                  alt="Katya" 
                  className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <Star className="text-pink-300 animate-pulse" size={32} fill="currentColor" />
              <Zap className="text-fuchsia-300 animate-pulse" size={32} fill="currentColor" />
              <Heart className="text-pink-400 animate-pulse" size={32} fill="currentColor" />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-pink-300 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-pink-300 rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* MANIFESTO SECTION */}
      <section ref={manifestoRef} className="relative py-20 px-6 bg-gradient-to-b from-black via-pink-950 to-black">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isManifestoInView ? 1 : 0, y: isManifestoInView ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-glitch text-5xl md:text-7xl text-center mb-16 text-pink-400 text-shadow-neon">
              МАНИФЕСТ
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: isManifestoInView ? 1 : 0, x: isManifestoInView ? 0 : -50 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-3xl blur-3xl opacity-40"></div>
                <div className="relative rounded-3xl overflow-hidden border-4 border-pink-400/50 neon-border plastic-texture">
                  <img 
                    src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80" 
                    alt="Katya Portrait" 
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: isManifestoInView ? 1 : 0, x: isManifestoInView ? 0 : 50 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="space-y-6"
              >
                <div className="bg-gradient-to-br from-pink-600/20 to-fuchsia-600/20 p-8 rounded-2xl border border-pink-400/30 plastic-texture">
                  <h3 className="font-gothic text-3xl md:text-4xl text-pink-300 mb-6">
                    Официальный амбассадор снюса в Праге
                  </h3>
                  
                  <div className="space-y-4 text-lg md:text-xl text-pink-100">
                    <p className="flex items-center gap-3">
                      <Star className="text-fuchsia-400 flex-shrink-0" size={24} fill="currentColor" />
                      <span className="font-bold">Родинка на лбу как знак качества</span>
                    </p>
                    
                    <p className="flex items-center gap-3">
                      <Zap className="text-pink-400 flex-shrink-0" size={24} fill="currentColor" />
                      <span className="font-bold">Пирсинг в пупке - моя религия</span>
                    </p>

                    <p className="flex items-center gap-3">
                      <Heart className="text-rose-400 flex-shrink-0" size={24} fill="currentColor" />
                      <span className="font-bold">Гламур встречает андеграунд</span>
                    </p>
                  </div>
                </div>

                <div className="font-pixel text-sm text-pink-300/70 text-center">
                  ★ LIVING MY BEST LIFE ★
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MUSIC SECTION */}
      <section ref={musicRef} className="relative py-20 px-6 bg-black">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isMusicInView ? 1 : 0, y: isMusicInView ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-creepy text-5xl md:text-7xl text-center mb-4 text-fuchsia-400 text-shadow-neon">
              На репите в моих AirPods
            </h2>
            
            <div className="text-center mb-16">
              <Music className="inline-block text-pink-400 animate-bounce" size={48} />
            </div>

            {/* Artists Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {artists.map((artist, index) => (
                <motion.div
                  key={artist.name}
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ 
                    opacity: isMusicInView ? 1 : 0, 
                    scale: isMusicInView ? 1 : 0.8,
                    rotate: isMusicInView ? 0 : -5
                  }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: Math.random() * 6 - 3,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${artist.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300`}></div>
                  
                  <div className="relative bg-gradient-to-br from-pink-900/40 to-fuchsia-900/40 rounded-2xl overflow-hidden border-2 border-pink-500/30 group-hover:border-pink-400 transition-all duration-300 plastic-texture">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={artist.image} 
                        alt={artist.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="p-4 bg-gradient-to-t from-black/90 to-transparent">
                      <h3 className="font-gothic text-lg md:text-xl text-pink-300 group-hover:text-fuchsia-300 transition-colors">
                        {artist.name}
                      </h3>
                      {artist.aka && (
                        <p className="font-pixel text-xs text-pink-400/70">
                          {artist.aka}
                        </p>
                      )}
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 to-pink-500/0 group-hover:from-fuchsia-500/20 group-hover:to-pink-500/20 transition-all duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* LIFESTYLE SECTION */}
      <section ref={lifestyleRef} className="relative py-20 px-6 bg-gradient-to-b from-black via-fuchsia-950 to-black overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isLifestyleInView ? 1 : 0, y: isLifestyleInView ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-glitch text-5xl md:text-7xl text-center mb-16 text-pink-400 text-shadow-neon">
              ЛАЙФСТАЙЛ & ВАЙБ
            </h2>

            {/* Slider */}
            <div className="relative">
              <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    {/* Background Image */}
                    <img 
                      src={lifestyleSlides[currentSlide].image}
                      alt={lifestyleSlides[currentSlide].title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${lifestyleSlides[currentSlide].overlay}`}></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mb-6"
                      >
                        {(() => {
                          const Icon = lifestyleSlides[currentSlide].icon
                          return <Icon size={80} className="text-white drop-shadow-2xl" />
                        })()}
                      </motion.div>

                      <motion.h3
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="font-gothic text-4xl md:text-6xl text-white mb-4 text-shadow-neon"
                      >
                        {lifestyleSlides[currentSlide].title}
                      </motion.h3>

                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="font-pixel text-lg md:text-2xl text-pink-100"
                      >
                        {lifestyleSlides[currentSlide].text}
                      </motion.p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-pink-600/80 hover:bg-pink-500 text-white p-3 rounded-full backdrop-blur-sm transition-all z-10 neon-border"
                >
                  <ChevronLeft size={32} />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-pink-600/80 hover:bg-pink-500 text-white p-3 rounded-full backdrop-blur-sm transition-all z-10 neon-border"
                >
                  <ChevronRight size={32} />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                  {lifestyleSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        currentSlide === index 
                          ? 'bg-pink-400 w-8 neon-border' 
                          : 'bg-pink-600/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-black to-pink-950">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-gothic text-5xl md:text-7xl mb-8 text-fuchsia-400 text-shadow-neon">
              ПОДПИСЫВАЙСЯ
            </h2>

            <p className="font-pixel text-lg md:text-xl text-pink-300 mb-12">
              ★ Следи за моими приключениями ★
            </p>

            {/* Neon Graffiti Social Icons */}
            <div className="flex justify-center gap-8 flex-wrap">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-fuchsia-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-pink-600 to-fuchsia-700 p-6 rounded-2xl border-4 border-pink-400 neon-border plastic-texture">
                  <Instagram size={48} className="text-white" />
                </div>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-fuchsia-600 to-pink-700 p-6 rounded-2xl border-4 border-fuchsia-400 neon-border plastic-texture">
                  <Youtube size={48} className="text-white" />
                </div>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-pink-600 to-rose-700 p-6 rounded-2xl border-4 border-pink-400 neon-border plastic-texture">
                  <Twitter size={48} className="text-white" />
                </div>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-fuchsia-600 to-pink-700 p-6 rounded-2xl border-4 border-fuchsia-400 neon-border plastic-texture">
                  <Mail size={48} className="text-white" />
                </div>
              </motion.a>
            </div>

            {/* Footer Text */}
            <div className="mt-16 font-pixel text-sm text-pink-400/70">
              <p>© 2024 KATYA GOLUBENKO</p>
              <p className="mt-2">Made with 💖 and chaos</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default App