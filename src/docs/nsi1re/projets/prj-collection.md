---
title: Projet - Gestionnaire d'une collection de données
description: Création d'un programme de gestion d'une collection
---

# Gestionnaire d'une collection de données

L'objectif de ce projet est de développer une application permettant de gérer un ensemble de données sur le thème de votre choix.
Celle-ci permettra donc d'organiser et de manipuler des informations structurées selon vos besoins.

!!! info "Mise à jour"

    Dernière mise à jour de l'énoncé le : **mercredi 21 avril 2025 à 09h30**
    ([:material-link: voir les modifications](https://github.com/mulot-nsi/website-2024/commit/daa4c7bc606d07d2af7b8d968ca8f4234fd950ba){:target="_blank"})

## Généralités

### Choix du thème

Le choix du thème est libre, mais si vous êtes en manque d'inspiration, voici quelques propositions.

!!! help "Idées de thème"

    - Médiathèque personnelle : gérez vos livres, films, séries ou musiques
    - Carnet d'adresses : organisez vos contacts et n'oubliez jamais une date d'anniversaire !
    - Bibliothèque de jeux vidéo : gérez votre collection avec leurs caractéristiques
    - Répertoire de sites web : organisez vos favoris par catégories
    - Journal de bord sportif : enregistrez et analysez vos performances sportives
    - Suivi de dépenses : répertoriez et catégorisez vos achats
    - Catalogue : inventoriez vos objets de collection (cartes à jouer, figurines, ...)

### Objectifs pédagogiques

Ne sous-estimez pas ce projet, il vous offre l'opportunité de mettre en pratique de nombreuses notions du [:material-link: programme de NSI de première](https://eduscol.education.fr/document/30007/download){:target="_blank"}.

!!! success "Notions du programme"

    - Représentation des données : types et valeurs de base *(représentation d'un entier, représentation d'un texte)*
    - Représentation des données : types construits *(tableaux, dictionnaires)*
    - Traitement de données en tables *(indexation de tables, recherche dans une table, tri d'une table)*
    - Architectures matérielles et système d'exploitation *(interface Homme-Machine)*    
    - Langages et programmation *(constructions élémentaires, mise au point de programmes, utilisation de bibliothèques)*
    - Algorithmique *(parcours séquentiel d'un tableau, tris par insertion et sélection)*

### Contraintes

Voici les contraintes générales relatives à ce projet. Veuillez les lire et vous assurer de bien les comprendre :

!!! success "Contraintes"

    - Travail en équipe obligatoire *(entre 2 et 3 personnes)*
    - Langage Python
    - Interface Homme-Machine textuelle *(console)*
    - Collection gérée à l'aide d'un **tableau de dictionnaires**
    - Fonctionnalités de gestion d'un élément *(création, lecture, modification, suppression)*
    - Fonctionnalité d'affichage d'une liste triée de tous les éléments de la collection 
    - Lecture et sauvegarde des données de la collection au **format CSV**
    - Mise en œuvre d'un traitement particulier par membre de l'équipe *(calcul de totaux, filtrage des données, recherche de données, ...)*

## Fonctionnalités

!!! abstract "Gestion d'une collection vide"

    Votre application doit permettre de gérer une collection à partir de zéro, c'est-à-dire sans devoir charger au préalable les données depuis un fichier CSV. 

!!! abstract "Chargement et sauvegarde de la collection au format CSV"

    Votre application doit permettre de charger des données de la collection depuis un fichier CSV existant.
    Elle doit également offrir la possibilité de sauvegarder l'état actuel de la collection dans un fichier CSV, en respectant un format compatible avec la fonctionnalité de chargement.

!!! abstract "Affichage, ajout, modification et suppression d'objets de la collection"

    Votre application doit fournir les fonctionnalités permettant d'afficher le détail d'un objet, d'ajouter un nouvel objet à la collection, de modifier les attributs d'un objet existant, et de supprimer un objet.

!!! abstract "Affichage de la collection avec application d'un tri"

    Votre application doit offrir la possibilité d'afficher l'ensemble des objets de la collection sous forme d'une liste.
    L'affichage doit être trié en implémentant l'algorithme du tri par sélection ou du tri par insertion.
    Vous n'êtes donc pas autorisés à utiliser la méthode `sort()` de Python.

!!! abstract "Recherche d'un objet dans la collection"

    Votre application doit intégrer une fonctionnalité de recherche permettant à l'utilisateur de retrouver rapidement un ou plusieurs objets dans la collection.
    En cas de difficulté, n'oubliez pas qu'il existe l'opérateur `in` sur les chaînes de caractères.

!!! abstract "Traitements particuliers (un par membre de l'équipe)"

    Chaque membre de l'équipe devra implémenter une fonctionnalité particulière liée à la collection.
    Ces traitements pourront inclure des analyses statistiques, des calculs spécifiques, des transformations de données, des filtrages, des exports dans des formats spécifiques, ou toute autre fonctionnalité enrichissant l'expérience utilisateur.

## Code Python

- Vous n'êtes pas autorisés à utiliser des variables globales
- Vous n'êtes pas autorisés à utiliser la fonction `sort()` pour le tri des données
- Les traitements des données doivent se faire en mémoire, vous ne devez pas lire le fichier CSV et l'enregistrer à chaque opération 
- Pensez à séparer votre code en modules
- Pensez à rédiger une docstring pour l'ensemble de vos fonctions en précisant le type des paramètres
- Pensez à vérifier les erreurs de saisie

## Livrable
Votre projet devra être transmis à l'enseignant sous forme d'archive au format ZIP. Celle-ci devra contenir :

- Le code source du projet
- Un court compte rendu au format HTML contenant :
    - Une courte description du projet
    - Le nom des membres du groupe
    - Le rôle de chaque membre du groupe
    - Une description du ou des traitements mis en œuvre

!!! help "Base de compte rendu"

    Vous trouverez une base de compte rendu, librement exploitable, en consultant et téléchargeant l'exemple de projet à l'adresse suivante :
    [https://forge.apps.education.fr/mulotyannick/nsi1re-projet-boggle](https://forge.apps.education.fr/mulotyannick/nsi1re-projet-boggle){:target="_blank"}

    Le téléchargement s'effectue en cliquant sur le bouton **Code** et en choisissant le format ZIP.

## Critères d'évaluation

Voici une liste non exhaustive de critères d'évaluation :

- Envoi du projet dans les temps
- Respect des contraintes
- Qualité du code
- Algorithmes de traitement
- Qualité du découpage en fonctions
- Présence de commentaires
- DocStrings pour chaque fonction