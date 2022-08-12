function scuberGreetingForFeet(feeRide){
  // Write your code here!
if (feeRide <= 400){
  return 'This one is on me!';
} else if(feeRide > 2000 && feeRide <= 2500){
  return 'I will gladly take your thirty bucks.';
}else if( feeRide > 2500){
  return 'No can do.'
}
}
  


function ternaryCheckCity(place){
  // Write your code here!
  return place === 'NYC'? 'Ok, sounds good.' : 'No go.';
}



function switchOnCharmFromTip(thanks){
  // Write your code here!
switch(thanks){
  case 'generous':
    return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
      case 'thanks for everything':
        return 'Bye.'
}
}