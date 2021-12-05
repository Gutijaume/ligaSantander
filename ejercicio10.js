//10. Decuenta el 20% a los puntos de los equipos con más de tres bestplayers

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


  let teamsWithMoreBestPlayers = (data) => {
    let filtered = data.filter (team=>team.bestPlayers.length > 3)
  return(filtered)
  }
 

  teamsWithMoreBestPlayers(ligaSantander) // Primero filtro los equipos con más de tres jugadores entre los BestPlayers



  let discount = (data) => {
    data.forEach (team =>{
      let restaPuntos = 0.80
      let puntosFinales = team.points * restaPuntos
      team.points = puntosFinales
    })
    console.log(data)
  }

  let filtered = teamsWithMoreBestPlayers(ligaSantander)
  discount(filtered)

