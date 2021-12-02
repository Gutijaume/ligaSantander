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

let i = 0

let addClassicPlayer = (laLigaTeams) => {
  for (let i = 0; i < ligaSantander.length; i++) {
    if (
      laLigaTeams[i].winner === true &&
      laLigaTeams[i].nombre === "Real Madrid"
    ) {
      laLigaTeams[i].bestPlayers.push("Cristiano Ronaldo");
    }
  } if (
      laLigaTeams[i].winner === true &&
      laLigaTeams[i].nombre === "Athletic"
    ) {
      laLigaTeams[i].bestPlayers.push("Julen Guerrero");
    }
    console.log(laLigaTeams)
  }

  addClassicPlayer(ligaSantander);


