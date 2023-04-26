import data from "./data.json";

const imgButton = document.querySelector(".mybalance-container > img");

if(imgButton !== null){
    // adds an event listner click for the logo/button
    // callback will be the loadrandom number
    imgButton.addEventListener("click",() => LoadRandom());
}

function GetDataFromJson():Array<number>{
    // creates an array of numbers
    let expensesData:Array<number> = [];
    // pushes each value from the json file into the array
    for (let index = 0; index <= 6; index++) {
        expensesData.push(data[index].amount);
    }
    //returns the array
    return expensesData;
}


function GenerateRandomNumbers():Array<number>{
    // creates an array of numbers
    let expensesDataRandom:Array<number> = [];
    // pushes 7 random numbers into the array (one for every day of the week)
    for (let index = 0; index <= 6; index++) {
        expensesDataRandom.push(Math.random()*100);
    }
    // returns the array
    return expensesDataRandom;
}

function GetHighestNum(array:Array<number>){
    let maxNum = 0;

    //iterates through the array and returns the highest number
    array.forEach(element => {

        if (element > maxNum){
            maxNum = element;
        }
    });
    return maxNum;
}

function SetData(array: Array<number>){

    const maxNum = GetHighestNum(array);
    
    // gets the day of the week. getday returns sunday as the first day so it has to be adjusted
    let day = (new Date).getDay();
    day = day -1;
    if (day == -1){
        day = 6;
    }

    // loops 7 times to populate data

    for (let index = 0; index <= 6; index++) {
        const node = document.getElementsByClassName("data-container__day");
        const moneyValueNode = node[index].querySelector("div > span");

        //sets the value for the label containing the money spent
        if (node !== null && moneyValueNode !== null){
            moneyValueNode.innerHTML = "$" + array[index].toPrecision(4).toString();
        }

        const bar = node[index].querySelector("div");
        //calculates the heigth for each bar based on the highest number on the array
        const calcH = ((9.375 * array[index])/maxNum);
        if (bar !== null){
            bar.style.height = calcH.toString() +"rem";
        }
        //changes the color of the bar if it corresponds to the actual day of the week
        if (day == index && bar !== null){
            bar.style.backgroundColor = "#B4E0E5";
        }    
    }
}


function LoadData(){
    //sets data from the Json file
    SetData(GetDataFromJson());
}
function LoadRandom(){
    //Sets data generating a random array first
    const randomArray = GenerateRandomNumbers();
    SetData(randomArray);
}


LoadData();

