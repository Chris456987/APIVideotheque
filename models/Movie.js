const movies = [
    {
      "titre" : "Le Grand Bleu",
      "realisation" : "Luc BESSON",
      "description" : "Film librement inspiré de la vie de Jacques Mayol, célèbre plongeur en apnée des années 60.",
      "dureeTotaleMinutes" : 134,
      "dureeDejaVisionnee" : 134,
      "imageUrl" : "GrandBleu.png"
    },
    {
      "titre" : "La Ballade de Narayama",
      "realisation" : "Shohei IMAMURA",
      "description" : "Film japonais de Shohei Imamura, adapté d'un nouvelle de Shichiro Fukazawa, expliquant le dernier voyage des anciens devenus une charge pour leur famille vers la montagne de Narayama, afin de rejoindre leurs ancetres.",
      "dureeTotaleMinutes" : 130,
      "dureeDejaVisionnee" : 129,
      "imageUrl" : "BalladeNarayama.png"
    },
    {
      "titre" : "Pluie Noire",
      "realisation" : "Shohei IMAMURA",
      "description" : "Film japonais situant l'histoire à Hiroshima le 6/08/1945 au moment de l'éclatement de la bombe nucléaire. Yasuko, l'héroine, part au travail et sera l'une des rescapées de cet enfer. Mais ce dernier ne fait que commencer pour elle.",
      "dureeTotaleMinutes" : 123,
      "dureeDejaVisionnee" : 100,
      "imageUrl" : "PluieNoire.png"
    },
    {
      "titre" : "Pierrot le Fou",
      "realisation" : "Jean-Luc GODARD",
      "description" : "Film franco-italien relatant une relation homme-femme empreinte de passion et de violence, le dérapage est inévitable...",
      "dureeTotaleMinutes" : 115,
      "dureeDejaVisionnee" : 10,
      "imageUrl" : "PierrotFou.png"
    },
    {
      "titre" : "La Dolce Vita",
      "realisation" : "Frederico FELLINI",
      "description" : "Fraichement arrivé à Rome, Marcello reve de devenir écrivain. En attendant, il est simple chroniqueur dans un journal à sensations. A la recherche du scoop, il fait la tournée des lieux branchés de la capitale. C'est ainsi qu'une rencontre va bouleverser le cours de sa vie.",
      "dureeTotaleMinutes" : 178,
      "dureeDejaVisionnee" : 70,
      "imageUrl" : "LaDolceVita.png"
    },
    {
      "titre" : "Forces Spéciales",
      "realisation" : "Stéphane RYBOJAD",
      "description" : "Une journaliste française et son accompagnateur sont retenus prisonniers par les talibans en Afghanistan. Leur exfiltration se passe mal...",
      "dureeTotaleMinutes" : 95,
      "dureeDejaVisionnee" : 0,
      "imageUrl" : "ForcesSpeciales.png"
    }
];

exports.find = () => {
  return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(movies))));
}

exports.findById = (id) => {
  return new Promise((resolve, reject) =>
    resolve(JSON.parse(JSON.stringify(movies)).find(movie =>
      movie._id == id)
    )
  );
}




