const daysEl = document.getElementById("days");
                        const secondsEl = document.getElementById("seconds");
const hoursEl = document.getElementById("hours");
                     const minutesEl = document.getElementById("minutes");




const Birth = "22 September 2021";
function birthdate () {const newYearsDate = new Date(Birth);
	 const currentDate  = new Date();
    const totalseconds = (newYearsDate-currentDate)/1000;
const days = Math.floor(totalseconds/3600/24);
   const seconds = Math.floor(totalseconds)%60;
    const hours = Math.floor((totalseconds / 3600) % 24);
    const minutes = Math.floor(totalseconds / 60) % 60;



   

daysEl.innerHTML = days;
secondsEl.innerHTML = seconds;
minutesEl.innerHTML = minutes;
hoursEl.innerHTML = hours;

	
}



birthdate();
setInterval(birthdate,1000);