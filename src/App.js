import React, { useCallback } from 'react'
import { Tooltip, TextField, Button, Box, Typography, Paper, Snackbar, Alert } from '@mui/material'
import emailjs from '@emailjs/browser'
import Computers from './components/Computers'
import ParticlesBG from './components/ParticlesBG'
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
  
  return (
      <div className='w-screen source-code-pro'>
        <div className="hero" onClick={() => scrollTo('about')}>
          <div className='computers-container'>
            <Computers/>
          </div>
          <div className='z-10 pt-20'>
            <span className='text-[red]'>Mike</span>
            <span className='text-[aqua]'>matics</span>
          </div>
          <h1>Click or tap anywhere to start</h1>
        </div> 

        <div className='content relative'>
          <div className='absolute inset-0 z-0 bg-black bg-opacity-20 backdrop-blur-sm'>
            <ParticlesBG />
          </div>
          <section id="about" className='relative z-20'>
            <div className='w-full sm:w-auto px-10 sm:p-0'>
            <div className="relative aspect-square w-[30rem] max-w-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <Tooltip title="GitHub" arrow placement="bottom">
                  <a href="https://github.com/mikematics22800" target='_blank'>
                    <img src={coding} className='!w-24 sm:!w-32'/>      
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
          </section>   
          <section id="demos" className='relative z-20'>
            <h1 className='text-center text-3xl font-bold z-20 mb-10'>Live Demos</h1>    
            <div className='demos-container'>
              <div className='project'>
                <a href='https://tropical-cyclopedia.com' target='_blank'>
                  <img src={cyclopedia} alt="Cyclopedia" />
                </a>
                <div className='project-title'>
                  <h1>Cyclopedia</h1>
                </div>
              </div>
              <div className='project'>
                <a href={`${ghUrl}/Cryptomatics`} target='_blank'>
                  <img src={cryptomatics} alt="Cryptomatics" />
                </a>
                <div className='project-title'>
                  <h1>Cryptomatics</h1>
                </div>
              </div>
              <div className='project'>
                <a href={`${ghUrl}/Weatherboy`} target='_blank'>
                  <img src={weatherboy} alt="Weatherboy" />
                </a>
                <div className='project-title'>
                  <h1>Weatherboy</h1>
                </div>
              </div>
            </div>
          </section>
          <section id="contact" className='relative z-20'>
            <h1 className='text-center text-3xl font-bold z-20 mb-10'>Contact</h1>    
            <div className='contact'>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 4, 
                  maxWidth: 600, 
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