import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import PieChart from './Charts/PieChart.js';
import MapChart from './Charts/MapChart.js';
import myCountries from './data/MyCountries';
import mapWorld from './data/MapWorld.js';
import mapUnitedStates from './data/MapUnitedStates.js';
import myStates from './data/MyStates.js';
import championsData from './data/soccerNationalities/soccerNationalities-champions.js';
import europaData from './data/soccerNationalities/soccerNationalities-europa.js';
import mlsData from './data/soccerNationalities/soccerNationalities-mls.js';
import bundesligaData from './data/soccerNationalities/soccerNationalities-bundesliga.js';
import premierData from './data/soccerNationalities/soccerNationalities-premier.js';
import ligue1Data from './data/soccerNationalities/soccerNationalities-ligue1.js';
import serieaData from './data/soccerNationalities/soccerNationalities-serieA.js';
import laligaData from './data/soccerNationalities/soccerNationalities-laLiga.js';

require('./App.css');
require('./ChartWrapper.css');

//can map through the nationalities bc only one thing different passed in 
//data so mapping is possible
const soccerNationalitiesData = [
  {name:'Champions League',data:championsData},
  {name:'Europa League',data:europaData},
  {name:'Bundesliga',data:bundesligaData},
  {name:'La Liga',data:laligaData},
  {name:'Premier League',data:premierData},
  {name:'Ligue 1',data:ligue1Data},
  {name:'Serie A',data:serieaData},
  {name:'MLS',data:mlsData}
]

class App extends Component {
  render() {
    return (
      <div class="summary-wrapper">
      <div class="summary-card">
        <MapChart
          pointFormat={'{point.name}'}
          dataColor={'#FFFFFF'}
          mapType={mapWorld}
          mapData={myCountries}
          joinByVal={['hc-key','code']}
          mapTitle={'My Countries'}
          mapSubtitle={'highlighted countries that I have visited'}
        />
      </div>
      <div class="summary-card">
        <MapChart
          pointFormat={'{point.name}'}
          dataColor={'#FFFFFF'}
          mapType={mapUnitedStates}
          mapData={myStates}
          joinByVal={['postal-code','code']}
          mapTitle={'My States'}
          mapSubtitle={'highlighted states that I have visited in United States'}
        />
      </div>
      {soccerNationalitiesData.map( (datum, idx) => {
        return (
        <div class="summary-card">
          <MapChart
            pointFormat={'{point.name}: {point.value}'}
            dataColor={'#FFFFFF'}
            mapType={mapWorld}
            mapData={datum.data}
            joinByVal={['hc-key','code']}
            mapTitle={`${datum.name} nationalities`}
            mapSubtitle={'highlighted countries based on number of players from that nation'}
          />
        </div> )})}
     </div>
    );
  }
}

//for nationalities and other stuff:
  //pointFormat={'{point.name}: {point.value}'}

//'#FFFFFF'
export default App;

/*

IDEAS FOR WHAT COULD GET ADDED:

-Maps:
  -soccer nationalities, can use the objects created from python code
  -population
  -charts in combination maps (different chart amount of data for pie charts - with like other?)
  -US states map
  -see if theres a Germany one! There is!
  -maybe transition so I am able to start grabbing data! --- use python stuff for it!
  -possibly when clicking on a state or country it goes to the wikipedia page. May need to use the 
   country data (with id and full name) to implement into wikipedia. It would likely be a pretty simple
   link thing into it too
-Design:
  -CSS for padding (like add the summary card)
  -Drop down to do different types of maps
    -Basically clicking on certain part of drop down prop will trigger different parts, could
     be down an array, or a simple if else chain?
    -for a pull down drop down (differen from the main menu) there will be a more dynamic thing, 
     not as much of a specific this and that code
  -tab bar at the top for categories, and drop downs within that 
-Issues:
  -country vs continent way of passing in series
  -for Navigation bar:
    -https://forum.freecodecamp.org/t/react-onclick-get-li-clicked-solved/68112
*/











