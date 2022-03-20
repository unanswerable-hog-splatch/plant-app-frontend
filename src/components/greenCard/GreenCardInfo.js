

export default function GreenCardInfo ({plant}) {

    const givenTime = (date) => new Date(date * 1000).toLocaleDateString("en-US")


    return (
        <div>
            <h1>{plant.nickname}</h1>
            <h2>{plant.species}</h2>
            <h3>RESIDENT SINCE: {givenTime(plant.dateAdded)}</h3>
            <h3>{plant.category.toUpperCase()}</h3>
            <h3>Last Watering: {givenTime(plant.lastWaterDate)}</h3>
            <h3>Water Frequency: Every {plant.waterFrequency} days</h3>
        </div>
    )
}