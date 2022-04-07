function calcuteTime(from, to, Speed) {
    //Convert to format HH:MM:SS
    function padTo2Digits(num) {
      return num.toString().padStart(2, "0");
    }

    //Variables
    let hour,
      minute,
      second,
      time = "";
    let distance = [
      { from: "mashhad", to: "tehran", distance: 400 },
      { from: "gorgan", to: "tehran", distance: 200 },
      { from: "tehran", to: "yazd", distance: 400 },
      { from: "yazd", to: "kerman", distance: 100 },
      { from: "tehran", to: "tabriz", distance: 300 },
      { from: "tabriz", to: "zanjan", distance: 150 },
      { from: "gorgan", to: "sari", distance: 120 },
      { from: "sari", to: "rasht", distance: 180 },
      { from: "gorgan", to: "maz", distance: 120 },
    ];
   let toMine=[
    ];

    //To add another city
    for (let i = 0; i < distance.length; i++) {
      for (let j = 0; j < distance.length; j++) {
          if(distance[i].to == distance[j].from) {
              toMine.push({from:distance[i].from,to:distance[j].to,distance:distance[i].distance+distance[j].distance})
          }
      }
  
    }
    //Add non-existent cities to the list of cities
   distance= distance.concat(toMine)

  //City Search
    for (let i = 0; i < distance.length; i++) {
      if (from == to) {
        alert("You are at the destination");
        break;
      } else if (from == distance[i].from && to == distance[i].to) { 
        hour = distance[i].distance / Speed;
        minute = (hour - Math.floor(hour)) * 60;
        second = (minute - Math.floor(minute)) * 60;
        hour = Math.floor(hour);
        minute = Math.floor(minute);
        second = Math.floor(second);
        time = padTo2Digits(hour) + ":" + padTo2Digits(minute) + ":" + padTo2Digits(second);
        alert(time);
        break;
      }
    }
  }
  let from = prompt("Enter Origin "),
    to = prompt("Enter destination "),
    Speed = prompt("Enter Speed ");
  
  calcuteTime(from, to, Speed);
  