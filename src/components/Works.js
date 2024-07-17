import { useEffect, useState } from "react"
import cryptomatics from "../images/cryptomatics.png"
import weatherboy from "../images/weatherboy.png"
import cyclopedia from "../images/cyclopedia.png"
import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material"

const Works = () => {
  const [work, setWork] = useState(1)

  useEffect(() => {
    if (work < 1) {
      setWork(3)
    }
    if (work > 3) {
      setWork(1)
    }
  }, [work])

  const baseUrl = "https://mikemedina22800.github.io/"

  return (
    <section id="works">
      {work == 1 && 
        <div className="work">
          <div className="work-desc">
            <h1 className="title works-title">Cryptomatics</h1>
            <p>
              A React application that displays real time information on the cryptocurrency exchange, including with detailed information on the top 100 ranking coins with interactive and stylized visuals. 
              Data is fetched in JSON format from Coinranking API, and UI is designed with Tailwind CSS, Material UI, and Chart.js.
            </p>
          </div>      
          <a href={`${baseUrl}/Cryptomatics`}>
            <img src={cryptomatics}/>
          </a>  
        </div>
      }
      {work == 2 && 
        <div className="work">
          <div className="work-desc">
            <h1 className="title works-title">Weatherboy</h1>
            <p>
              A React application that displays current weather conditions and forecasts for the user's current location and cities across the world. 
              The user can search for cities with ease and precision using a searchbar enhanced by Google Places Autocomplete API.
              Data is fetched in JSON format from OpenWeatherMap API, and UI is designed with Tailwind CSS, Material UI, and Chart.js.
              Additonally, the app includes an interactive map designed with React Leaflet which displays satellite derived weather data across the globe.
            </p>
          </div>   
          <a href={`${baseUrl}/Weatherboy`}>
            <img src={weatherboy}/>
          </a>
        </div>
      }
      {work == 3 && 
        <div className="work">
          <div className="work-desc">
            <h1 className="title works-title">Cyclopedia</h1>
            <p>
              A React application that displays official data from the National Hurricane Center on all tropical cyclones recorded in the Atlantic basin since 1851.
              Provided is an interactive map designed with React Leaflet, which displays detailed track information for all storms of a selected season. 
              In addition, charts designed with Chart.js display various statistics for each storm, as well as the commulative activity and impacts of each season.
            </p>
          </div>   
          <a href={`${baseUrl}/Cyclopedia`}>
            <img src={cyclopedia}/>
          </a>
        </div>
      }         
      <div className="flex sm:w-96 w-48 justify-between">
        <ArrowCircleLeft className="arrow-circle" onClick={() => {setWork(prevWork => prevWork - 1)}}/>
        <ArrowCircleRight className="arrow-circle" onClick={() => {setWork(prevWork => prevWork + 1)}}/>
      </div>
    </section>
  )
}

export default Works