
function scuberGreetingForFeet(ride){
 
  if (ride <= 400){
    return 'This one is on me!'
  }
  else if (ride > 2000 && ride < 2500){
    return 'I will gladly take your thirty bucks.'
  }
  else
    return 'No can do.'
  }
scuberGreetingForFeet()
  


function ternaryCheckCity(city){
  return (city === 'NYC') ? ("Ok, sounds good.") : ('No go.')
  }
ternaryCheckCity()

function switchOnCharmFromTip(tip){
  
  switch (tip) {
    case tip = "generous":
      return "Thank you so much."      
      break;
    case tip = 'not as generous':
      return "Thank you."
      break
    default: 
    return 'Bye.'
      break;
  }
}
switchOnCharmFromTip()