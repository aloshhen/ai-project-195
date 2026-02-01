import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Heart, Star, Zap, Music, Camera, Sun, ChevronLeft, ChevronRight, Instagram } from 'lucide-react'

function App() {
  const [loading, setLoading] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)
  const heroRef = useRef(null)
  const manifestoRef = useRef(null)
  const musicRef = useRef(null)
  const lifestyleRef = useRef(null)

  const isManifestoInView = useInView(manifestoRef, { once: true, margin: "-100px" })
  const isMusicInView = useInView(musicRef, { once: true, margin: "-100px" })
  const isLifestyleInView = useInView(lifestyleRef, { once: true, margin: "-100px" })

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

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
      title: 'На спецоперации в Омане',
      image: 'https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/edit-photo-1769985702.jpg?',
      overlay: 'from-pink-400/80 to-fuchsia-500/80',
      text: 'Мой люкс-эскейп',
      icon: Camera
    },
    {
      title: 'Магшот',
      image: 'https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/edit-photo-1769985714.jpg?',
      overlay: 'from-pink-500/80 to-rose-400/80',
      text: 'Стиль и дерзость',
      icon: Star
    },
    {
      title: 'Настраиваю живот на правильную работу',
      image: 'https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/edit-photo-1769985726.jpg?',
      overlay: 'from-pink-500/80 to-rose-400/80',
      text: 'Не вылезаю из парилки',
      icon: Sun
    },
    {
      title: 'Никак сопли не пройдут',
      image: 'https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/edit-photo-1769985734.jpg?',
      overlay: 'from-fuchsia-500/80 to-pink-600/80',
      text: 'Баня-Life',
      icon: Heart
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % lifestyleSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + lifestyleSlides.length) % lifestyleSlides.length)
  }

  useEffect(() => {
    if (!loading) {
      const interval = setInterval(nextSlide, 5000)
      return () => clearInterval(interval)
    }
  }, [loading])

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center px-4">
          <div className="mb-6 md:mb-8">
            <img 
              src="https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/edit-animation-1769986065.MOV?" 
              alt="Loading" 
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 mx-auto rounded-full object-cover border-4 border-pink-500 neon-border"
            />
          </div>
          <h2 className="font-gothic text-3xl sm:text-4xl md:text-6xl text-pink-400 text-shadow-neon mb-4">
            Разминаю шею
          </h2>
          <div className="flex justify-center gap-2">
            <motion.div
              className="w-2 h-2 md:w-3 md:h-3 bg-pink-500 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0 }}
            />
            <motion.div
              className="w-2 h-2 md:w-3 md:h-3 bg-fuchsia-500 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
            />
            <motion.div
              className="w-2 h-2 md:w-3 md:h-3 bg-pink-400 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Pink Noise Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-fuchsia-600 to-pink-700 noise-bg"></div>
        
        {/* Animated Hearts */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300/30 hidden md:block"
            initial={{ y: '100vh', x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000) }}
            animate={{ 
              y: '-100vh',
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
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
        <div className="relative z-10 text-center px-4 sm:px-6 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 
              className="font-gothic text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black mb-4 text-shadow-neon-pink glitch-text leading-tight"
              data-text="KATYA GOLUBENKO"
            >
              KATYA GOLUBENKO
            </h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-pixel text-sm sm:text-lg md:text-2xl lg:text-3xl text-pink-200 mb-6 md:mb-8 tracking-wider"
            >
              Вайпер Оболони
            </motion.div>

            {/* Photo Slot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto mb-8 md:mb-12"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-fuchsia-600 rounded-full blur-2xl opacity-50 animate-pulse-slow"></div>
              <div className="relative w-full h-full rounded-full border-2 md:border-4 border-pink-300 neon-border overflow-hidden plastic-texture">
                <img 
                  src="https://oejgkvftpbinliuopipr.supabase.co/storage/v1/object/public/assets/user_347995964/edit-photo-1769985748.jpg?" 
                  alt="Katya" 
                  className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex gap-3 md:gap-4 justify-center flex-wrap"
            >
              <Star className="text-pink-300 animate-pulse" size={24} fill="currentColor" />
              <Zap className="text-fuchsia-300 animate-pulse" size={24} fill="currentColor" />
              <Heart className="text-pink-400 animate-pulse" size={24} fill="currentColor" />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-pink-300 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-1 md:w-1.5 md:h-1.5 bg-pink-300 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* MANIFESTO SECTION */}
      <section ref={manifestoRef} className="relative py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-black via-pink-950 to-black">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isManifestoInView ? 1 : 0, y: isManifestoInView ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-glitch text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center mb-8 md:mb-16 text-pink-400 text-shadow-neon">
              МАНИФЕСТ
            </h2>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: isManifestoInView ? 1 : 0, x: isManifestoInView ? 0 : -50 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-2xl md:rounded-3xl blur-2xl md:blur-3xl opacity-40"></div>
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border-2 md:border-4 border-pink-400/50 neon-border plastic-texture">
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
                className="space-y-4 md:space-y-6"
              >
                <div className="bg-gradient-to-br from-pink-600/20 to-fuchsia-600/20 p-5 md:p-8 rounded-xl md:rounded-2xl border border-pink-400/30 plastic-texture">
                  <h3 className="font-gothic text-xl sm:text-2xl md:text-3xl lg:text-4xl text-pink-300 mb-4 md:mb-6 leading-tight">
                    Официальный амбассадор снюса в Праге
                  </h3>
                  
                  <div className="space-y-3 md:space-y-4 text-base sm:text-lg md:text-xl text-pink-100">
                    <p className="flex items-center gap-2 md:gap-3">
                      <Star className="text-fuchsia-400 flex-shrink-0" size={20} fill="currentColor" />
                      <span className="font-bold">Родинка на лбу как знак качества</span>
                    </p>
                    
                    <p className="flex items-center gap-2 md:gap-3">
                      <Zap className="text-pink-400 flex-shrink-0" size={20} fill="currentColor" />
                      <span className="font-bold">Пирсинг в пупке - моя религия</span>
                    </p>

                    <p className="flex items-center gap-2 md:gap-3">
                      <Heart className="text-rose-400 flex-shrink-0" size={20} fill="currentColor" />
                      <span className="font-bold">Гламур встречает андеграунд</span>
                    </p>
                  </div>
                </div>

                <div className="font-pixel text-xs md:text-sm text-pink-300/70 text-center">
                  ★ LIVING MY BEST LIFE ★
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MUSIC SECTION */}
      <section ref={musicRef} className="relative py-12 md:py-20 px-4 sm:px-6 bg-black">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isMusicInView ? 1 : 0, y: isMusicInView ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-creepy text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center mb-3 md:mb-4 text-fuchsia-400 text-shadow-neon leading-tight">
              На репите в моих AirPods
            </h2>
            
            <div className="text-center mb-8 md:mb-16">
              <Music className="inline-block text-pink-400 animate-bounce" size={36} />
            </div>

            {/* Artists Gallery */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
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
                  <div className={`absolute inset-0 bg-gradient-to-br ${artist.color} rounded-xl md:rounded-2xl blur-lg md:blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300`}></div>
                  
                  <div className="relative bg-gradient-to-br from-pink-900/40 to-fuchsia-900/40 rounded-xl md:rounded-2xl overflow-hidden border border-pink-500/30 group-hover:border-pink-400 transition-all duration-300 plastic-texture">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={artist.image} 
                        alt={artist.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="p-2 sm:p-3 md:p-4 bg-gradient-to-t from-black/90 to-transparent">
                      <h3 className="font-gothic text-sm sm:text-base md:text-lg lg:text-xl text-pink-300 group-hover:text-fuchsia-300 transition-colors leading-tight">
                        {artist.name}
                      </h3>
                      {artist.aka && (
                        <p className="font-pixel text-[8px] sm:text-[10px] md:text-xs text-pink-400/70">
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
      <section ref={lifestyleRef} className="relative py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-black via-fuchsia-950 to-black overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isLifestyleInView ? 1 : 0, y: isLifestyleInView ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-glitch text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center mb-8 md:mb-16 text-pink-400 text-shadow-neon">
              ЛАЙФСТАЙЛ & ВАЙБ
            </h2>

            {/* Slider */}
            <div className="relative">
              <div className="relative h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl md:rounded-3xl overflow-hidden">
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
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-8">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mb-4 md:mb-6"
                      >
                        {(() => {
                          const Icon = lifestyleSlides[currentSlide].icon
                          return <Icon size={50} className="text-white drop-shadow-2xl md:w-20 md:h-20" />
                        })()}
                      </motion.div>

                      <motion.h3
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="font-gothic text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white mb-2 md:mb-4 text-shadow-neon leading-tight px-2"
                      >
                        {lifestyleSlides[currentSlide].title}
                      </motion.h3>

                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="font-pixel text-sm sm:text-base md:text-lg lg:text-2xl text-pink-100"
                      >
                        {lifestyleSlides[currentSlide].text}
                      </motion.p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-pink-600/80 hover:bg-pink-500 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all z-10 neon-border active:scale-95"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-pink-600/80 hover:bg-pink-500 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all z-10 neon-border active:scale-95"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-10">
                  {lifestyleSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                        currentSlide === index 
                          ? 'bg-pink-400 w-6 md:w-8 neon-border' 
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
      <section className="relative py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-black to-pink-950">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-gothic text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-6 md:mb-8 text-fuchsia-400 text-shadow-neon">
              ПОДПИСЫВАЙСЯ
            </h2>

            <p className="font-pixel text-sm sm:text-base md:text-lg lg:text-xl text-pink-300 mb-8 md:mb-12">
              ★ Следи за моими приключениями ★
            </p>

            {/* Neon Graffiti Social Icons */}
            <div className="flex justify-center gap-5 md:gap-8 flex-wrap">
              <motion.a
                href="https://www.instagram.com/whoatemypopcorn?igsh=MTJ4NjlpNmllZHh2eg=="
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-fuchsia-600 rounded-xl md:rounded-2xl blur-lg md:blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-pink-600 to-fuchsia-700 p-4 md:p-6 rounded-xl md:rounded-2xl border-2 md:border-4 border-pink-400 neon-border plastic-texture">
                  <Instagram size={36} className="text-white md:w-12 md:h-12" />
                </div>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-xl md:rounded-2xl blur-lg md:blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-fuchsia-600 to-pink-700 p-4 md:p-6 rounded-xl md:rounded-2xl border-2 md:border-4 border-fuchsia-400 neon-border plastic-texture">
                  <svg className="w-9 h-9 md:w-12 md:h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </div>
              </motion.a>
            </div>

            {/* Footer Text */}
            <div className="mt-10 md:mt-16 font-pixel text-xs md:text-sm text-pink-400/70">
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