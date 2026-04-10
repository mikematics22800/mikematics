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

const liveDemos = [
  {
    title: 'Cyclopedia',
    href: 'https://tropical-cyclopedia.com',
    image: cyclopedia,
    desc: 'Data visualization tool for exploring National Hurricane Center datasets via custom API services. Leverages dynamic maps and charts for tracking and analytics including intensity curves. Explore seasonal datasets by selecting a year, then select a storm for more specific data. View tracker to see live data including forecast cones with atmospheric overlays.',
    stack: ['Chart.js', 'Material UI', 'Next.js', 'Tailwind CSS', 'TypeScript'],
  },
  {
    title: 'Cryptomatics',
    href: `${GH_PAGES_ROOT}/Cryptomatics`,
    image: cryptomatics,
    desc: 'User platform for exploring crypto datasets via Coinranking API and simulating trading. Leverages dynamic charts for price histories ranging from 3 days to 5 years. Simulates transactions and conversions between USD, EUR, and BTC. User authentication, database, and CRUD operations implemented via Supabase JS client library.' ,
    stack: ['Chart.js', 'Material UI', 'React', 'Supabase', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Weatherboy',
    href: `${GH_PAGES_ROOT}/Weatherboy`,
    image: weatherboy,
    desc: 'Web client for querying weather datasets from cities worldwide via OpenWeather API. Queries from current location by default, with smart input that suggests valid cities. These suggestions are shown and reverse geocoded via Google Places API. View current weather and hourly 5 day forecasts along with general outlooks and dew point charts.',
    stack: ['Chart.js', 'Leaflet', 'Material UI', 'React', 'Tailwind CSS', 'Vite'],
  },
]

const App = () => {
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
    {
      label: 'Cloud & DevOps',
      items: [
        'AWS', 'Azure', 'Cloudflare', 'Docker', 'Google Cloud',
        'Jenkins', 'Kubernetes', 'NGINX', 'Terraform', 'Vercel'
      ]
    },
    {
      label: 'Databases & Backend',
      items: [
        'AWS DynamoDB', 'Firebase', 'GraphQL', 'MongoDB', 'MySQL',
        'PostgreSQL', 'Prisma', 'Redis', 'Supabase', 'tRPC'
      ]
    },
    {
      label: 'Development Tools',
      items: [
        'Cursor', 'Docker', 'ESLint', 'Git', 'GitHub',
        'GitHub Actions', 'npm', 'Prettier', 'VS Code', 'Visual Studio'
      ]
    },
    {
      label: 'Frameworks & Libraries',
      items: [
        'ASP.NET', 'Express.js', 'NestJS', 'Next.js', 'Node.js',
        'React', 'React Native', 'Redux', 'Three.js', 'Vite'
      ]
    },
    {
      label: 'Mobile Development',
      items: [
        'Android SDK', 'Expo', 'Firebase Auth', 'Flutter', 'Kotlin',
        'React Native', 'Swift', 'SwiftUI', 'UIKit', 'Xcode'
      ]
    },
    {
      label: 'Programming Languages',
      items: [
        'Bash', 'C#', 'C++', 'Go', 'Java',
        'JavaScript', 'Python', 'Rust', 'SQL', 'TypeScript'
      ]
    },
    {
      label: 'Testing & QA Tools',
      items: [
        'Chai', 'Cypress', 'JUnit', 'Jest', 'Mocha',
        'Playwright', 'Postman', 'Selenium', 'Supertest', 'Vitest'
      ]
    },
    {
      label: 'UI/UX & Visualization',
      items: [
        'Chart.js', 'D3.js', 'Figma', 'Framer Motion', 'GSAP',
        'Leaflet', 'Material UI', 'Shadcn UI', 'Tailwind CSS', 'Three.js'
      ]
    }
  ];

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
                    title="Click me to view resume!"
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
              <h2 className="text-center font-bold mb-6 sm:mb-8 text-3xl sm:text-4xl tracking-tight">
                About Me
              </h2>
              <div className="w-full flex justify-center px-3 sm:px-5">
                <div className="w-full max-w-3xl border-l-2 border-[rgba(0,255,255,0.28)] pl-5 sm:pl-10">
                <p className='mb-4'>
                  Greetings! I'm a full-stack engineer passionate about building scalable, secure, and user-friendly software. I specialize in creating systems that perform reliably under load and grow seamlessly with teams and users. From web and mobile apps to APIs and databases, I ensure smooth delivery of features from start to finish. I work closely with product and design teams to turn ideas into solid, maintainable code that aligns with business goals.
                </p>

                <p className='mb-4'>
                  My primary tech stack includes JavaScript, TypeScript, React, and Next.js, and I’m well-versed in back-end development with SQL, NoSQL, and BaaS solutions like Firebase and Supabase. I’m also experienced in building cross-platform mobile applications using React Native and Expo. My goal is to deliver polished, intuitive user experiences, whether on the web or mobile devices. I’m always focused on writing clean, scalable code that can evolve as the product grows.
                </p>

                <p className='mb-4'>
                  I’m particularly interested in data-heavy applications where data visualization plays a key role. I enjoy transforming complex data into clear, engaging charts, maps, and animations that are easy to understand. Effective data visualization helps users make informed decisions and simplifies complex information. I love the challenge of making data both accessible and visually compelling, creating interfaces that tell a clear story.
                </p>

                <p className='mb-4'>
                  AI is at the heart of my work, whether I’m designing intelligent features with Large Language Models (LLMs) or using AI tools to optimize engineering processes. I integrate AI in ways that balance speed, privacy, and product quality. Staying current with the latest AI trends is a priority, and I’m always exploring new models, APIs, and tools. I’m committed to leveraging AI to improve both development workflows and the end-user experience.
                </p>
                  <Box sx={{ mb: 2, mt: 1 }}>
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
              </div>
            </div>
          </section>

          <section id="demos" className='relative z-20 py-6 sm:py-10 lg:mt-60 md:mt-40 sm:mt-20'>
            <h2 className='text-center text-3xl sm:text-4xl font-bold z-20 mb-8'>Live Demos</h2>
            <div className='demos'>
              {liveDemos.map((project) => (
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
                    <h1 className='text-2xl font-bold'>
                      {project.title}
                    </h1>
                    <p>
                      {project.desc}
                    </p>
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
            <h1 className='text-center sm:text-3xl text-2xl font-bold znpm s-20 mb-5'>Contact</h1>    
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