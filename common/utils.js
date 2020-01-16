// Add zero in front of numbers < 10
export function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

export function monthName(i){
  if(i == 0){
    return "Jan";
  } else if(i == 1){
    return "Feb";
  } else if(i == 2){
    return "Mar";
  } else if(i == 3){
    return "Apr";
  } else if(i == 4){
    return "May";
  } else if(i == 5){
    return "Jun";
  } else if(i == 6){
    return "Jul";
  } else if(i == 7){
    return "Aug";
  } else if(i == 8){
    return "Nov";
  } else if(i == 9){
    return "Oct";
  } else if(i == 10){
    return "Nov";
  } else {
    return "Dec";
  }
}