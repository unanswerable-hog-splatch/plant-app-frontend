import './calendarDay.css'
// import 
import useHook from '../../hooks/useHook'
import DayModal from '../dayModal/DayModal'
import { useState } from "react";
import { Button } from "antd";
/*
-Wrap each one in a button that can be clicked. 
  --on click each button opens a modal for that specfic day. 
*/
export default function CalendarDay({ day, plantList }) {
  const { selectIcon } = useHook()
  const plantListNoNull = []

  const [ calendarDayVisible, setCalendarDayVisible] = useState(false);

  //added mapping up here to create new list with only plants in it and no nulls
  for (let i=0; i<plantList.length; i++) {
    if (typeof(plantList) !== 'number') {
      plantListNoNull.push(plantList[i])
    }
  }
  return (
    <>
      <div className='calendar-day'>
      <Button className="day-modal-button" type="primary" onClick={() => {
          setCalendarDayVisible(true);
          return(
            <DayModal plantList={plantListNoNull} day={day}/>
          )}}>

        <div className="calendar-day-flex"> 
        {/* Changed the mapping of the plants to only grab the ones that have plants populating. Determined the type outside of loop */}
           {plantListNoNull.slice(0,3).map(plant => {return (<img alt={plant[0].plantIcon} src={selectIcon(plant[0].plantIcon)}/>)})}
            
            </div>

          <div className='plaque'>
            <p>{day}</p> 
          </div>{/*day should be on the bottom of the flex box so that the plants are sitting on top of each number/filler like a shelf so all other code goes above*/}
       
      </Button>
      </div>
      
    </>

  )
}
{/*

  -add a button tag around each
    -- CONDITIONS:
      -Current Date - Last Watering Date % WateringFrequency = 0 
      -if (Fertilize = true) => Current Date - Last Fertilize Date % FertilizingFrequency = 0  
    --<button>
      --<div> with dots indicating if need water or fertiziler. </div>
        --dots with be determined by the same conditions as the plant. 
      --<div> with plant icon  
*/}


{/* Add div tag around date */}
/*
  STYLING
    -add another div around the calendar day data so that we can add a border around the number 
*/
