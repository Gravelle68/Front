"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.websiteName = exports.allRoutes = void 0;

var _Route = _interopRequireDefault(require("./Route.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Définir ici vos routes
var allRoutes = [new _Route["default"]("/", "Accueil", "/pages/home.html"), new _Route["default"]("/galerie", "La galerie", "/pages/galerie.html"), new _Route["default"]("/signin", "connexion", "/pages/auth/signin.html"), new _Route["default"]("/signup", "Inscription", "/pages/auth/signup.html", "/js/auth/signup.js"), new _Route["default"]("/account", "Mon compte", "/pages/auth/account.html"), new _Route["default"]("/editPassword", "Changement de mot de passe", "/pages/auth/editPassword.html"), new _Route["default"]("/allResa", "Vos réservations", "/pages/reservations/allResa.html"), new _Route["default"]("/reserver", "Réserver", "/pages/reservations/reserver.html")]; //Le titre s'affiche comme ceci : Route.titre - websitename

exports.allRoutes = allRoutes;
var websiteName = "Quai Antique";
exports.websiteName = websiteName;