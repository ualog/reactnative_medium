# TEST TECHNIQUE REACT-NATIVE

## Installation
`git clone` le projet

`npm install`

`npm start` (le hot reload est disponible avec nodemon)

## Instructions
### Présentation / règles
Tu as un backend en webservices à ta disposition qui est connecté à une base de données sur MongoDB

Le backend est construit avec une gestion d'erreur succint, pense donc à faire pas mal de `console.log()` ;)

Cette DB rassemble des objets `films` qui sont triés par `catégories`


! Le backend ne doit pas être modifié

! La base de données ne doit pas être modifié

### Objectifs
**Le test consite à créer une application React Native depuis zéro**

**L'application devra comporter 2 écrans**

-> Sur ces 2 écrans doit figurer un header avec le titre du projet et un compteur des films en favoris

Ce header doit être un composant à part et réutilisable

-> Écran de visualisation des films

Cet écran doit pouvoir afficher tous les films

Cet écran doit pouvoir effectuer un tris par catégories pour n'afficher que les films de la catégorie sélectionné

Les films doivent s'afficher par carte

Ces cartes doivent mentionner toutes les informations d'un film

Ces cartes doivent offrir la possibilité d'ajouter / supprimer un film des favoris


-> Écran des favoris

Cet écran doit consigner les films ajoutés en favoris depuis l'écran principal

Les films doivent s'afficher par carte

Ces cartes doivent mentionner toutes les informations d'un film

Ces cartes doivent offrir la possibilité d'ajouter / supprimer un film des favoris


**Attentions spéciales**

Une attention spéciale sera apporté à la gestion du `store` ainsi qu'a l'utilisation des props

Une attention bonus sera apporté si tu utilise un `fetcher` pour gérer les requêtes au backend
