import data from "./data.json";

const imgButton = document.querySelector(".mybalance-container > img");

if(imgButton !== null){
    // adds an event listner click for the logo/button
    // callback will be the loadrandom number
    imgButton.addEventListener("click",() => LoadRandom());
}

function GetDataFromJson():Array<number>{
    // creates an array of numbers
    const expensesData:Array<number> = data.map((p) => p.amount);
    return expensesData;
}

function SetData(array: Array<number>){

    const maxNum = Math.max(...array);
    
    // gets the day of the week. getday returns sunday as the first day so it has to be adjusted
    let day = (new Date).getDay();
    day = day -1;
    if (day == -1) day = 6;
    
    // loops 7 times to populate data

    for (let index = 0; index <= 6; index++) {
        const node = document.getElementsByClassName("data-container__day");
        const moneyValueNode = node[index].querySelector("div > span");

        //sets the value for the label containing the money spent
        if (node !== null && moneyValueNode !== null) {
            moneyValueNode.innerHTML = "$" + array[index].toPrecision(4).toString();
        }

        const bar = node[index].querySelector(".graph-bar") as HTMLElement;
        //calculates the heigth for each bar based on the highest number on the array
        const calcH = ((9.375 * array[index])/maxNum);
        if (bar !== null) bar.style.height = calcH.toString() +"rem";
        
        //changes the color of the bar if it corresponds to the actual day of the week
        const filler = bar.querySelector(".graph-bar__filler") as HTMLElement;
        if (day == index && filler !== null) filler.style.backgroundColor = "#76B5BC";
          
    }
}

function LoadData(){
    //sets data from the Json file
    SetData(GetDataFromJson());
}
function LoadRandom(){
    //Sets data generating a random array first
    SetData(Array.from({length: 7}, () => Math.random() * 100));
}


LoadData();

