<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <!--tittle ce qu'on voit sur l'onglet de la page -->
    <title>CV Avotra Rakotoarisoa</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--media screen c'est pour les media queries  -->
  	<link rel="stylesheet" media="screen and (max-width: 1280px)" href="css/petite_resolution.css" />

    <link rel="stylesheet" href="css/styles.css">
    <!-- pour Wow animation -->
    <link rel="stylesheet" href="css/animate.css">
    <!-- bootstrap -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <!-- font Awasome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!--Google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Satisfy&display=swap" rel="stylesheet">
    <!--jQuery-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <!--links for responsive navbar avec meta viewport scale1-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
</head>
    <!--script pour wow animation-->
    <script src="js/wow.min.js"></script>
              <script>
              new WOW().init();
              </script>

  </head>

  <body >
    <div class="container">

    <!--DEBUT HEADER-->
    <header>
        <div class="row">
          <div class="col-lg-5">
              <h1 id="nomPrenom" >Avotra RAKOTOARISOA</h1>
            <p id="adresse">FRANCONVILLE 95130</p>
            <p id="emploi">Développeuse d'application Front-End <br> en recherche d'un contrat d'alternance</p>
          </div>

          <figure id="maPhotoDeProfil" class="col-lg-2 wow rotateIn" >
            <img src="images/maPhoto.png" class="rounded-circle" alt="Photo de profil de Avotra" >
            <figcaption id="myDate" class="wow heartBeat"></figcaption>
          </figure>

          <div id="reseauxSociaux" class="col-lg-5" >
            <!-- font awasome, il faut mettre le lien dans head et retrouver  les codes correspondant à chaque symbole sur le net i class qlq chose-->
            <!-- tittle ce qui s'affiche quand on click dessus target='_blank' ouvre un nouveau onglet -->
            <a href="https://fr.linkedin.com/in/avotra-rakotoarisoa-2b838943" title="linkedin" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true" style="font-size: 6vh;"></i></a>
            <a href="https://github.com/avotra68" title="github" target="_blank"><i class="fa fa-github" aria-hidden="true" style="font-size: 6vh;"></i></a>
            <a href="https://twitter.com/avotra68"  title="twitter" target="_blank"><i class="fa fa-twitter" aria-hidden="true" style="font-size: 6vh;"></i></a>
            <a href="mailto:avofeno@yahoo.fr" title="Cliquez ici si vous voulez m'envoyer-moi un mail" target="_blank">
            <i class="fa fa-envelope-o" aria-hidden="true" style="font-size: 6vh;"></i></a>
            <a href="tel:07xxxxxxxx" title="Mon numéro téléphone" target="_blank">
             <i class="fa fa-phone" aria-hidden="true" style="font-size: 6vh;"></i></a>
             <a href="docs/cv-Avotra.zip" title="Cliquez ici pour télécharger mon CV "><i class="fa fa-download" aria-hidden="true" style="font-size: 6vh;"></i>
             </a>
          </div> <!--FIN div id reseauxSociaux-->
        </div> <!--FIN div class row-->
      </div><!--FIN div class container-->

    </header>
    <!--#FIN HEADER-->

    <!--DEBUT NAVIGATION class bootstrap-->
    <div class="container">
      <div class="row">
        <nav class="navbar navbar-expand-md bg-dark navbar-dark col-lg-12 wow jackInTheBox">
     <!-- Brand je peux écrire navbar dedans mais je préfère rien mettre-->
        <a class="navbar-brand" href="#"></a>

     <!-- Toggler/collapsibe Button -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
        </button>

     <!-- Navbar links -->
     <div class="collapse navbar-collapse" id="collapsibleNavbar">
       <ul class="navbar-nav">
         <li class="nav-item">
           <a class="nav-link tab active" href="#presentation" id="btnPresentation">Présentation</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#etudes" id="btnEtudes">Etudes</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#competences" id="btnCompetences" >Compétences</a>
         </li>
         <li class="nav-item tab">
           <a class="nav-link" href="#hobbies" id="btnHobbies">Centre d'intérêts</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#contact" id="btnContact">Contact</a>
         </li>
       </ul>
     </div>
    </nav>
  </div> <!--FIN div class row de nav-->
    </div><!--FIN div class container de nav-->
<!--#FIN NAVIGATION class bootstrap-->
  <div class="container">
  <!--Début Présentation-->

    <div class="row">
      <div class="col-lg-12 wow zoomIn" id="presentation">
        <h2 class="One wow rubberBand data-wow-duration="15s"">Présentation </h2>
        <p>
  Titulaire d’un titre professionnel Développeur Logiciel depuis 2017  niveau bac+2 (titre RNCP niveau 3), je suis admise à la formation en alternance « Développeur  d’application Front-End » niveau bac+3/4 (Titre RNCP niveau 6) chez Open Classroom. Je choisis particulièrement l'alternance afin d’acquérir des expériences significatives en entreprise. Pour pouvoir commencer cette formation, je suis à la recherche une entreprise qui pourrait m'accueillir et me proposer un contrat d'alternance pendant une durée de 2 ans.
  Passionnée du développement web, rigoureuse et dotée d’une grande capacité d’adaptation, je suis prête à donner les meilleurs de moi même afin de contribuer à la réussite de votre entreprise.

        </p>
        <div id="petitDemoFonctionJs">
          <p class="jeSuis1">Je suis une &nbsp;&nbsp; </p>
          <p id="myGender"></p>
          <p class="qualite">
        </div>
      </div> <!--#FIN div id presentation-->

    </div><!--#FIN div class ROW de presentation-->

  <!--#FIN Présentation-->

  <!--Début Etudes-->
    <div class="row">
      <div class="col-lg-12 wow zoomIn One wow rubberBand data-wow-duration="15s"" id="etudes">
        <h2>Etudes</h2>
          <dl class="dl-horizontal">
            <dt>Année 2020</dt>
            <dd >Développeur.se d'application Front-End </dd>
            <dd><strong>Centre de formation:</strong>OPEN CLASSROOMS</dd>
            <dd><strong>Description</strong>:  Cette formation vise à acquérir toutes les compétences nécessaires afin de créer des sites dynamiques grâce à un langage de programmation. L'étudiant saura donc effectuer les missions suivantes :<br>
              <ul>
                <li>analyser les besoins à partir du cahier des charges défini par le client ou le chef de
                projet</li>
                <li>définir les différentes étapes de fonctionnement de l’application</li>
                <li> étudier l’ensemble des solutions techniques disponibles</li>
                <li>développer, tester et valider les fonctionnalités du site</li>
                <li>assurer le support technique du site et produire une documentation technique et
                fonctionnelle du site pour le client</li>
                <li>apporter d’éventuelles corrections de bugs et d’effectuer des mises à jour</li>
            </dd>
            </br></br>

            <dt>Année 2017</dt>
            <dd>Développeur.se Full Stack Javascript </dd>
            <dd><strong>Centre de formation:</strong>SIMPLON.CO Sarcelles - Labellisée GRANDE ECOLE DU NUMERIQUE</dd>
            <dd><strong>Description</strong>:  Maîtriser le développement de sites web dynamiques et performants via l'utilisation du langage Javascript et ses frameworks. </br> Intégrer la dimension front-end (création d’interfaces claires et ergonomiques et responsive), et back-end (développement et programmation des fonctionnalités et bases de données). </dd>
          </br></br>

            <dt>Année 2016</dt>
            <dd>un cycle d'exploration  de quatre semaines (du 21 novembre au 16 décembre) pour encourager les femmes intéressées par les métiers du numérique à poursuivre dans cette voie.</dd>
            <dd><strong>Centre de formation:</strong>SIMPLON.CO</span> Montreuil - Labellisée GRANDE ECOLE DU NUMERIQUE</dd>
          </br></br>

          <dt>2013/2014</dt>
          <dd>Formation au Diplôme d'Etat d'Aides-Soignants (par voie de concours)</dd>
          <dd><strong>Centre de formation:</strong>Institut de Formation d'Aides Soignants au sein du Centre Hospitalier de Châteauroux</dd>
          <dd><strong>Description</strong>: préserver et restaurer le bien-être et l'autonomie du patient. Accompagner et  dispenser les soins d'hygiène et de confort du patient, en s'adaptant à ses besoins et à son degré d'autonomie. </dd>
          </br></br>

          <dt>2010/2011</dt>
          <dd>Master2 Géographie et Science des territoire</dd>
          <dd><strong>Centre de formation:</strong>l'Université de Paris7-Denis Diderot</dd>
              <dd><strong>Spécialité</strong>: Environnement, Paysages, Milieux, Sociétés</dd>
              <dd><strong>Description</strong>:  appréhender la complexité des problèmes environnementaux</dd>
          </br></br>
          <dt>2003/2008</dt>
          <dd>Cycle de formation Ingénieur Géomètre Topographe</dd>
          <dd><strong>Centre de formation:</strong>Ecole Supérieure Polythecnique d'Antananarivo -Madagascar</dd>
          <dd><strong>Description</strong>:  effectuer des mesures sur le terrain afin de représenter ou contrôler des éléments puis de les représenter sur un support (papier et/ou informatique).</dd>
      </dl>
    </div>
    <!--#FIN Etudes-->
  </div>
  <!--#FIN div class row Etudes-->



  <!--Début Compétences-->
    <div class="row">

      <div class="col-lg-12 wow zoomIn" id="competences">
        <h2 class="One wow rubberBand data-wow-duration="15s"" >Compétences</h2>
        <h3>Langages de programmation </h3>
        <div class="progress">
          <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:50%">
            HTML5 50%
          </div>
      </div>
      <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:50%">
          CSS3 50%
        </div>
    </div>
    <div class="progress">
      <div class="progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width:30%">
        BOOTSTRAP 30%
      </div>
  </div>
  <div class="progress">
    <div class="progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width:30%">
    JAVASCRIPT 30%
    </div>
  </div>
  <div class="progress">
    <div class="progress-bar" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width:20%">
    jQUERY 20%
    </div>
  </div>
    <div class="progress">
      <div class="progress-bar" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width:20%">
      NodeJS 20%
      </div>
    </div>
    <div class="progress">
      <div class="progress-bar" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width:20%">
      UML 20%
      </div>
    </div>
    <div class="progress">
      <div class="progress-bar" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width:20%">
      MySQL 20%
      </div>
    </div>
    <div class="autresCompetences">
      <dl class="dl-horizontal">
        <dt>Editeurs de texte, IDE</dt>
        <dd> Atom, Sublim text, Webstorm</dd>
      </br>
      <dt>Système de versionning:</dt>
      <dd>GIT et github</dd>
      <dt>Outils de collaboration: </dt>
      <dd> Google Drive, Docs, Sheets, Slides</dd>

      </br>
      <dt>Système d'exploitation:</dt>
      <dd>Windows, linux</dd>
    </dl>

    </div>
</div> <!--FIN div competences-->


  </div> <!--#FIN row Compétences-->


  <!--Début Centres d'intérêts-->

    <div class="row">
      <div class="col-lg-12 wow zoomIn" id="hobbies">
        <h2 class="One wow rubberBand data-wow-duration="15s"">Centres d'intérêts</h2>

        <dl class="dl-horizontal">
          <dt>Astronomie</dt>
          <dd> j'aime l'astronomie parce qu'elle nous permet  de nous émerveiller et de comprendre la place que nous tenons face à l'immensité de l'univers.Pour moi, l'astronomie est devenue une passion.</dd>
        </br>
        <dt>Activité culinaire</dt>
        <dd>J’adore cuisiner. La cuisine nécessite un bon sens de l’organisation car il faut préparer un menu, gérer un budget, établir un planning pour que tout soit prêt à temps. Mais ce qui me plaît par-dessus tout, c’est de passer du temps à effectuer un travail de qualité, dans le but de satisfaire mon entourage. J’aime faire plaisir aux autres.</dd>
        Voici un lien si vous souhaitez découvrir mes plats <a href="https://urlz.fr/cbFq" target="_blank">recettes by Avotra</a>
      </dl>
    </div>

  </div>
  <!--#FIN Centres d'intérêts-->

  <!--Début CONTACT-->
    <div class="row">
      <div class="col-lg-12 wow zoomIn" id="contact">
        <form>
           <fieldset>
             <legend>
            <h2 class="One wow rubberBand data-wow-duration="15s"">Contact</h2>
          Une question, une suggestion, une proposition d'emploi?</legend>

             <div class="form-group">
               <label for="nom">Entrez votre nom</label>
               <input type="text" class="form-control" id="nom" placeholder="Avotra  Rakotoarisoa">
             </div>

             <div class="form-group">
               <label for="email">Entrez votre mail</label>
               <input type="email" class="form-control" id="email" placeholder="avofeno@yahoo.fr">
             </div>

             <div class="form-group">
               <label for="selection">Motif</label>
               <select id="selection" class="form-control">
                 <option value="">Choisissez</option>
                 <optgroup label="parmis ces options">
                   <option value="">Poser des questions</option>
                   <option value="">Donner des suggestions</option>
                   <option value="">Proposition d'emploi</option>
                 </optgroup>

                 </optgroup>
               </select>
             </div>
             <div class="form-group">
               <label for="bio">Message</label>
               <textarea class="form-control" id="bio" rows="3"></textarea>
             </div>
             <button type="submit" class="btn btn-primary" id="btnEnvoyer">Envoyer</button>
           </fieldset>
         </form>

      </div>
    </div>
  <!--#FIN Contact-->


</div>
<!--#FIN div class container for all rows-->



     <script src="js/index.js"></script>
  </body>
</html>
