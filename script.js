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
        exec.style.animation = `changeToLime 0.3s forwards`;
    });

    exec.addEventListener(`mouseleave`, () => {
        exec.style.animation = `changeToWhite 0.3s forwards`;
    });

    exec.onclick = () => {
        Console.value = ``;
        Exec();
    };

    const Console = document.getElementById(`Console`);
    document.body.appendChild(Console);

    console.log = (log) => {
        Console.value += `\n${log}`;}

    console.clear = () => {
        Console.value = `[console was cleared]`;
    }
    
    console.dir = (log) => {
        Console.value += `\n${log}`;
    }

    console.warn = (log) => {
        Console.value += `\n[(⚠️) ${log}]`;
    }

    console.error = (log) => {
        Console.value += `\n[(❌) ${log}]`;
    }

    console.info = (log) => {
        Console.value += `\n[(i) ${log}]`;
    }
}
