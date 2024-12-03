import cryptomatics from "../assets/cryptomatics.png"
import weatherboy from "../assets/weatherboy.png"
import cyclopedia from "../assets/cyclopedia.png"
import github from "../assets/github.png"

const Works = () => {

  const ghUrl = "https://github.com/mikematics22800/"
  const liveUrl = "https://mikematics22800.github.io/"

  return (
    <section id="works">
      <div className="work">
        <div className="work-desc">
          <header>
            <h1>Cyclopedia</h1>
            <a href={`${ghUrl}Cyclopedia`}>
              <img src={github}/>
            </a>
          </header>
          <p>
            A React app that displays official data from the National Hurricane Center on all tropical cyclones recorded in the Atlantic and Pacific basin since 1851 and 1949 respectively.
            Data is dislayed via an interactive map with detailed track information for all storms of a selected basin and year. 
            Charts are provided which display various statistics for each storm, as well as the cumulative activity and impacts of each season.
          </p>
        </div>   
        <a href={`${liveUrl}Cyclopedia`}>
          <img src={cyclopedia}/>
        </a>
      </div>
      <div className="work">
        <div className="work-desc">
          <header>
            <h1>Cryptomatics</h1>
            <a href={`${ghUrl}Cryptomatics`}>
              <img src={github}/>
            </a>
          </header>
          <p>
            A React app designed to provide real-time information on the cryptocurrency exchange. 
            It features detailed information on the top 100 ranking coins, including their current prices, market caps, and trading volumes. 
            The application also includes interactive and stylized visuals, such as charts and graphs, to help users better understand market trends and make informed decisions. 
            Users can track their favorite cryptocurrencies and stay updated with the latest market movements.            
          </p>
        </div>      
        <a href={`${liveUrl}Cryptomatics`}>
          <img src={cryptomatics}/>
        </a>  
      </div>
      <div className="work">
        <div className="work-desc">
          <header>
            <h1>Weatherboy</h1>
            <a href={`${ghUrl}Weatherboy`}>
              <img src={github} className="github-icon"/>
            </a>
          </header>
          <p>
            A React app that provides weather conditions and forecasts for the user's current location as well as cities across the world. 
            Weatherboy displays detailed weather information, including temperature, humidity, wind speed, and precipitation. 
            The searchbar is built with locational autocomplete functionality, allowing users to find cities with ease and precision. 
            Additionally, the app includes an interactive map which displays satellite derived weather data across the globe.
          </p>
        </div>   
        <a href={`${liveUrl}Weatherboy`}>
          <img src={weatherboy}/>
        </a>
      </div>
    </section>
  )
}

export default Works