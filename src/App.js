import React, { useCallback, useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { TextField, Button, Box, Paper, Snackbar, Alert, Tooltip } from '@mui/material'
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

const App = () => {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({behavior: 'smooth'})
  } 

  const ghUrl = "https://mikematics22800.github.io"
  
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

  const orbitRef = useRef(null)

  const orbitRadiusVmin = 35
  
  // Languages → data → front-end frameworks → styling → mobile
  const icons = [
    { src: js },
    { src: ts },
    { src: python },
    { src: c },
    { src: cs },
    { src: sql },
    { src: mongo },
    { src: react },
    { src: vue },
    { src: angular },
    { src: tailwind },
    { src: expo },
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
            <Computers/>
          </div>
          <div className='z-10 pt-20'>
            <span className='text-[red]'>Mike</span>
            <span className='text-[aqua]'>matics</span>
          </div>
          <h1>Scroll down to view content.</h1>
        </div> 
        <div className='content relative'>
          <div className='absolute inset-0 z-0 bg-black bg-opacity-20 backdrop-blur-sm'>
            <ParticlesBG />
          </div>
          <section id="about" className='relative z-20'>
            <div className='lg:my-80 md:my-60 sm:my-40 my-20'>
              <div className="relative aspect-square w-[30rem] max-w-full overflow-visible">
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <Tooltip
                    title="Hi! Click me to view resume."
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
                    const angleDeg = i * 45
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
          <section className='relative z-20'>
            <h1 className='text-center sm:text-3xl text-2xl font-bold z-20 mb-5'>Live Demos</h1>    
            <div className='demos'>
              <a href='https://tropical-cyclopedia.com' target='_blank'>
                <img src={cyclopedia} alt="Cyclopedia" />
              </a>
              <a href={`${ghUrl}/Cryptomatics`} target='_blank'>
                <img src={cryptomatics} alt="Cryptomatics" />
              </a>
              <a href={`${ghUrl}/Weatherboy`} target='_blank'>
                <img src={weatherboy} alt="Weatherboy" />
              </a>
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