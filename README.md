# Adz-tp-Angular-stage

Ce projet est un "TP" technique, orienté Angular 6+, pour le poste de "Développeur Front-End - STAGE" chez Adictiz.

# Auteur
**Bloch Sacha**

## Moteur de recherche de livre à partir de mot clef comprenant 2 pages et une popup

- [x] Page de recherche avec un seul composant. (Home)
    - [x] Input : Champ de recherche de livre. 


- [x] Page de résultat sous forme de galerie de livre avec mini description du livre. (Catalogue)
    - [x] Input : Champ de filtrage des résultats (via un auteur, catégorie, etc). (Catalogue Filter)
    - [x] Button : "Retour" à la page de recherche. (back arrow)
    - [x] Select : Permettant de filtrer les résultats. (youtube_searched_for, enter)
        - [x] Ce composant est rempli dynamiquement avec les résultats.
    - [x] Au clique sur un livre, il faut une vue détail (informations, liens, etc.) en Popup du livre. (Book dialogue overview)

## Règles

- [x] Full Angular 6+ en version stable. (version: 9.0.0)
- [x] Angular CLI. (version:  9.0.1)
- [x] Angular Material autorisé.
- [x] Pas de Bootstrap et jQuery.
- [x] Favoriser le développement module / composant / directive. (adopter)
- [x] Récupération du projet via Github. (https://github.com/Teddysbears/Adz-tp-Angular-stage)
- [x] Préfixer les classes et fichiers par "Adz" | "adz" (pour Adictiz) et non par "App".
- [x] Bonus: 
    - [ ] Tests unitaires
    - [ ] Utilisation de Redux (ngrx)
    - [x] Internationaliser le moteur de recherche en 2 langues (FR, EN)
         - [x] Récupération de la langue via un cookie ou la langue du navigateur. (**langue du navigateur**)
         - [x] Changement en live de la langue.
    - [x] Respecter les guidelines (https://angular.io/guide/styleguide)

## Commentaires

J'ai laissé en public ma clef (Google API) pour que vous n'ayez qu'a fork mon projet, afin de le tester. Évidemment, dans d'autres circonstances, j'aurais mis cette clef dans un fichier inclus dans le .gitignore ou chiffré cette dernière.
Je me suis concentré principalement sur les fonctionnalités du site, plus que sur le design.
J'ai tout de même assuré le responsive design du site.
La traduction est faite en récupérant les informations du navigateur (langue par défaut).


## Problèmes rencontrés

Je n'ai pas eu le temps de faire les tests unitaires, ni d'utiliser redux (jamais utilisé auparavant).
Je ne suis pas sûre, à propos du filtre d'avoir bien respecté les consignes, mon catalogue est dynamique, mais nous devons tout de même appuyé sur "entrer" pour rafraîchir les livres affichés.
Le filtrage des livres n'est pas très optimisé un refactor serait nécessaire.


