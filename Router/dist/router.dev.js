"use strict";

var _Route = _interopRequireDefault(require("./Route.js"));

var _allRoutes = require("./allRoutes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Création d'une route pour la page 404 (page introuvable)
var route404 = new _Route["default"]("404", "Page introuvable", "/pages/404.html", []); // Fonction pour récupérer la route correspondant à une URL donnée

var getRouteByUrl = function getRouteByUrl(url) {
  var currentRoute = null; // Parcours de toutes les routes pour trouver la correspondance

  _allRoutes.allRoutes.forEach(function (element) {
    if (element.url == url) {
      currentRoute = element;
    }
  }); // Si aucune correspondance n'est trouvée, on retourne la route 404


  if (currentRoute != null) {
    return currentRoute;
  } else {
    return route404;
  }
}; // Fonction pour charger le contenu de la page


var LoadContentPage = function LoadContentPage() {
  var path, actualRoute, allRolesArray, roleUser, html, scriptTag;
  return regeneratorRuntime.async(function LoadContentPage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          path = window.location.pathname; // Récupération de l'URL actuelle

          actualRoute = getRouteByUrl(path); //Vérifier les droit d'acces a la page

          allRolesArray = actualRoute.authorize;

          if (allRolesArray.lenght > 0) {
            if (allRolesArray.includes("disconnected")) {
              if (isConnected()) {
                window.location.replace("/");
              }
            } else {
              roleUser = getRole();

              if (!allRolesArray.includes(roleUser)) {
                window.location.replace("/");
              }
            }
          } // Récupération du contenu HTML de la route


          _context.next = 6;
          return regeneratorRuntime.awrap(fetch(actualRoute.pathHtml).then(function (data) {
            return data.text();
          }));

        case 6:
          html = _context.sent;
          // Ajout du contenu HTML à l'élément avec l'ID "main-page"
          document.getElementById("main-page").innerHTML = html; // Ajout du contenu JavaScript

          if (actualRoute.pathJS != "") {
            // Création d'une balise script
            scriptTag = document.createElement("script");
            scriptTag.setAttribute("type", "text/javascript");
            scriptTag.setAttribute("src", actualRoute.pathJS); // Ajout de la balise script au corps du document

            document.querySelector("body").appendChild(scriptTag);
          } // Changement du titre de la page


          document.title = actualRoute.title + " - " + _allRoutes.websiteName; //Afficher et masquer les elements en fonction du rôle

          showAndHideElementsForRole();

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
}; // Fonction pour gérer les événements de routage (clic sur les liens)


var routeEvent = function routeEvent(event) {
  event = event || window.event;
  event.preventDefault(); // Mise à jour de l'URL dans l'historique du navigateur

  window.history.pushState({}, "", event.target.href); // Chargement du contenu de la nouvelle page

  LoadContentPage();
}; // Gestion de l'événement de retour en arrière dans l'historique du navigateur


window.onpopstate = LoadContentPage; // Assignation de la fonction routeEvent à la propriété route de la fenêtre

window.route = routeEvent; // Chargement du contenu de la page au chargement initial

LoadContentPage();