let txt = document.querySelector(".card-text")
let btn = document.querySelector(".btn-citation")



btn.addEventListener("click", function(){
    var tab = ["“Ceux qui aiment marcher en rangs sur une musique : ce ne peut être que par erreur qu’ils ont reçu un cerveau, une moelle épinière leur suffirait amplement.”",
    "“La possession de merveilleux moyens de production n’a pas apporté la liberté, mais le souci et la famine.”",
    "“L’imagination est plus importante que le savoir.”",
    "“L'enseignement devrait être ainsi : celui qui le reçoit le recueille comme un don inestimable mais jamais comme une contrainte pénible.”",
    "“La personnalité créatrice doit penser et juger par elle-même car le progrès moral de la société dépend exclusivement de son indépendance.”",
    "“C'est la personne humaine, libre et créatrice qui façonne le beau et le sublime, alors que les masses restent entraînées dans une ronde infernale d'imbécillité et d'abrutissement.”",
    "“C'est le rôle essentiel du professeur d'éveiller la joie de travailler et de connaître.”",
    "“Celui qui ressent sa propre vie et celle des autres comme dénuées de sens est fondamentalement malheureux, puisqu'il n'a aucune raison de vivre.”",]
    var randomtab = tab [Math.floor(Math.random() * tab.length)];

    txt.innerText = randomtab 
})