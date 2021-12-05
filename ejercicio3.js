//Agregar un jugador histórico a todos los equipos que han ganado alguna liga


const ligaSantander = [
  {
    class: 1,
    nombre: "Real Madrid",
    winner: true,
    mannager: "Carlo Ancelotti",
    bestPlayers: ["Vinicius", "Benzema"],
    points: 30,
  },
  {
    class: 8,
    nombre: "Athletic",
    winner: true,
    mannager: "Marcelino",
    bestPlayers: ["Muniain", "Iñaki Williams", "Iñigo Martinez"],
    points: 20,
  },
  {
    class: 4,
    nombre: "Atletico de Madrid",
    winner: true,
    mannager: "Cholo Simeone",
    bestPlayers: ["Carrasco", "Luis Suarez", "Correa"],
    points: 27,
  },
  {
    class: 5,
    nombre: "Betis",
    winner: true,
    mannager: "Manuel Pellegrini",
    bestPlayers: ["Fekir", "Juanmi", "Canales"],
    points: 27,
  },
  {
    class: 3,
    nombre: "Sevilla",
    winner: true,
    mannager: "Julen Lopetegi",
    bestPlayers: ["Acuña"],
    points: 28,
  },
  {
    class: 6,
    nombre: "Rayo Vallecano",
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
    nombre: "Real Sociedad",
    winner: true,
    mannager: "Imanol Alguacil",
    bestPlayers: ["Mikel Merino", "Aritz", "Oyarzabal", "Le Normand"],
    points: 29,
  },
  {
    class: 9,
    nombre: "Espanyol",
    winner: false,
    mannager: "Vicente Moreno",
    bestPlayers: ["Raul de Tomas", "Embarba", "Diego Lopez", "Pedrosa"],
    points: 20,
  },
  {
    class: 7,
    nombre: "FC Barcelona",
    winner: true,
    mannager: "Xavi Hernandez",
    bestPlayers: ["Depay", "Busquets"],
    points: 23,
  },
];

let setOrderByClassification = clasificacionLigaSantander =>{
  clasificacionLigaSantander.sort ((a,b)=>a.class - b.class)
  // Añado la función que cree en el primer ejercicio para ordenar el array por clasificación y la llamaré al final
}

let print = (data) => console.log(data) // Creo una función print

let addClassicPlayer = (laLigaTeams) => {
  debugger
  for (let i = 0; i < laLigaTeams.length; i++) {
    if (
      laLigaTeams[i].winner === true &&
      laLigaTeams[i].nombre === "Real Madrid"
    ) {
      laLigaTeams[i].bestPlayers.push("Cristiano Ronaldo");
    } else if (
      laLigaTeams[i].winner === true &&
      laLigaTeams[i].nombre === "Athletic"
    ) {
      laLigaTeams[i].bestPlayers.push("Julen Guerrero");
    } else if (
      laLigaTeams[i].winner === true &&
      laLigaTeams[i].nombre === "Atletico de Madrid"
    ) {
      laLigaTeams[i].bestPlayers.push("Kun Aguero");
    } else if (
      laLigaTeams[i].winner === true &&
      laLigaTeams[i].nombre === "Betis"
    ) {
      laLigaTeams[i].bestPlayers.push("Finidi");
    } else if (
      laLigaTeams[i].winner === true &&
      laLigaTeams[i].nombre === "Rayo Vallecano"
    ) {
      laLigaTeams[i].bestPlayers.push("Bolic");
    } else if (
      laLigaTeams[i].winner === true &&
      laLigaTeams[i].nombre === "Sevilla"
    ) {
      laLigaTeams[i].bestPlayers.push("Luis Fabiano");
    } else if (
      laLigaTeams[i].winner === true &&
      laLigaTeams[i].nombre === "Real Sociedad"
    ) {
      laLigaTeams[i].bestPlayers.push("Kovacic");
    } else if (
      laLigaTeams[i].winner === true &&
      laLigaTeams[i].nombre === "Espanyol"
    ) {
      laLigaTeams[i].bestPlayers.push("Raul Tamudo");
    } else if (
      laLigaTeams[i].winner === true &&
      laLigaTeams[i].nombre === "FC Barcelona"
    ) {
      laLigaTeams[i].bestPlayers.push("Leo Messi");
    }
  }
  setOrderByClassification(laLigaTeams)
  print(laLigaTeams)
}

addClassicPlayer(ligaSantander);
