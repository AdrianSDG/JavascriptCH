console.log("Clase 8 Entrega");

const arrayCoach = [{coach: "Marcel", tarifa: 2000, estilo:"HIT y pesas", nivel: 3},
{ coach: "Samantha", tarifa: 1200, estilo:"HIT", nivel: 1},
{ coach: "Brandon", tarifa: 1500, estilo:"HIT y pesas", nivel: 1},
{ coach: "Olivia", tarifa: 1700, estilo:"funcional y pesas", nivel: 2},
{ coach: "Robert", tarifa: 1600, estilo:"HIT", nivel: 2},
{ coach: "Max", tarifa: 1900, estilo:"funcional y pesas", nivel: 1},
{ coach: "Michelle", tarifa: 1300, estilo:"pesas", nivel: 1},
{ coach: "Pedro", tarifa: 1300, estilo:"pesas", nivel: 2},
{ coach: "Gabriel", tarifa: 1600, estilo:"HIT y pesas", nivel: 2}];
console.table(arrayCoach);

/*for (const trainer of arrayCoach) {
    let grilla = document.createElement("div");
    grilla.innerHTML = `<h3> Coach: ${trainer.coach}</h3>
    <p> Tarifa: ${trainer.tarifa}</p>
    <b> Estilo ${trainer.estilo}</b>`;
    document.body.appendChild(grilla);
    }*/

    const hit = [{ coach: "Samantha", tarifa: 1200, estilo:"HIT", nivel: 1},
    { coach: "Robert", tarifa: 1600, estilo:"HIT", nivel: 2},];
    const hitYpes =[{coach: "Marcel", tarifa: 2000, estilo:"HIT y pesas", nivel: 3},
    { coach: "Brandon", tarifa: 1500, estilo:"HIT y pesas", nivel: 1},
    { coach: "Gabriel", tarifa: 1600, estilo:"HIT y pesas", nivel: 2}];
    const pesas = [{ coach: "Michelle", tarifa: 1300, estilo:"pesas", nivel: 1},
    { coach: "Pedro", tarifa: 1300, estilo:"pesas", nivel: 2}];
    const funcPesa = [{ coach: "Olivia", tarifa: 1700, estilo:"funcional y pesas", nivel: 2},
    { coach: "Max", tarifa: 1900, estilo:"funcional y pesas", nivel: 1},];

    
    let seleccion = prompt("Elije un estilo");
    if(seleccion === "HIT"){
        for (const trainer of hit){
            let seleccion = document.createElement("div");
    seleccion.innerHTML = `<h3> Coach: ${trainer.coach}</h3>
    <p> Tarifa: ${trainer.tarifa}</p>
    <b> Estilo ${trainer.estilo}</b>`;
    document.body.appendChild(seleccion);
    }}else if(seleccion === "HIT y pesas"){
        for (const trainer of hitYpes){
            let seleccion = document.createElement("div");
    seleccion.innerHTML = `<h3> Coach: ${trainer.coach}</h3>
    <p> Tarifa: ${trainer.tarifa}</p>
    <b> Estilo ${trainer.estilo}</b>`;
    document.body.appendChild(seleccion);
    }}else if(seleccion === "pesas"){
        for (const trainer of pesas){
            let seleccion = document.createElement("div");
    seleccion.innerHTML = `<h3> Coach: ${trainer.coach}</h3>
    <p> Tarifa: ${trainer.tarifa}</p>
    <b> Estilo ${trainer.estilo}</b>`;
    document.body.appendChild(seleccion);
    }}else if(seleccion === "funcional y pesas"){
        for (const trainer of funcPesa){
            let seleccion = document.createElement("div");
    seleccion.innerHTML = `<h3> Coach: ${trainer.coach}</h3>
    <p> Tarifa: ${trainer.tarifa}</p>
    <b> Estilo ${trainer.estilo}</b>`;
    document.body.appendChild(seleccion);
    }}else{alert("Ingresa un estilo valido")}

