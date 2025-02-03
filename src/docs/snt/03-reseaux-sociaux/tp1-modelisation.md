---
title: TP1 - Modélisation
description: Modélisation d'un réseau social
---

# Modélisation d'un réseau social

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
    Deux documents seront à rendre :

    - La représentation sous forme de graphe du réseau social, réalisée à l'aide d'un outil en ligne de réalisation de diagrammes
    - Un tableau des caractéristiques du graphe, réalisé à l'aide d'un logiciel tableur

## Préparation

Vous allez créer des dossiers afin de ne pas mélanger vos productions numériques entre vos différentes matières et
travaux pratiques.

!!! note "Organisation de l'espace travail"

    === ":material-laptop: Ordinateur portable"

        1. Lancez l'application <i class="icon file-explorer"></i> **Explorateur de fichiers**
        2. Dans le dossier `Document`, s'il n'y a pas de dossier nommé `SNT`, créez-le
        3. Dans le dossier `SNT`, créez-le dossier `Réseaux sociaux`

    === ":material-desktop-tower: Ordinateur fixe"

        1. Depuis le bureau, double-cliquez sur l'icône intitulée **Zone personnelle**
        2. Dans la **zone personnelle**, s'il n'y a pas de dossier nommé `SNT`, créez-le
        3. Dans le dossier `SNT`, créez-le `Réseaux sociaux`

## Graphe d'un réseau social

Vous souhaitez disposer d'un graphe des acteurs de Christopher Nolan. Chaque sommet représente donc un acteur.
Les liens entre les sommets, les arêtes, symbolisent le fait que deux acteurs se connaissent.
On considère que deux acteurs se connaissent à partir du moment où ils ont joué au moins une fois dans le même film.

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
    On considère que deux acteurs se connaissent s'ils ont joué au moins une fois dans un même film.

    1. Rendez vous sur l'outil en ligne [:material-link: Digidiagram](https://ladigitale.dev/digidiagram/#/){:target="_blank"} de La Digitale
    2. Cliquez sur **Créer un diagramme**
    3. Saisissez **Réseau social** comme nom de diagramme
    4. Choisissez **Quel est mon mot préféré ?** comme question secrète
    5. Saisissez **SNT** comme réponse secrète

!!! help "Aide à la construction du graphe"

    <div style="position: relative; padding-top: 56.25%;"><iframe title="SNT - Réseaux sociaux - Création d'un graphe" width="100%" height="100%" src="https://tube-sciences-technologies.apps.education.fr/videos/embed/b1b6e526-fa4a-4e46-967a-6e71587efdca?warningTitle=0" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" style="position: absolute; inset: 0px;"></iframe></div>

    Dans la vidéo, nous créons une arête entre **Christian Bale** et **Michael Caine** car ceux-ci se connaissent pour avoir jouer ensemble dans le film **Le Prestige**.
    Cette vidéo est un exemple et vous devez bien entendu construire un graphe avec tous les individus.

!!! note "Consigne"

    Maintenant que votre graphe est terminé, il vous faut l'exporter :

    1. Cliquez sur l'icône de partage :material-share-variant: située en haut à droite
    2. Cliquez sur le bouton **Exporter**
    3. Déplacez l'image téléchargée, **sans la renommée**, dans le dossier de travail `SNT\Réseaux sociaux`

## Tableau des propriétés

Maintenant que votre graphe est prêt, vous vous interrogez sur la ou les personnes qu'il serait judicieux de contacter
en premier.
Heureusement, grâce à vos cours de SNT, vous savez qu'il est possible de trouver le (ou les) centre(s) d'un graphe. En
quoi est-ce utile ?
Dans le cas présent, trouver le centre du graphe, c'est trouver la personne qui a accès à l'ensemble des membres du
réseau en faisant intervenir le moins d'intermédiaires possible.

Pour trouver le centre du graphe, il vous faut déterminer l'ensemble des distances puis l'écartement de chaque sommet.
Une fois le(s) centre(s) trouvé(s), il vous restera à préciser le rayon et le diamètre du graphe.

| N° | Caractéristique | Définition                                                                 |
|:--:|:---------------:|:---------------------------------------------------------------------------|
| 1  |    Distance     | Nombre **minimum** d'arêtes reliant deux sommets                           |
| 2  |   Écartement    | **La plus grande distance** entre un sommet et tout autre sommet du graphe |
| 3  |    Centre(s)    | Sommet(s) dont **l'écartement** est le plus petit                          |
| 4  |      Rayon      | Plus petit écartement du graphe (écartement d'un centre)                   |
| 4  |    Diamètre     | Plus grand écartement du graphe                                            |

!!! help "Tableau des caractéristiques du graphe"

    Vous allez construire le tableau des caractéristiques du graphe à l'aide d'un tableaur.
    Voici en image ce à quoi celui-ci pourrait ressembler.
    La numérotation en surimpression correspond à la liste des caractéristiques mentionnées plus haut et à déterminer pour
    votre propre graphe :

    1. Les distances *(nombre minimum d'arêtes reliant deux sommets)*
    2. Les écartements *(la plus grande distance** entre un sommet et les autres sommets du graphe)*
    3. Le ou les centres *(sommet(s) dont l'écartement** est le plus petit)*  
    4. Le rayon et le diamètre *(plus petit et plus grand écartement)*  

    <figure markdown>
        ![selecteur_type](images/specification_table.png){:style="max-width:100%;border:1px solid black;"}
    </figure>


!!! note "Consigne"

    Vous trouverez en téléchargement ci-dessous un début de tableau de caractéristiques
    qu'il vous faut compléter avec l'ensemble des acteurs et des caractéristiques demandées.
    Pensez à consulter l'aide pour voir ce à quoi doit ressembler votre tableau une fois terminé.

    1. Téléchargez l'amorce du tableau des caractéristiques : [:material-download: télécharger](assets/SNT03_caracteristiques.ods){:download="SNT03_caractéristiques.ods"}
    2. Déplacez le fichier `SNT03_caractéristiques.ods` téléchargé dans le dossier `Réseaux sociaux`
    3. Ouvrez le fichier avec **LibreOffice Calc** (ou à défaut, *Microsoft Excel*) :
        - Il y a une distance de 2 entre *Christian B.* et *Cillian M.* car deux arêtes les séparent sur le graphe  
        - Il y a une distance de 1 entre *Cillian M.* et *Tom H.* car ils sont directement liés par une arête
    4. Complétez le tableau

    <div style="position: relative; padding-top: 56.25%;"><iframe title="SNT - Réseaux sociaux - Caractéristiques" width="100%" height="100%" src="https://tube-sciences-technologies.apps.education.fr/videos/embed/7ff5da4a-4847-420f-b3a9-af227522c01f?warningTitle=0&amp;p2p=0" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" style="position: absolute; inset: 0px;"></iframe></div>



!!! warning "Attention"

    Pensez à enregistrer **fréquemment** votre travail. Nommez correctement votre fichier en précisant votre classe, votre
    nom ainsi qu'un mot-clé en rapport avec son contenu. Exemple :

    - `SEC01_Mark_Zukerberg_caracteristiques.ods` *(.ods est l'extension des fichiers LibreOffice Calc)*<br />
    - `SEC01_Mark_Zukerberg_caracteristiques.xlsx` *(.xlsx est l'extension des fichiers Microsoft Excel)*

## Envoi du travail

### Création d'un fichier ZIP

Pour faciliter l'envoi de plusieurs fichiers et dossiers, il est possible de tous les regrouper dans un unique fichier
au format ZIP. Suivez les instructions selon l'ordinateur utilisé :

!!! info "Création d'un fichier ZIP"

    === ":material-laptop: Ordinateur portable"

        - Lancez l'application <i class="icon file-explorer"></i> **Explorateur de fichiers** 
          <span class="keys shortcut"><kbd>:fontawesome-brands-windows:</kbd><span>+</span><kbd>E</kbd></span>
        - Accédez au dossier `SNT`
        - Effectuez un clic droit sur le dossier `Réseaux sociaux` afin d'afficher son menu contextuel
        - Choisissez l'option :material-folder-zip-outline: **Compresser dans un fichier ZIP**
        - Conservez `Réseaux sociaux.zip` comme nom de fichier

    === ":material-desktop-tower: Ordinateur fixe"

        - Lancez l'application <i class="icon file-explorer"></i> **Explorateur de fichiers**
          <span class="keys shortcut"><kbd>:fontawesome-brands-windows:</kbd><span>+</span><kbd>E</kbd></span>
        - Depuis votre dossier personnel, accédez au dossier `SNT`
        - Effectuez un clic droit sur le dossier `Réseaux sociaux` afin d'afficher son menu contextuel
        - Choisissez l'option **Envoyer vers ▸ Dossier compressé**
        - Conservez `Réseaux sociaux.zip` comme nom de fichier

    <div style="position: relative; padding-top: 56.25%;"><iframe title="SNT - Réseaux sociaux - Compressiond'un dossier" width="100%" height="100%" src="https://tube-sciences-technologies.apps.education.fr/videos/embed/4591a407-fcb8-4c3d-9021-a322a14fba27?warningTitle=0&amp;p2p=0" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" style="position: absolute; inset: 0px;"></iframe></div>

### Envoi du fichier ZIP

Une fois votre fichier ZIP créé, vous pouvez le déposer sur Pronote.

!!! info "Dépot du travail sur Pronote"

    1. Connectez-vous à l'ENT : [:material-link: https://monlycee.net](https://monlycee.net/){:target="_blank"}
    3. Accédez à l'application **Pronote**
    4. Depuis l'accueil, recherchez le devoir **SNT03 - TP1 Modélisation**
    5. Cliquez sur le bouton <span class="pronote-button">Déposer ma copie</span>
    6. Cliquez sur le bouton **Un seul fichier (*.pdf, *.doc, ...)**
    7. Déposez votre fichier ZIP