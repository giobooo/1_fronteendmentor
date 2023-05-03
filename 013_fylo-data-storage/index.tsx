async function SetProgressBar(){
    const progressBar = document.querySelector(".progress-bar__progress") as HTMLElement;
    progressBar.style.width = "81.5%";
}

setTimeout(()=>SetProgressBar(), 400);