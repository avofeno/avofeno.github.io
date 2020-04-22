const myDate = document.querySelector("#myDate");
console.log(myDate);
/*librairie JS qui permet de manipuler les dates, new date() date du jour toLocaleDateString() format heure locale =>en france */
myDate.innerText = new Date().toLocaleDateString();

const avotra = {
  firstName:'Avotra',
  lastName:'Rakotoarisoa',
  age:34,
  gender:'F',
  addres: '1 Rue de la Joie',
  qualite:'dynamique, souriante, ayant le sens de l\'écoute, rigoureuse et j\'aime apprendre perpétuellement.',
};

function sayGender(personParameter) {
  console.log(personParameter.qualite);
  if (personParameter.gender === 'F') {
    console.log('coucou je suis une femme');
    return (''+'femme');
  }

  else if (personParameter.gender === 'M') {
    console.log('coucou je suis un homme');
    return 'homme';
  }
  else {
    console.log('je ne suis pas ni homme ni femme');
    return 'ni femme ni homme';
  }

}
//executer la fonction sinon il se passe rien
sayGender(avotra);

const myGender = document.querySelector("#myGender");
myGender.innerText = sayGender(avotra);


function sayQualite(personParameter) {
  console.log(personParameter.qualite);
  if (personParameter.qualite === 'dynamique, souriante, ayant le sens de l\'écoute, rigoureuse et j\'aime apprendre perpétuellement.') {
    console.log('vous avez les qualités pour un bon développeur');
    return 'dynamique, souriante, ayant le sens de l\'écoute, rigoureuse et j\'aime apprendre perpétuellement.';
  }
  else {
    console.log('il va falloir rajouter des qualités');
    return 'rajouter des qualités';
  }

}
//executer la fonction sinon il se passe rien
sayQualite(avotra);
const jeSuis1 = document.querySelector(".jeSuis1");
jeSuis1.innerText = ('Je suis une' + ' ');
const qualite = document.querySelector(".qualite")
qualite.innerText=sayQualite(avotra);
//jQuery part -fermer ouvrir contenu clic sur navbar

$(document).ready(function () {
    $("#presentation").show();
    $("#etudes").hide();
    $("#competences").hide();
    $("#hobbies").hide();
    $("#contact").hide();

    $("#btnPresentation").click(function(){
      $("#presentation").show();
      $("#etudes").hide();
      $("#competences").hide();
      $("#hobbies").hide();
      $("#contact").hide();

    });
    $("#btnEtudes").click(function(){
      $("#presentation").hide();
      $("#etudes").show();
      $("#competences").hide();
      $("#hobbies").hide();
      $("#contact").hide();
    });

    $("#btnCompetences").click(function(){
      $("#presentation").hide();
      $("#etudes").hide();
      $("#competences").show();
      $("#hobbies").hide();
      $("#contact").hide();
    });

    $("#btnHobbies").click(function(){
      $("#presentation").hide();
      $("#etudes").hide();
      $("#competences").hide();
      $("#hobbies").show();
      $("#contact").hide();
    });

    $("#btnContact").click(function(){
      $("#presentation").hide();
      $("#etudes").hide();
      $("#competences").hide();
      $("#hobbies").hide();
      $("#contact").show();
    });

    //skills bar



});

//Insérer une carte Google Maps avec l'API Google Maps Javascript
//http://eric.van-der-vlist.com/blog/owark/299/
//https://www.youtube.com/watch?v=wSXKz11TNDM
