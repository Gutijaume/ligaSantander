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
      historicPlayer: "De Pedro",
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
  
  


  
  let print = (data) => console.log(data) // Creo una función print

  let addClassicPlayer = (arrayTeams, nameOfTeam, leagueWinner = true, newPlayer) =>{
      arrayTeams.forEach((team) =>{
          if (team.winner === leagueWinner && team.nombre === nameOfTeam)
          team.bestPlayers.push(newPlayer)
      }) 
      print (arrayTeams)
      //setOrderByClassification(ligaSantander)
    }

    ligaSantander.forEach((equipo)=>{
        addClassicPlayer(ligaSantander, equipo.nombre, equipo.winner, equipo.historicPlayer)

    })
    addClassicPlayer (ligaSantander, "Real Madrid", undefined, "Raul Gonzalez")
    addClassicPlayer (ligaSantander, "Athletic", undefined, "Julen Guerrero")
    addClassicPlayer (ligaSantander, "Atletico de Madrid", undefined, "Fernando Torres")
    addClassicPlayer (ligaSantander, "Betis", undefined, "Alfonso")
    addClassicPlayer (ligaSantander, "Sevilla", undefined, "Javi Navarro")
    addClassicPlayer (ligaSantander, "Rayo Vallecano", undefined, "Roberto Trashorras")
    addClassicPlayer (ligaSantander, "Real Sociedad", undefined, "De Pedro")
    addClassicPlayer (ligaSantander, "Espanyol", undefined, "Raul Tamudo")
    addClassicPlayer (ligaSantander, "FC Barcelona", undefined, "Andres Iniesta")


    //El problema con el que me encuento en esta ocasión es que me imprime nueve arrays distintos