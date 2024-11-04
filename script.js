console.log("Te damos la bienvenida a la selección de campeones!")


let campeonesDisponibles = ""
let campeonSeleccionado = ""

function seleccionarCampeon(){ 
    campeonesDisponibles = prompt("Para este simulador, solo podrás elegir entre estos 3 campeones. Ingresa el número correspondiente al campeón que quieras utilizar \n1. Dr. Mundo\n2. Karthus\n3. Samira")

    while (campeonesDisponibles !== "1" && campeonesDisponibles !== "2" && campeonesDisponibles !== "3"){
        campeonesDisponibles = prompt("Elige un campeón (ingresa el número correspondiente):\n1. Dr. Mundo\n2. Karthus\n3. Samira")
    }
    if (campeonesDisponibles === "1"){ campeonSeleccionado = "Dr. Mundo"}
    else if (campeonesDisponibles === "2") {campeonSeleccionado = "Karthus"}
    else {campeonSeleccionado = "Samira"}
}

seleccionarCampeon()

//Estadisicas vacias de campeones
let vida = 0
let regeneracionVida = 0
let armadura = 0
let resistenciaMagica = 0
let dmgAP = 0
let dmgAD= 0
let mana = 0
let aceleracionHabilidad = 0
let velocidadAtaque = 0
let probGolpeCritico = 0



if (campeonSeleccionado === "Dr. Mundo") {  
    vida = 623
    regeneracionVida = 9
    armadura = 32
    resistenciaMagica = 29
    dmgAD = 68
    aceleracionHabilidad = 8
    velocidadAtaque = 0.67
}else if (campeonSeleccionado === "Karthus"){
    vida = 630
    regeneracionVida = 7
    armadura = 21
    resistenciaMagica = 30
    dmgAD = 46
    aceleracionHabilidad = 8
    dmgAP = 12
    velocidadAtaque = 0.63
    mana = 467
}else if (campeonSeleccionado === "Samira"){
    vida = 640
    regeneracionVida = 3
    armadura = 26
    resistenciaMagica = 30
    dmgAD = 64
    aceleracionHabilidad = 8
    velocidadAtaque = 0.66
    mana = 349
}


const mostrarEstadisticas = () => { 
    return(
    "\n Vida: " + vida
    + "\n Regeneración de vida: " + regeneracionVida
    +  "\n Armadura: " + armadura
    + "\n Resistencia Mágica: " + resistenciaMagica
    + "\n Daño Mágico: " + dmgAP
    + "\n Daño Físico: " + dmgAD
    + "\n Aceleración de Habilidad: " + aceleracionHabilidad + "%"
    + "\n Velocidad de ataque: " + velocidadAtaque 
    + "\n Maná: " + mana
    + "\n Probabilidad de golpe crítico: " + probGolpeCritico + "%"
    )
}



console.log("Seleccionaste a: " + campeonSeleccionado + "\n \n Sus estadísticas son: " + mostrarEstadisticas() )


let oro = 4000
let itemsDisponibles = ""
let itemSeleccionado = ""

function seleccionarItem (){
    itemsDisponibles = prompt("Hay un bug en la partida: inicias con 4000 de oro y solo hay 3 objetos disponibles en la tienda. \n Elige uno:  \n1. Escarcha eterna. Precio: 3400\n2. Armadura Pétrea. Precio: 3300 \n3. Viento huracanado 2900")
    while (itemsDisponibles !== "1" && itemsDisponibles !== "2" && itemsDisponibles !== "3"){
        itemsDisponibles = prompt("Elige un objeto disponible en la tienda (ingresa el número correspondiente):\n1. Escarcha eterna. Precio: 3400\n2. Armadura Pétrea. Precio: 3300 \n3. Fuerza del viento. Precio: 2900")
    }
    if (itemsDisponibles === "1"){ 
        itemSeleccionado = "Escarcha eterna"
        dmgAP = dmgAP + 80
        vida = vida + 250
        mana = mana + 600
        aceleracionHabilidad = aceleracionHabilidad + 20
    }
    else if (itemsDisponibles === "2") {
        itemSeleccionado = "Armadura Pétrea"
        aceleracionHabilidad = aceleracionHabilidad + 15
        armadura = armadura + 60
        resistenciaMagica = resistenciaMagica + resistenciaMagica
    }
    else {
        itemSeleccionado = "Fuerza del viento"
        dmgAD = dmgAD + 55
        velocidadAtaque = velocidadAtaque + (velocidadAtaque * (20 / 100));
        probGolpeCritico = probGolpeCritico + 20
    }
}

seleccionarItem()




console.log("Seleccionaste: " + itemSeleccionado + "\nTus estadísticas cambiaron: \n " + mostrarEstadisticas() ) 