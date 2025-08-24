import data from "./data.json" with {type: "json"};

function Exec(){
    const Note =
    `
Welcome to Online JS Compiler!
Created by Azareel James, if there is
a bug or a problem, go to
https://github.com/AzareelJames/
and add a new issue.
    `;

    try{
        eval(document.getElementById(`script`).value);
    }
    catch(E){
        console.log(`[Uncaught ${E}]`);
    }
}

{
    const exec = document.getElementById(`exec`);
    
    exec.addEventListener(`mouseover`, () => {
        exec.style.animation = `changeToLime ${data[`seconds button color changes`]}s forwards`;
    });

    exec.addEventListener(`mouseleave`, () => {
        exec.style.animation = `changeToWhite ${data[`seconds button color changes`]}s forwards`;
    });

    exec.onclick = () => {
        Console.innerText = ``;
        Exec();
    };

    const Console = document.createElement(`div`);
    document.body.appendChild(Console);

    console.log = (log) => {
        Console.innerText += `\n${log}`;}

    console.clear = () => {
        Console.innerText = `[console was cleared]`;
    }
    
    console.dir = (log) => {
        Console.innerText += `\n${log}`;
    }

    console.warn = (log) => {
        Console.innerText += `\n[(⚠️) ${log}]`;
    }

    console.error = (log) => {
        Console.innerText += `\n[(❌) ${log}]`;
    }

    console.info = (log) => {
        Console.innerText += `\n[(i) ${log}]`;
    }
}