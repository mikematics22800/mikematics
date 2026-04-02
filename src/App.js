import React, { useCallback, useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { TextField, Button, Box, Paper, Snackbar, Alert, Tooltip, CircularProgress, Typography, Chip, Link } from '@mui/material'
import emailjs from '@emailjs/browser'
import Computers from './components/Computers'
import ParticlesBG from './components/ParticlesBG'
import react from './assets/react.svg'
import cyclopedia from "./assets/cyclopedia.png"
import cryptomatics from "./assets/cryptomatics.png"
import weatherboy from "./assets/weatherboy.png"
import ts from "./assets/ts.svg"  
import coding from './assets/coding.png'
import js from './assets/js.svg'
import python from './assets/python.svg'
import c from './assets/c++.png'
import cs from './assets/c#.png'
import sql from './assets/sql.png'
import tailwind from './assets/tailwind.png'
import mongo from './assets/mongo.svg'
import vue from './assets/vue.svg'
import angular from './assets/angular.svg'
import expo from './assets/expo.svg'
import resume from './assets/Resume.pdf'

const GH_PAGES_ROOT = 'https://mikematics22800.github.io'

const portfolioProjects = [
  {
    title: 'Cyclopedia',
    href: 'https://tropical-cyclopedia.com',
    image: cyclopedia,
    desc: 'Cyclopedia is a tropical cyclone tracking and visualization application. It combines historical Atlantic and Pacific storm archives with live National Hurricane Center data on interactive Leaflet maps, and it uses Chart.js for analytics such as intensity curves, ACE and TIKE metrics, and forecast cones. The site ships as an installable progressive web app. You can explore by basin, year, and storm; view imagery; and overlay live weather layers on the map.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React Leaflet', 'Chart.js', 'Material UI'],
  },
  {
    title: 'Cryptomatics',
    href: `${GH_PAGES_ROOT}/Cryptomatics`,
    image: cryptomatics,
    desc: 'Cryptomatics is a single-page application for exploring cryptocurrency markets. Spot data and charts are powered by Coin Ranking; Supabase provides authentication. Optional paper-wallet-style balances and peer-to-peer transfers include a full transaction history. The dashboard includes a top-100 browse view and per-coin detail pages with Chart.js price history and USD and EUR pricing via the Frankfurter API for fiat conversion. The front end is built with Vite, React, and React Router.',
    stack: ['React', 'Vite', 'Supabase', 'Material UI', 'Tailwind CSS', 'Chart.js', 'Axios'],
  },
  {
    title: 'Weatherboy',
    href: `${GH_PAGES_ROOT}/Weatherboy`,
    image: weatherboy,
    desc: 'Weatherboy is a weather client for current conditions and forecasts. It supports geolocated weather, worldwide city search with autocomplete, and an interactive map with satellite-derived weather layers from the OpenWeather and Google Maps Platform APIs. The app is built with React, Vite, and React Router; the interface uses Tailwind CSS, Material UI, Chart.js, and Leaflet.',
    stack: ['React', 'Vite', 'React Router', 'Tailwind CSS', 'Material UI', 'Chart.js', 'Leaflet'],
  },
]

const App = () => {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({behavior: 'smooth'})
  } 

  const [contactForm, setContactForm] = useState({
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  })
  
  const handleContactSubmit = useCallback(async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_email: contactForm.email,
          subject: contactForm.subject,
          message: contactForm.message,
          to_email: 'mikematics22800@gmail.com'
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      
      setSnackbar({
        open: true,
        message: 'Email sent successfully!',
        severity: 'success'
      })
      
      // Reset form
      setContactForm({
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      console.error('Email send failed:', error)
      setSnackbar({
        open: true,
        message: 'Failed to send email. Please try again.',
        severity: 'error'
      })
    } finally {
      setIsSubmitting(false)
    }
  }, [contactForm.email, contactForm.subject, contactForm.message])
  
  const handleInputChange = useCallback((field) => (e) => {
    setContactForm(prev => ({
      ...prev,
      [field]: e.target.value
    }))
  }, [])
  
  const handleCloseSnackbar = useCallback(() => {
    setSnackbar(prev => ({ ...prev, open: false }))
  }, [])

  const [computersSceneReady, setComputersSceneReady] = useState(false)
  const handleComputersSceneReady = useCallback(() => {
    setComputersSceneReady(true)
  }, [])

  const orbitRef = useRef(null)

  const orbitRadiusVmin = 35
  
  // Languages → data → front-end frameworks → styling → mobile
  const icons = [
    { src: js, title: 'JavaScript' },
    { src: ts, title: 'TypeScript' },
    { src: python, title: 'Python' },
    { src: c, title: 'C++' },
    { src: cs, title: 'C#' },
    { src: sql, title: 'SQL' },
    { src: mongo, title: 'MongoDB' },
    { src: react, title: 'React' },
    { src: vue, title: 'Vue' },
    { src: angular, title: 'Angular' },
    { src: tailwind, title: 'Tailwind CSS' },
    { src: expo, title: 'Expo' },
  ]

  const skillGroups = [
    { label: 'Languages', items: ['JavaScript', 'TypeScript', 'SQL', 'Python', 'C#', 'Java', 'C++', 'PHP'] },
    { label: 'Core frameworks', items: ['React', 'Next.js', 'React Native', 'Expo', '.NET', 'ASP.NET', 'Vue.js', 'Angular', 'Express.js'] },
    { label: 'Data', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'Supabase'] },
    { label: 'UI & visualization', items: ['Tailwind CSS', 'Material UI', 'Chart.js', 'Leaflet', 'Three.js', 'tsParticles', 'GSAP'] },
    { label: 'Tools', items: ['Visual Studio', 'VS Code', 'Git', 'GitHub', 'Cursor'] },
  ]

  useEffect(() => {
    if (!orbitRef.current) return
    const wrappers = orbitRef.current.querySelectorAll('.orbit-icon-wrapper')
    const radiusVmin = 35
    const duration = 24
    const count = wrappers.length
    const tween = gsap.to({ angle: 0 }, {
      angle: -360,
      repeat: -1,
      duration,
      ease: 'none',
      onUpdate() {
        const baseAngle = (this.targets()[0].angle * Math.PI) / 180
        wrappers.forEach((el, i) => {
          const angle = baseAngle + (i * (360 / count) * Math.PI) / 180
          const xVmin = radiusVmin * Math.cos(angle)
          const yVmin = -radiusVmin * Math.sin(angle)
          el.style.transform = `translate(-50%, -50%) translate(${xVmin}vmin, ${yVmin}vmin)`
        })
      },
    })
    return () => tween.kill()
  }, [])


  return (
      <div className='w-screen source-code-pro'>
        <div className="hero">
          <div className='computers-container'>
            <Computers onSceneReady={handleComputersSceneReady} />
            {!computersSceneReady && (
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 3,
                  zIndex: 20,
                  backgroundColor: 'rgba(0, 0, 0, 0.35)',
                  pointerEvents: 'none',
                }}
                role="status"
                aria-live="polite"
              >
                <CircularProgress size={72} thickness={4} sx={{ color: 'aqua' }} aria-hidden />
                <Typography
                  sx={{
                    color: 'rgba(255, 255, 255, 0.92)',
                    fontFamily: '"Source Code Pro", monospace',
                    fontSize: { xs: '0.95rem', sm: '1.1rem' },
                    letterSpacing: '0.02em',
                  }}
                >
                  Initializing 3D Engine...
                </Typography>
              </Box>
            )}
          </div>
          <div className='z-10 pt-20 flex flex-col items-center gap-2 sm:gap-3 max-w-3xl px-4'>
            <p className="text-4xl sm:text-6xl font-bold">
              <span className='text-[red]'>Mike</span>
              <span className='text-[aqua]'>matics</span>
            </p>
            <h1 className="!text-lg sm:!text-2xl !font-normal !text-white/95 !max-w-2xl !leading-snug">
              Scroll down to view main content!
            </h1>
          </div>
        </div> 
        <div className='content relative'>
          <div className='absolute inset-0 z-0 bg-black bg-opacity-20 backdrop-blur-sm'>
            <ParticlesBG />
          </div>
          <section id="about" className='relative z-20'>
            <div className='lg:my-96 sm:my-48'>
              <div className="relative aspect-square w-[30rem] max-w-full mx-auto overflow-visible">
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <Tooltip
                    title="Hi! Click me to view my resume."
                    placement="bottom"
                    arrow
                    open
                  >
                    <a href={resume} target='_blank' rel="noreferrer">
                      <img src={coding} className='w-[20vw] max-w-40 hover:scale-[105%] transition-transform duration-200' alt="Resume" />
                    </a>
                  </Tooltip>
                </div>
                <div ref={orbitRef} className="absolute inset-0 overflow-visible">
                  {icons.map(({ src, title }, i) => {
                    const angleDeg = i * 30
                    const rad = (angleDeg * Math.PI) / 180
                    const xVmin = orbitRadiusVmin * Math.cos(rad)
                    const yVmin = -orbitRadiusVmin * Math.sin(rad)
                    return (
                      <div
                        key={title}
                        className="orbit-icon-wrapper absolute left-1/2 top-1/2 flex items-center justify-center"
                        style={{
                          transform: `translate(-50%, -50%) translate(${xVmin}vmin, ${yVmin}vmin)`,
                        }}
                      >
                        <img src={src} alt={title} className="w-[10vw] max-w-20" />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="about-text pt-16 sm:pt-24 pb-10 sm:pb-12 text-left">
              <h2 className="text-center font-bold mb-6 sm:mb-8 text-3xl sm:text-4xl lg:text-[2.35rem] tracking-tight">
                About Me
              </h2>
              <Typography
                component="div"
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  mb: 2.5,
                  lineHeight: 1.75,
                  fontSize: { xs: '1.0625rem', sm: '1.125rem', md: '1.2rem' },
                  textAlign: 'justify',
                  '& p': { margin: 0, marginBottom: 1.75 },
                  '& p:last-of-type': { marginBottom: 0 },
                }}
              >
                <p>
                  Greetings! I&apos;m Michael, a full-stack engineer who enjoys shipping web apps and mobile experiences that feel
                  fast, clear, and dependable. I work across the modern JavaScript and TypeScript ecosystem—especially React and
                  Next.js—and pair polished interfaces with APIs, authentication, and data stores that belong in production.
                  On the backend I&apos;m at home with SQL and document databases, Supabase and Firebase-style workflows, and
                  frameworks from Express to .NET when the problem calls for it. I also build cross-platform mobile apps with React
                  Native and Expo. When the story is in the data, I reach for maps, charts, and animation (Leaflet, Chart.js, GSAP)
                  so users can explore complexity without getting lost in it.
                  I care about maintainable code, accessible UX, and honest communication with teammates and stakeholders. Browse
                  the projects below for concrete examples, or open the resume link above if you&apos;d like the full rundown. 😎
                </p>
              </Typography>
              <Box sx={{ mb: 2 }}>
                {skillGroups.map(({ label, items }) => (
                  <Box key={label} sx={{ mb: 2.5 }}>
                    <Typography
                      sx={{
                        color: 'aqua',
                        letterSpacing: '0.1em',
                        display: 'block',
                        mb: 1.25,
                        fontFamily: '"Source Code Pro", monospace',
                        fontSize: { xs: '0.8rem', sm: '0.875rem' },
                        fontWeight: 600,
                        textTransform: 'uppercase',
                      }}
                    >
                      {label}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 1, sm: 1.25 } }}>
                      {items.map((name) => (
                        <Chip
                          key={name}
                          label={name}
                          variant="outlined"
                          sx={{
                            borderColor: 'rgba(0, 255, 255, 0.4)',
                            color: 'rgba(255,255,255,0.92)',
                            fontFamily: '"Source Code Pro", monospace',
                            fontSize: { xs: '0.8rem', sm: '0.875rem' },
                            height: { xs: 32, sm: 36 },
                            '& .MuiChip-label': { px: 1.5 },
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>
            </div>
          </section>

          <section id="demos" className='relative z-20 py-6 sm:py-10 lg:mt-60 md:mt-40 sm:mt-20'>
            <h2 className='text-center sm:text-3xl text-2xl font-bold z-20 mb-8'>Personal Projects</h2>
            <div className='demos'>
              {portfolioProjects.map((project) => (
                <article
                  key={project.title}
                  className="demos-project-card"
                >
                  <a
                    className="demos-project-card__media"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" decoding="async" />
                  </a>
                  <div className="demos-project-card__body">
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 700, color: 'white' }}>
                      {project.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'rgba(255,255,255,0.88)',
                        lineHeight: 1.7,
                        fontSize: 'inherit',
                        textAlign: 'justify',
                      }}
                    >
                      {project.desc}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mt: 1 }}>
                      {project.stack.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          sx={{
                            backgroundColor: 'rgba(0, 255, 255, 0.12)',
                            color: 'rgba(255,255,255,0.92)',
                            fontFamily: '"Source Code Pro", monospace',
                          }}
                        />
                      ))}
                    </Box>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section id="contact" className='relative z-20 my-20'>
            <h1 className='text-center sm:text-3xl text-2xl font-bold z-20 mb-5'>Contact</h1>    
            <div className='contact'>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 4, 
                  maxWidth: '1000', 
                  mx: 'auto', 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <Box component="form" onSubmit={handleContactSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <TextField
                    required={false}
                    label="Email"
                    type="email"
                    value={contactForm.email}
                    onChange={handleInputChange('email')}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.3)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.5)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'aqua',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255, 255, 255, 0.7)',
                        '&.Mui-focused': {
                          color: 'aqua',
                        },
                      },
                      '& .MuiInputBase-input': {
                        color: 'white',
                      },
                    }}
                  />
                  <TextField
                    required={false}
                    label="Subject"
                    value={contactForm.subject}
                    onChange={handleInputChange('subject')}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.3)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.5)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'aqua',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255, 255, 255, 0.7)',
                        '&.Mui-focused': {
                          color: 'aqua',
                        },
                      },
                      '& .MuiInputBase-input': {
                        color: 'white',
                      },
                    }}
                  />
                  <TextField
                    required={false}
                    label="Message"
                    multiline
                    rows={4}
                    value={contactForm.message}
                    onChange={handleInputChange('message')}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.3)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.5)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'aqua',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255, 255, 255, 0.7)',
                        '&.Mui-focused': {
                          color: 'aqua',
                        },
                      },
                      '& .MuiInputBase-input': {
                        color: 'white',
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                    sx={{
                      mt: 2,
                      backgroundColor: 'rgba(0, 255, 255, 0.2)',
                      border: '1px solid aqua',
                      color: 'aqua',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 255, 255, 0.3)',
                        border: '1px solid aqua',
                      },
                      '&:disabled': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        color: 'rgba(255, 255, 255, 0.5)',
                      },
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Email'}
                  </Button>
                </Box>
              </Paper>
            </div>
          </section>
        </div>
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert 
            onClose={handleCloseSnackbar} 
            severity={snackbar.severity}
            sx={{ 
              backgroundColor: snackbar.severity === 'success' ? 'rgba(76, 175, 80, 0.9)' : 'rgba(244, 67, 54, 0.9)',
              color: 'white',
              '& .MuiAlert-icon': {
                color: 'white'
              }
            }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </div>
  )
}

export default App