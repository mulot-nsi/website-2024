---
title: Le Web - Projet - Minisite web - Développement
description: Consignes pour le travail à réaliser.
---

# 2. Développement

## Modification des fichiers

Vous allez maintenant ouvrir les fichiers du projet avec **notepad++** et visualiser la page d'accueil dans un navigateur.
L'objectif est de commencer la réalisation de votre minisite.

!!! note "Ouverture des fichiers"

    <h5>Étape 1 - Ouverture des fichiers sources</h5>

    1. Lancez **Notepad++**
    2. Cliquez sur **Fichier > Ouvrir...** <span class="shortcut">++ctrl+o++</span>
    3. Rendez-vous dans le dossier de votre minisite
    4. Ouvrez les fichiers `index.html`, `page-exemple.html` et `style.css`
    5. Gardez Notepad++ ouvert

    <h5>Étape 2 - Visualisation de la page d'accueil</h5>
    
    1. Lancez l'application <i class="icon file-explorer"></i> **Explorateur de fichiers**
    2. Rendez-vous dans le dossier de votre minisite
    3. Double-cliquez sur le fichier `index.html` pour qu'il s'ouvre dans un navigateur
    '. Gardez le navigateur ouvert

!!! danger "Démarrage des développements"

    Vous formerez les groupes de projet en dehors cette séance.
    En attendant, commencez votre minisite sur le thème de votre choix ! 
    Vous êtes libres de tout modifier, effacer, ajouter...

    L'objectif est maintenant de vous familiariser avec la programmation web avant de travailler en autonomie :

    1. Commencez par changer le titre de la page
    2. Ajoutez du texte et supprimez des éléments qui ne vous interessent pas
    3. Modifiez l'image et sa taille
    4. Modifiez les couleurs et les styles

## Contraintes à respecter

### Page d'accueil

La page d'accueil de votre minisite correspond au fichier `index.html`.
Vous êtes libre de la modifier entièrement. Elle devra cependant contenir au minimum les éléments suivants :

!!! info "Balises obligatoires sur la page d'accueil"

    - Un titre de page (visible au niveau de l'onglet du navigateur et géré par la balise `#!html <title>`)
    - Un titre principal (balise `#!html <h1>`)
    - Au moins un paragraphe de texte (balise `#!html <p>`)
    - Un ou plusieurs liens vers d'autres pages de votre site (balise `#!html <a>`)
    - Un ou plusieurs liens vers des sites externes (balise `#!html <a>`)
    - Au moins une image (balise `#!html <img>`)
    - Indiquer le nom de chaque des auteurs de la page via la métadonnée `author`<br>
      (balise `#!html <meta name="author" content="nom des auteurs">` située dans `#!html <head>`)

!!! danger "Attention à la gestion des images"
    
    Les images doivent être locales. Vous devez les télécharger et les placer dans le même dossier que votre page web pour l'utiliser.
    Vous devez les renommer pour passer leur nom de fichier en minuscules.
    
    Pour insérer une image sur une page web, il suffira simplement d'écrire le nom du fichier dans l'attribut `src` de la balise `#!html <img>`. 

### Sous-pages

Les sous-pages correspondent au fichier `page-exemple.html` et à toutes les autres pages web que vous pourriez ajouter
et nommer librement.

!!! danger "Renommer et modifier les exemples"

    Attention, le fichier `page-exemple.html` est un exemple, vous devez le renommer et modifier son contenu.

Les sous-pages devront impérativement disposer des éléments suivants :

!!! info "Balises obligatoires sur les sous-pages"

    - Un titre de page (visible au niveau de l'onglet du navigateur et géré par la balise `#!html <title>`)
    - Un titre principal (balise `#!html <h1>`)
    - Un paragraphe de texte (balise `#!html <p>`)
    - D'un lien de retour vers la page d'accueil de votre site (balise `#!html <a href="index.html">...</a>`)
    - Indiquer le nom de chaque des auteurs de la page via la métadonnée `author`<br>
      (balise `#!html <meta name="author" content="nom des auteurs">` située dans `#!html <head>`)

### Mise en forme CSS

Les pages web sont associées au fichier `style.css` qui contient le code CSS permettant la mise en forme des éléments.
Pour rappel, l'association entre une page web et le fichier `style.css` s'effectue à l'aide d'une
balise `#!html  <link>` à placer à l'intérieur des balises `#!html  <head> ... </head>` :

```html

<head>
    ...
    <link href="style.css" rel="stylesheet">
    ...
</head>
```

### Enrichissement du site

Tout en conservant les minimums demandés, vous pouvez consulter les contenus suivants afin d'enrichir vos pages :

- [Apparence du texte](https://openclassrooms.com/fr/courses/1603881-creez-votre-site-web-avec-html5-et-css3/8061298-changez-lapparence-du-texte){:target="_blank"}
- [Couleur et fond](https://openclassrooms.com/fr/courses/1603881-creez-votre-site-web-avec-html5-et-css3/8061312-ajoutez-de-la-couleur-et-un-fond){:target="_blank"}
- [Bordures et ombres](https://openclassrooms.com/fr/courses/1603881-creez-votre-site-web-avec-html5-et-css3/8061337-creez-des-bordures-et-des-ombres){:target="_blank"}
- [Images](https://developer.mozilla.org/fr/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML){:target="_blank"}