//7.- Agregar a los equipos el país de dónde son

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

  // EL FOR OF ES PARA VALORS ITERABLES: O STRING O ARRAY
  // EL FOR IN ES PARA RECORRER LAS PROPIEDADES DE UN OBJETO
  let addNacionality = (data) => {
      for(let value of data){
          value.nacionality = "Spanish team"
          //value.prueba = 12
          //value.jugadores = ["Pepe", "Joselito"]
      }
      console.log(data)
  }

  addNacionality(ligaSantander)


  // ASÍ FUNCIONARIA EL FOR IN //

  let addGoalsStadistics = (data) => {
    for(let value of data){
        value.stats = {}
        value.stats.moreThan20Goals = true
        value.stats.lessThan15Goals = true
        for (let prop in value.stats) {
            value.stats[prop] = false // nos falsea todo lo anterior
        }
    }
    //console.log(data)
}

//addGoalsStadistics(ligaSantander)