---
title: Création d'un graphe
description: Modélisation d'un réseau social sous forme de graphe
---

# Création d'un graphe

## Introduction

Vous êtes un acteur ou une actrice reconnu(e) pour vos nombreux rôles dans des séries télévisées.
Après tous ces succès, vous n'avez qu'un objectif, accéder au monde du cinéma.
Vous voulez entrer par la grande porte en jouant dans un film du réalisateur Christopher Nolan.
Celui-ci a cependant la réputation d'être impossible à joindre si vous n'êtes pas connu(e) de son cercle d'acteurs.

Il vous faut donc avant toute chose connaître plus précisément le réseau d'acteurs des films de Christopher Nolan.
Heureusement pour vous, vous avez suivi des cours de SNT au lycée et vous entreprenez de modéliser ce réseau sous forme
d'un graphe.

!!! danger "Travail à rendre"

    Le travail réalisé dans le cadre de ces travaux pratiques est à rendre en fin de séance selon les modalités décrites dans la section **Envoi du travail**.

## Préparation

Vous allez créer des dossiers afin de garder vos productions numériques organisées.

!!! note "Organisation de l'espace travail"

    === ":material-laptop: Ordinateur portable"

        1. Lancez l'application <i class="icon file-explorer"></i> **Explorateur de fichiers**
        2. Dans le dossier `Document`, s'il n'y a pas de dossier nommé `SNT`, créez-le
        3. Dans le dossier `SNT`, créez-le dossier `Réseaux sociaux`

    === ":material-desktop-tower: Ordinateur fixe"

        1. Depuis le bureau, double-cliquez sur l'icône intitulée **Zone personnelle**
        2. Dans la **zone personnelle**, s'il n'y a pas de dossier nommé `SNT`, créez-le
        3. Dans le dossier `SNT`, créez-le dossier `Réseaux sociaux`

## Application

Vous souhaitez disposer d'un graphe des acteurs de Christopher Nolan. Chaque **sommet** représente donc un acteur.
Les liens entre les sommets, les **arêtes**, symbolisent le fait que deux acteurs se connaissent.
On considère que deux acteurs se connaissent s'ils ont joué au moins une fois dans un même film.

Voici un tableau à double entrée d'acteurs et de films réalisés par Christopher Nolan.
Le symbole **✓** signifie que l'acteur a joué dans le film mentionné en en-tête de colonne.
Nous observons ainsi que **Tom Hardy** a joué dans le film *Inception* avec **Cillian Murphy** et **Michael Cain**. Ces
trois personnes se connaissent.

<div class="custom-table" markdown>

|                       | Le Prestige | Inception | Interstellar | Dunkerque | Tenet | Oppenheimer |
|:---------------------:|:-----------:|:---------:|:------------:|:---------:|:-----:|:-----------:|
|    Christian Bale     |      ✓      |           |              |           |       |             |
|    Cillian Murphy     |             |     ✓     |              |     ✓     |       |      ✓      |
|       Tom Hardy       |             |     ✓     |              |     ✓     |       |             |
|     Michael Caine     |      ✓      |     ✓     |      ✓       |     ✓     |   ✓   |             |
|      Gary Oldman      |             |           |              |           |       |      ✓      |
|     Anne Hathaway     |             |           |      ✓       |           |       |             |
| John David Washington |             |           |              |           |   ✓   |             |

</div>

!!! note "Consigne"

    À partir des informations du tableau, construire un graphe dont les sommets représentent **les acteurs**
    et dont les arêtes représentent le fait que deux acteurs **se connaissent**.
    Pour rappel, on considère que deux acteurs se connaissent s'ils ont joué au moins une fois dans un même film.

    1. Rendez vous sur l'outil en ligne [:material-link: Digidiagram](https://ladigitale.dev/digidiagram/#/){:target="_blank"} de La Digitale
    2. Cliquez sur **Créer un diagramme**
    3. Créez un diagramme avec les caractéristiques suivantes :
        - Nom du diagramme : **Réseau social**
        - Type de diagramme : **Simple**
        - Question secrète : **Quel est mon mot préféré ?**
        - Réponse secrète : **SNT**

!!! help "Aide à la construction du graphe"

    <div style="position: relative; padding-top: 56.25%;"><iframe title="SNT - Réseaux sociaux - Création d'un graphe" width="100%" height="100%" src="https://tube-sciences-technologies.apps.education.fr/videos/embed/b1b6e526-fa4a-4e46-967a-6e71587efdca?warningTitle=0" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" style="position: absolute; inset: 0px;"></iframe></div>

    Dans la vidéo, nous créons une arête entre **Christian Bale** et **Michael Caine** car ceux-ci se connaissent pour avoir jouer ensemble dans le film **Le Prestige**.
    Cette vidéo est un exemple et vous devez bien entendu construire un graphe avec tous les individus.

!!! note "Consigne"

    Une fois votre graphe terminé, il vous faut l'exporter :

    1. Cliquez sur l'icône de partage :material-share-variant: située en haut à droite
    2. Cliquez sur le bouton **Exporter**
    3. Déplacez l'image téléchargée, **sans la renommée**, dans le dossier de travail `SNT\Réseaux sociaux`

## Envoi du travail

Une fois votre grape exporté en image et téléchargé, vous pouvez le déposer sur Pronote.

!!! info "Dépot du travail sur Pronote"

    1. Connectez-vous à l'ENT : [:material-link: https://monlycee.net](https://monlycee.net/){:target="_blank"}
    2. Accédez à l'application **Pronote**
    3. Depuis l'accueil, recherchez le devoir **SNT03 - Création d'un graphe**
    4. Cliquez sur le bouton <span class="pronote-button">Déposer ma copie</span>
    5. Cliquez sur le bouton **Un seul fichier (*.pdf, *.doc, ...)**
    6. Déposez votre graphe au format PNG
