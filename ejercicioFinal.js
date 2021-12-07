const ligaSantander = [
  {
    class: 1,
    name: "Real Madrid",
    winner: true,
    mannager: "Carlo Ancelotti",
    bestPlayers: ["Vinicius", "Benzema"],
    points: 30,
  },
  {
    class: 8,
    name: "Athletic",
    winner: true,
    mannager: "Marcelino",
    bestPlayers: ["Muniain", "Iñaki Williams", "Iñigo Martinez"],
    points: 20,
  },
  {
    class: 4,
    name: "Atletico de Madrid",
    winner: true,
    mannager: "Cholo Simeone",
    bestPlayers: ["Carrasco", "Luis Suarez", "Correa"],
    points: 27,
  },
  {
    class: 5,
    name: "Betis",
    winner: true,
    mannager: "Manuel Pellegrini",
    bestPlayers: ["Fekir", "Juanmi", "Canales"],
    points: 27,
  },
  {
    class: 3,
    name: "Sevilla",
    winner: true,
    mannager: "Julen Lopetegi",
    bestPlayers: ["Acuña"],
    points: 28,
  },
  {
    class: 6,
    name: "Rayo Vallecano",
    winner: false,
    mannager: "Andoni Iraola",
    bestPlayers: [
      "Alvaro Garcia",
      "Trejo",
      "Isi Palazon",
      "Comesaña",
      "Fran Garcia",
      "Dimitrievski",
    ],
    points: 24,
  },
  {
    class: 2,
    name: "Real Sociedad",
    winner: true,
    mannager: "Imanol Alguacil",
    bestPlayers: ["Mikel Merino", "Aritz", "Oyarzabal", "Le Normand"],
    points: 29,
  },
  {
    class: 9,
    name: "Espanyol",
    winner: false,
    mannager: "Vicente Moreno",
    bestPlayers: ["Raul de Tomas", "Embarba", "Diego Lopez", "Pedrosa"],
    points: 20,
  },
  {
    class: 7,
    name: "FC Barcelona",
    winner: true,
    mannager: "Xavi Hernandez",
    bestPlayers: ["Depay", "Busquets"],
    points: 23,
  },
];

//Crearemos una nueva variable por cada jornada//

const jornada16 = [
  {
    match: 1,
    homeTeam: "Granada",
    visitingTeam: "Alaves",
    winner: "Granada"  
  },
  {
    match: 2,
    homeTeam: "Sevilla",
    visitingTeam: "Villarreal",
    winner: "Sevilla"  
  },
  {
    match: 3,
    homeTeam: "FC Barcelona",
    visitingTeam: "Betis",
    winner: "Betis"  
  },
  {
    match: 4,
    homeTeam: "Atletico de Madrid",
    visitingTeam: "Mallorca",
    winner: "Mallorca"  
  },
  {
    match: 5,
    homeTeam: "Real Sociedad",
    visitingTeam: "Real Madrid",
    winner: "Real Madrid"  
  },
  {
    match: 6,
    homeTeam: "Rayo Vallecano",
    visitingTeam: "Espanyol",
    winner: "Rayo Vallecano"  
  },
  {
    match: 7,
    homeTeam: "Elche",
    visitingTeam: "Cadiz",
    winner: "Elche"  
  },
  {
    match: 8,
    homeTeam: "Levante",
    visitingTeam: "Osasuna",
    winner: "tie",
  },
  {
    match: 9,
    homeTeam: "Celta",
    visitingTeam: "Valencia",
    winner: "Valencia"  
  },
  {
    match: 10,
    homeTeam: "Getafe",
    visitingTeam: "Athletic",
    winner: "tie"  
  },  
]

//CREAMOS FUNCION IMPRIMIR//

let print = (data) => console.log(data);

// ORDENAMOS POR CLASIFICACION //

let setOrderByClassification = (clasificacionLigaSantander) => {
  clasificacionLigaSantander.sort((a, b) => a.class - b.class);
};
setOrderByClassification(ligaSantander);

//A todos aquellos equipos que alguna vez hayan ganado la Liga les añadiremos un Classic Player

let addClassicPlayer = (teams) => {
  for (let i = 0; i < teams.length; i++) {
    if (teams[i].winner === true && teams[i].name === "Real Madrid") {
      teams[i].bestPlayers.push("Raul Gonzalez")
    } else if (teams[i].winner === true && teams[i].name === "Athletic") {
      teams[i].bestPlayers.push("Julen Guerrero")
    } else if (teams[i].winner === true && teams[i].name === "Atletico de Madrid") {
      teams[i].bestPlayers.push("Kiko Narvaez")
    } else if (teams[i].winner === true && teams[i].name === "Betis") {
      teams[i].bestPlayers.push("Alfonso")
    } else if (teams[i].winner === true && teams[i].name === "Rayo Vallecano") {
      teams[i].bestPlayers.push("Roberto Trashorras");
    } else if (teams[i].winner === true && teams[i].name === "Sevilla") {
      teams[i].bestPlayers.push("Pablo Alfaro")
    } else if (teams[i].winner === true && teams[i].name === "Real Sociedad") {
      teams[i].bestPlayers.push("Mendieta")
    } else if (teams[i].winner === true && teams[i].name === "Espanyol") {
      teams[i].bestPlayers.push("Raul Tamudo")
    } else if (teams[i].winner === true && teams[i].name === "FC Barcelona") {
      teams[i].bestPlayers.push("Andres Iniesta");
    }
  }
  
};
addClassicPlayer(ligaSantander);

//Vamos a añadir todos los demás equipos//

let addTeams = (clasificacion, nombre, ganador, entrenador, mejoresJugadores, puntos ) => {
  let newTeam = {}
  newTeam.class = clasificacion
  newTeam.name = nombre
  newTeam.winner = ganador
  newTeam.mannager = entrenador
  newTeam.bestPlayers = mejoresJugadores
  newTeam.points = puntos
  ligaSantander.push(newTeam)
}

addTeams (10, "Valencia", true, "Jose Bordalas", ["Guedes", "Carlos Soler"], 22)
addTeams (11, "Osasuna", false, "Jagoba Arrasate", [], 21)
addTeams (12, "Mallorca", false, "Luis Garcia Plaza", ["Dani Rodriguez", "Idrissu Baba"], 19)
addTeams (13, "Villarral", false, "Unai Emery", ["Dani Parejo", "Danjuma"], 16)
addTeams (14, "Celta", false, "Eduardo Coudet", ["Iago Aspas", "Javi Galan", "Matias Dituro", "Brais Mendez"], 16)
addTeams (15, "Granada", false, "Robert Moreno", [], 15)
addTeams (16, "Elche", false, "Francisco Rodriguez", ["Mojica"], 15)
addTeams (17, "Alaves", false, "Javier Calleja", ["Luis Rioja", "Joselu"], 14)
addTeams (18, "Cadiz", false, "Alvaro Cervera", ["Pacha Espino"], 12)
addTeams (19, "Getafe", false, "Michel Gonzalez", [], 10)
addTeams (20, "Levante", false, "Javier Pereira", ["Morales"], 8)

// Si queremos mostrar solo los clasificados para Europa, deberemos mostrar solo los 7 primeros

let showEuropeClassificated = (data) =>{
  let europeClassificated = data.filter((team)=>team.class <= 7)
}
showEuropeClassificated(ligaSantander)


//¿En qué equipo entrena Eduardo Coudet? ¿Y en qué equipo juega Danjuma? Crea un buscador de jugadores y/o entrenadores//

let searchPerson = (data) =>{
  let foundPlayer = data.find((team)=> team.bestPlayers.includes("Danjuma"))
  let foundMannager = data.find((team)=> team.mannager.includes ("Coudet"))
  if (foundPlayer){
    print(foundPlayer.name)
  } else {print("Player not found")}
  if (foundMannager){
    print(foundMannager.name)
  } else {print("Mannager not found")}
}
searchPerson(ligaSantander)

//De momento, vamos a añadir un nuevo elemento que será "lastMatch" y le pondremos el string "tie" pero en un futuro según el resultado del partido debería sumar 3 o 1 punto al equipo ganador o a los equipos que empaten al finalizar la jornada

let addLastMatchResult = (data) => {
  for(let value of data){
      value.lastMatch = "tie"
  }
  print(data)
}



//Muestra el mejor jugador de cada equipo

let showBestPlayers = (team) =>{
  for (i=0; i < team.legth; i++) {
    print(team.bestPlayers[0].join(", "))
  }
}
  
showBestPlayers(ligaSantander)
  
  
 