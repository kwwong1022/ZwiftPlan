const workoutPlanSubSession = document.querySelector(".workout-plan-session-sub");
let workoutIsEmpty = true;

let checkWorkoutIsEmpty = () => {
    workoutIsEmpty = planCardArray.length === 1 ? true : false;
    updateWorkoutSub();
}

let updateWorkoutSub = () => {
    while (workoutPlanSubSession.lastElementChild) {
        workoutPlanSubSession.removeChild(workoutPlanSubSession.lastElementChild);
    }

    if (workoutIsEmpty) {
        workoutPlanSubSession.innerText = "";
    } else {
        let workoutTitle = document.createElement("h4");
        workoutTitle.innerText = "Workout info:";
        workoutTitle.style.fontSize = "1.2rem";
        workoutTitle.style.fontWeight = "400";
        workoutTitle.style.padding = ".4rem 0 .7rem";
        workoutPlanSubSession.appendChild(workoutTitle);

        // wu func
        if (hasWM) {
            let newDiv = document.createElement("div");
            let title = document.createElement("h4");
            title.innerText = `Warm up\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa015m 00s`;
            title.style.fontWeight = "400";
            title.style.paddingBottom = ".5rem";
            newDiv.appendChild(title);
            workoutPlanSubSession.appendChild(newDiv);
        }

        for (let i = 1; i < planCardArray.length; i++) {
            let element = planCardArray[i];

            let currPowerPercentage = element.power / userFTP;
            let currZone;
            let hour = Math.floor(element.durationMinute / 60) < 10 ? `0${Math.floor(element.durationMinute / 60)}` : Math.floor(element.durationMinute / 60);
            let min = Math.floor(element.durationMinute % 60) < 10 ? `0${Math.floor(element.durationMinute % 60)}` : Math.floor(element.durationMinute % 60);
            let sec = Math.floor(element.durationSecond) < 10 ? `0${Math.floor(element.durationSecond)}` : Math.floor(element.durationSecond);

            if (currPowerPercentage < 0.56) {
                currZone = "1"
            } else if (currPowerPercentage >= 0.56 && currPowerPercentage < 0.76) {
                currZone = "2"
            } else if (currPowerPercentage >= 0.76 && currPowerPercentage < 0.88) {
                currZone = "3"
            } else if (currPowerPercentage >= 0.88 && currPowerPercentage < 0.95) {
                currZone = "4"
            } else if (currPowerPercentage >= 0.95 && currPowerPercentage < 1.05) {
                currZone = "5"
            } else if (currPowerPercentage >= 1.05 && currPowerPercentage < 1.55) {
                currZone = "6"
            } else {
                currZone = "7"
            }

            let newDiv = document.createElement("div");
            let title = document.createElement("h4");
            if (element.isFreeride) {
                if (hour < 1) {
                    title.innerText = `Freeride\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0${min}m ${sec}s`;
                } else {
                    title.innerText = `Freeride\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0${hour}h ${min}m ${sec}s`;
                }
            } else {
                if (hour < 1) {
                    title.innerText = `Zone ${currZone} - ${element.power}w\xa0\xa0\xa0\xa0\xa0\xa0${min}m ${sec}s`;
                } else {
                    title.innerText = `Zone ${currZone} - ${element.power}w\xa0\xa0\xa0\xa0\xa0\xa0${hour}h ${min}m ${sec}s`;
                }
            }
            title.style.fontWeight = "400";
            title.style.paddingBottom = ".5rem";
            newDiv.appendChild(title);
            workoutPlanSubSession.appendChild(newDiv);
        }

        //cd func
        if (hasCD) {
            let newDiv = document.createElement("div");
            let title = document.createElement("h4");
            title.innerText = `Cold down\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa015m 00s`;
            title.style.fontWeight = "400";
            title.style.paddingBottom = ".5rem";
            newDiv.appendChild(title);
            workoutPlanSubSession.appendChild(newDiv);
        }
    }
}

/*
.break-line{
    height: .8px;
    width: 100%;
    margin-top: 2.5rem;
    background-color: rgb(194, 194, 194);
} */