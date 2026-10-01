function CalorieCompare ({food1, food2, cal1, cal2}) {
  let displayMessage;

  if (cal1 < cal2) displayMessage = `Lower Calorie Option: ` + food1;
  else if (cal1 > cal2) displayMessage = `Lower Calorie Option: ` + food2;
  else displayMessage = 'Both foods have the same calories';
}

function App() {
  return(
    <>
    </>
  )
}

export default App;