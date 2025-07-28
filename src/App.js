import React, { useCallback } from 'react'
import { Tooltip, TextField, Button, Box, Typography, Paper, Snackbar, Alert } from '@mui/material'
import emailjs from '@emailjs/browser'
import Computers from './components/Computers'
import ParticlesBG from './components/ParticlesBG'
import useIntersectionObserver from './hooks/useIntersectionObserver'
import react from './assets/react.svg'
import cyclopedia from "./assets/cyclopedia.png"
import cryptomatics from "./assets/cryptomatics.png"
import weatherboy from "./assets/weatherboy.png"
import ts from "./assets/typescript.svg"
import mongo from "./assets/mongo.svg"
import tailwind from "./assets/tailwind.png"
import next from "./assets/next.svg"
import mui from "./assets/material-ui.svg"
import webpack from "./assets/webpack.svg"
import redux from "./assets/redux.svg"
import vite from "./assets/vite.svg"
import coding from './assets/coding.png'

const App = () => {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({behavior: 'smooth'})
  } 

  const ghUrl = "https://mikematics22800.github.io"
  
  // Contact form state
  const [contactForm, setContactForm] = React.useState({
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [snackbar, setSnackbar] = React.useState({
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
  
  // Create refs for elements that should animate
  const aboutImageRef = useIntersectionObserver('animate__slideInLeft')
  const aboutTextRef = useIntersectionObserver('animate__slideInRight')
  const cyclopediaRef = useIntersectionObserver('animate__slideInLeft')
  const cyclopediaDescRef = useIntersectionObserver('animate__slideInRight')
  const cryptomaticsRef = useIntersectionObserver('animate__slideInRight')
  const cryptomaticsDescRef = useIntersectionObserver('animate__slideInLeft')
  const weatherboyRef = useIntersectionObserver('animate__slideInLeft')
  const weatherboyDescRef = useIntersectionObserver('animate__slideInRight')

  window.addEventListener('click', (e) => {
    scrollTo('nav')
  })

  return (
      <div className='w-screen source-code-pro'>
        <ParticlesBG />
        <div className="hero">
          <div className='computers-container'>
            <Computers/>
          </div>
          <div className='z-10 pt-20'>
            <span className='text-[red]'>Mike</span>
            <span className='text-[aqua]'>matics</span>
          </div>
          <h1>Click or tap anywhere to start</h1>
        </div> 
        <nav id="nav">
          <div className='nav-links'>
            <h1 onClick={() => {scrollTo('about')}}>About</h1>
            <h1 onClick={() => {scrollTo('projects')}}>Projects</h1>
            <h1 onClick={() => {scrollTo('contact')}}>Contact</h1>
          </div>
        </nav>
        <div className='content' style={{backgroundColor: 'black'}}>
          <section id="about">
            <div className='w-full sm:w-auto px-10 sm:p-0'>
            <div ref={aboutImageRef} className="relative aspect-square w-96 max-w-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <Tooltip title="GitHub" arrow placement="bottom">
                  <a href="https://github.com/mikematics22800" target='_blank'>
                    <img src={coding} className='!w-24'/>      
                  </a>
                </Tooltip>
              </div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Tooltip title="Mongoose" arrow placement="bottom">
                  <a href="https://www.mongodb.com/" target='_blank'>
                    <img src={mongo} alt="MongoDB" />
                  </a>
                </Tooltip>
              </div>
              <div className="absolute top-[15%] left-[85%] transform -translate-x-1/2 -translate-y-1/2">
                <Tooltip title="Redux" arrow placement="bottom">
                  <a href="https://redux.js.org/" target='_blank'>
                    <img src={redux} alt="Redux" />
                  </a>
                </Tooltip>              
              </div>
              <div className="absolute top-1/2 left-full transform -translate-x-1/2 -translate-y-1/2">
                <Tooltip title="TypeScript" arrow placement="bottom">
                  <a href="https://www.typescriptlang.org/" target='_blank'>
                    <img src={ts} alt="TypeScript" />
                  </a>
                </Tooltip>              
              </div>
              <div className="absolute bottom-[15%] left-[85%] transform -translate-x-1/2 translate-y-1/2">
                <Tooltip title="Tailwind CSS" arrow placement="bottom">
                  <a href="https://tailwindcss.com/" target='_blank'>
                    <img src={tailwind} alt="Tailwind CSS" />
                  </a>
                </Tooltip>              
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <Tooltip title="Vite" arrow placement="bottom">
                  <a href="https://vite.dev/" target='_blank'>
                    <img src={vite} alt="Vite" />
                  </a>
                </Tooltip>              
              </div>
              <div className="absolute bottom-[15%] left-[15%] transform -translate-x-1/2 translate-y-1/2">
                <Tooltip title="Material UI" arrow placement="bottom">
                  <a href="https://mui.com/" target='_blank'>
                    <img src={mui} alt="Material UI" />
                  </a>
                </Tooltip>              
              </div>
              <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2">
                <Tooltip title="Webpack" arrow placement="bottom">
                  <a href="https://webpack.js.org/" target='_blank'>
                    <img src={webpack} alt="Webpack" />
                  </a>
                </Tooltip>              
              </div>
              <div className="absolute top-[15%] left-[15%] transform -translate-x-1/2 -translate-y-1/2">
                <Tooltip title="Next.js" arrow placement="bottom">
                  <a href="https://nextjs.org/" target='_blank'>
                    <img src={next} alt="Next.js" />
                  </a>
                </Tooltip>             
              </div>
              <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <Tooltip title="React/React Native" arrow placement="bottom">
                  <a href="https://react.dev/" target='_blank'>
                    <img src={react} alt="React" />
                  </a>
                </Tooltip>
              </div>
            </div>
            </div>
              <p ref={aboutTextRef}>
                Welcome to my gallery. I specialize in building polished, efficient, and dynamic web applications using the latest JavaScript libraries and frameworks.
                My expertise spans the full stack, from crafting responsive front-end interfaces with React, Next.js, and Material UI, to architecting robust back-end solutions with Node.js and MongoDB. I am passionate about leveraging modern tools like Vite, Webpack, and Tailwind CSS to deliver high-performance, maintainable code.
              </p>
          </section>        
          <section id="projects">
            <div className='project'>
              <a ref={cyclopediaRef} href='https://storm-cyclopedia.com' target='_blank'>
                <img src={cyclopedia} />
              </a>
              <div ref={cyclopediaDescRef} className='desc'>
                <div className='flex-col gap-2'>
                  <h1 className='lg:!text-right'>Cyclopedia</h1>
                  <p className='lg:!text-right'>
                    A data-driven platform for visualizing historical and live hurricane tracks. Features an interactive map and dynamic charts that empower users to explore storm patterns, frequency, and intensity over time. Built for meteorology enthusiasts and researchers seeking actionable insights from complex datasets.
                  </p>
                </div>
                <div className='flex-col gap-2'>
                  <h1 className='lg:!text-right'>Technologies</h1>
                  <p className='lg:!text-right'>React, Vite, Express.js, Tailwind CSS, Material UI, Leaflet, Chart.js</p>
                </div>
              </div>
            </div>
            <div className='project lg:!flex-row-reverse'>
              <a ref={cryptomaticsRef} href={`${ghUrl}/Cryptomatics`} target='_blank'>
                <img src={cryptomatics} />
              </a>
              <div ref={cryptomaticsDescRef} className='desc'>
                <div className='flex-col gap-2'>
                  <h1>Cryptomatics</h1>
                  <p>
                    A real-time cryptocurrency dashboard offering advanced visualization tools and interactive charts. Users can track live prices, analyze historical trends, and compare performance across multiple coins. Designed for traders and investors who value clarity and actionable data.
                  </p>
                </div>
                <div className='flex-col gap-2'>
                  <h1>Technologies</h1>
                  <p>React, Vite, Tailwind CSS, Material UI, Chart.js, Coinranking API</p>
                </div>
              </div>
            </div>
            <div className='project'>
              <a ref={weatherboyRef} href={`${ghUrl}/Weatherboy`} target='_blank'>
                <img src={weatherboy} />
              </a>
              <div ref={weatherboyDescRef} className='desc'>
                <div className='flex-col gap-2'>
                  <h1 className='lg:!text-right'>Weatherboy</h1>
                  <p className='lg:!text-right'>
                    A global weather application delivering real-time conditions, 5-day forecasts, and interactive maps of atmospheric patterns. Integrates multiple APIs to provide accurate, location-based weather data and engaging visualizations for users worldwide.
                  </p>
                </div>
                <div className='flex-col gap-2'>
                  <h1 className='lg:!text-right'>Technologies</h1>
                  <p className='lg:!text-right'>React, Vite, Tailwind CSS, Material UI, Leaflet, Chart.js, OpenWeatherMap API, Google Maps Platform</p>
                </div>
              </div>
            </div>
          </section>
          <section id="contact">
            <div className='contact'>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 4, 
                  maxWidth: 600, 
                  mx: 'auto', 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
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