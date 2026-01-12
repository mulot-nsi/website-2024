---
title: Le Web - Projet - Minisite web - Préparation
description: Préparation de l'espace de travail et téléchargement des fichiers de base.
---

# 1. Préparation

## Espace de travail

Vous allez créer les dossiers nécessaires à accueillir le projet de minisite.
Notez que ceux-ci ont probablement tous été déjà créés dans le cadre des travaux pratiques.

!!! note "Organisation de l'espace travail"

    === ":material-laptop: Ordinateur portable"

        1. Lancez l'application <i class="icon file-explorer"></i> **Explorateur de fichiers**
        2. Dans le dossier `Document`, s'il n'y a pas de dossier nommé `SNT`, créez-le
        3. Dans le dossier `SNT`, s'il n'y a pas de dossier `web`, créez-le

    === ":material-desktop-tower: Ordinateur fixe"

        1. Depuis le bureau, double-cliquez sur l'icône intitulée **Zone personnelle**
        2. Dans la **zone personnelle**, s'il n'y a pas de dossier nommé `SNT`, créez-le
        3. Dans le dossier `SNT`, s'il n'y a pas de dossier `web`, créez-le

## Téléchargement des fichiers

Votre minisite ne sera pas construit à partir de zéro. Une version d'amorçage est disponible en téléchargement.
Il comporte une page d'accueil, une sous-page et quelques éléments mis en forme grâce à une feuille de style CSS
indépendante.

!!! note "Téléchargement du site d'amorçage"

    <h5>Étape 1 - Récupération du site d'amorçage</h5>

    1. Téléchargez le fichier ZIP contenant les fichiers d'amorçe du projet : [:material-download: télécharger](assets/SNT02_PRJ_MINISITE.zip){:download="SNT02_PRJ_MINISITE.zip"}
    2. Ouvrez le fichier ZIP<br>*(le navigateur l'ouvre automatiquement ou cliquez sur le fichier téléchargé)*
    3. Sélectionnez le dossier `init`
    4. Copiez le dossier `init` <span class="shortcut">++ctrl+c++</span>
    5. Collez le dossier `init` dans le dossier `SNT\Web` <span class="shortcut">++ctrl+v++</span>

    <h5>Étape 2 - Renommage du dossier</h5>

    <p>Renommez le dossier `init` en « <em style="color:green">nom</em>**_minisite** »<br>
    où <em style="color:green">nom</em> correspond au nom de famille de chaque élève du projet écrit en **minuscules**.</p>
    <p>Exemple : si le minisite était réalisé par **Tim Berners-Lee** et **Robert Cailliau**, 
          le dossier s'intitulerait `berners_lee_cailliau_minisite`</p>

Les fichiers fournis comme point de départ pour la création de votre minisite sont les suivants :

| Fichier             | Description                                                              |
|:--------------------|:-------------------------------------------------------------------------|
| `index.html`        | contient le code HTML de la page d'accueil                               |
| `style.css`         | contient le code CSS de mise en forme                                    |
| `page-exemple.html` | contient le code HTML d'une sous-page. Il sera nécessaire de le renommer |

## Logiciels

Pour visualiser les pages, vous utiliserez un navigateur Web comme Chrome, Firefox ou Edge.
Le contenu des pages peut être modifié à l'aide de l'application **Bloc-notes** de Windows.
Ce n'est cependant pas l'application la plus ergonomique et on lui préfèrera le logiciel **Notepad++**.

!!! danger "Important"

    Notepad++ est **installé sur votre ordinateur portable** et les ordinateurs du lycée, cherchez-le dans vos applications.

    Si l'application est en anglais, vous pouvez la passer en français en allant dans **Settings** puis **Preferences...** et choisir *« Français »* au niveau du champ **Localization**

??? note "Installation du logiciel Notepad++ (si nécessaire)"
    
    <h5>Étape 1 - Récupération du logiciel</h5>

    1. Téléchargez [:material-download: Notepad++ v8.7.1 **version portable** (zip)](https://github.com/notepad-plus-plus/notepad-plus-plus/releases/download/v8.7.1/npp.8.7.1.portable.x64.zip)
    2. Lancez l'application <i class="icon file-explorer"></i> **Explorateur de fichiers**
    3. Rendez-vous dans le dossier `Téléchargenment`
    4. Faites un **clic-droit** sur `npp.8.7.1.portable.x64.zip` et choisir l'option **Extraire tout...**
    5. Supprimez le fichier `npp.8.7.1.portable.x64.zip`
    
    <h5>Étape 2 - Lancement et configuration du logiciel</h5>

    1. Lancez l'application `notepad++.exe` depuis le dossier `npp.8.7.1.portable.x64`
    2. Passez l'application en français en allant dans **Settings** puis **Preferences...** et choisir *Français* au niveau du champ **Localization**