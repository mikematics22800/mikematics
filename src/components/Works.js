import { useEffect, useState } from "react"
import cryptomatics from "../images/cryptomatics.png"
import weatherboy from "../images/weatherboy.png"
import cyclopedia from "../images/cyclopedia.png"
import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material"
import github from "../images/github.png"

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

  const ghUrl = "https://github.com/mikematics22800/"
  const liveUrl = "https://mikematics22800.github.io/"

  return (
    <section id="works">
      {work == 1 && 
        <div className="work">
          <div className="work-desc">
            <header>
              <h1 className="title works-title">Cryptomatics</h1>
              <a href={`${ghUrl}Cryptomatics`}>
                <img src={github} className="github-icon"/>
              </a>
            </header>
            <p>
              A comprehensive web application designed to provide real-time information on the cryptocurrency exchange. 
              It features detailed information on the top 100 ranking coins, including their current prices, market caps, and trading volumes. 
              The application also includes interactive and stylized visuals, such as charts and graphs, to help users better understand market trends and make informed decisions. 
              Users can track their favorite cryptocurrencies and stay updated with the latest market movements.            
            </p>
          </div>      
          <a href={`${liveUrl}Cryptomatics`}>
            <img src={cryptomatics}/>
          </a>  
        </div>
      }
      {work == 2 && 
        <div className="work">
          <div className="work-desc">
            <header>
              <h1 className="title works-title">Weatherboy</h1>
              <a href={`${ghUrl}Weatherboy`}>
                <img src={github} className="github-icon"/>
              </a>
            </header>
            <p>
              A comprehensive web application that provides weather conditions and forecasts for the user's current location as well as cities across the world. 
              Weatherboy displays detailed weather information, including temperature, humidity, wind speed, and precipitation. 
              The searchbar is built with locational autocomplete functionality, allowing users to find cities with ease and precision. 
              Additionally, the app includes an interactive map which displays satellite derived weather data across the globe.
            </p>
          </div>   
          <a href={`${liveUrl}Weatherboy`}>
            <img src={weatherboy}/>
          </a>
        </div>
      }
      {work == 3 && 
        <div className="work">
          <div className="work-desc">
            <header>
              <h1 className="title works-title">Cyclopedia</h1>
              <a href={`${ghUrl}Cyclopedia`}>
                <img src={github} className="github-icon"/>
              </a>
            </header>
            <p>
              A comprehensive web application that displays official data from the National Hurricane Center on all tropical cyclones recorded in the Atlantic basin since 1851.
              Provided is an interactive map which displays detailed track information for all storms of a selected season. 
              Charts are provided which display various statistics for each storm, as well as the cumulative activity and impacts of each season.
              Users can click on individual storm tracks to get more detailed information about each storm, including its category, wind speeds, and pressure readings at various points in its lifecycle.
            </p>
          </div>   
          <a href={`${liveUrl}Cyclopedia`}>
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