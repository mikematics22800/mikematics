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
    blurb:
      'Tropical cyclone tracking and visualization: historical Atlantic and Pacific storm archives, live NHC data, interactive Leaflet maps, and Chart.js analytics—including intensity curves, ACE/TIKE metrics, and forecast cones. Ships as an installable PWA with offline support.',
    details: [
      'Explore basin/year/storm flows, storm imagery, and live weather layers on the map.',
      'Sole developer; built with Next.js (App Router), TypeScript, Tailwind CSS, React Leaflet, and Material UI.',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React Leaflet', 'Chart.js', 'Material UI', 'PWA'],
  },
  {
    title: 'Cryptomatics',
    href: `${GH_PAGES_ROOT}/Cryptomatics`,
    image: cryptomatics,
    blurb:
      'Single-page app for cryptocurrency market exploration: Coin Ranking–powered spot data and charts, Supabase-backed authentication, optional paper-wallet–style balances, and user-to-user transfers with transaction history.',
    details: [
      'Dashboard, top-100 browse, and per-coin detail with Chart.js history and USD/EUR display (Frankfurter for fiat conversion).',
      'Vite and React Router; optional Express admin API for trusted Supabase operations. Unit tests with Vitest.',
    ],
    stack: ['React', 'Vite', 'Supabase', 'Material UI', 'Tailwind CSS', 'Chart.js', 'Axios', 'Vitest'],
  },
  {
    title: 'Weatherboy',
    href: `${GH_PAGES_ROOT}/Weatherboy`,
    image: weatherboy,
    blurb:
      'Weather client for current conditions and forecasts: geolocated weather, worldwide city search with autocomplete, and an interactive map with satellite-derived weather layers (OpenWeather + Google Maps Platform APIs).',
    details: [
      'Built with React, React Router, and Vite; UI uses Tailwind CSS, Material UI, Chart.js, and Leaflet.',
    ],
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
            <p className="text-white/85 text-center text-sm sm:text-base tracking-wide">
              Michael Medina · Full-stack software engineer
            </p>
            <h1 className="!text-lg sm:!text-2xl !font-normal !text-white/95 !max-w-2xl !leading-snug">
              Full-stack engineer focused on React, .NET, and cloud-backed systems—clear architecture, tested features, and polished UX.
            </h1>
            <button
              type="button"
              onClick={() => scrollTo('demos')}
              className="mt-1 text-aqua/90 hover:text-aqua text-sm underline underline-offset-4 decoration-aqua/50 bg-transparent border-0 cursor-pointer font-inherit"
            >
              View selected projects
            </button>
          </div>
        </div> 
        <div className='content relative'>
          <div className='absolute inset-0 z-0 bg-black bg-opacity-20 backdrop-blur-sm'>
            <ParticlesBG />
          </div>
          <section id="about" className='relative z-20'>
            <div className='max-w-3xl mx-auto px-4 pt-16 sm:pt-24 pb-8 text-left'>
              <h2 className='text-center sm:text-3xl text-2xl font-bold mb-6'>About</h2>
              <Typography component="div" sx={{ color: 'rgba(255,255,255,0.88)', mb: 2, lineHeight: 1.7 }}>
                Full-stack engineer with a B.S. in Computer Science from Florida Atlantic University. I emphasize maintainable code, performance-conscious UIs,
                and reliable integration with APIs and data stores.
              </Typography>
              <Typography component="div" sx={{ color: 'rgba(255,255,255,0.88)', mb: 3, lineHeight: 1.7 }}>
                This portfolio uses React, Three.js, and tsParticles. The orbit highlights core skills; the center icon opens a PDF resume. Selected projects and contact details follow.
              </Typography>
              <Box sx={{ mb: 4 }}>
                {skillGroups.map(({ label, items }) => (
                  <Box key={label} sx={{ mb: 2 }}>
                    <Typography variant="overline" sx={{ color: 'aqua', letterSpacing: '0.08em', display: 'block', mb: 1 }}>
                      {label}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                      {items.map((name) => (
                        <Chip
                          key={name}
                          label={name}
                          size="small"
                          variant="outlined"
                          sx={{
                            borderColor: 'rgba(0, 255, 255, 0.35)',
                            color: 'rgba(255,255,255,0.9)',
                            fontFamily: '"Source Code Pro", monospace',
                            fontSize: '0.7rem',
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>
            </div>
            <div className='lg:my-24 md:my-20 sm:my-16 my-12'>
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
          </section>

          <section id="demos" className='relative z-20 py-6 sm:py-10 lg:mt-60 md:mt-40 sm:mt-20'>
            <h2 className='text-center sm:text-3xl text-2xl font-bold z-20 mb-8'>Personal Projects</h2>
            <div className='demos'>
              {portfolioProjects.map((project) => (
                <article
                  key={project.title}
                  className="demos-project-card rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 sm:p-6 backdrop-blur-sm"
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
                      }}
                    >
                      {[project.blurb, ...project.details].join(' ')}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mt: 1 }}>
                      {project.stack.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(0, 255, 255, 0.12)',
                            color: 'rgba(255,255,255,0.92)',
                            fontFamily: '"Source Code Pro", monospace',
                            fontSize: '0.68rem',
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