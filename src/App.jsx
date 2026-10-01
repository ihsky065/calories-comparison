function CalorieCompare ({food1, food2, cal1, cal2}) {
  let displayMessage;

  if (cal1 < cal2) displayMessage = `Lower Calorie Option: ` + food1;
  else if (cal1 > cal2) displayMessage = `Lower Calorie Option: ` + food2;
  else displayMessage = 'Both foods have the same calories';

  return(
    <>
    <h3>{food1} ({cal1} kcal) vs {food2} ({cal2} kcal)</h3>
    <p>{displayMessage} </p>
    </>
  )
}

function App() {
  return(
    <>
    <h2>Calorie Comparisons</h2>
    <CalorieCompare food1={'Apple'} cal1={95} food2={'Banana'} cal2={105}/>
    <CalorieCompare food1={'Rice'} cal1={206} food2={'Quinoa'} cal2={222}/>
    </>
  )
}

export default App;