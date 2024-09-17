---
title: Chapitre 2 - Ordinateurs - TP1 Interpréteur de commandes
description: Découverte des interpréteurs de commande
---

# Interpréteur de commandes Windows

## Introduction

Dans tout système d'exploitation, il existe une application appelée *« terminal »* ou *« console »*, et qui permet
d'exécuter des tâches en écrivant des commandes au clavier. Le terminal se présente généralement sous la forme d'une
simple fenêtre où un curseur clignotant signale l'attente d'une saisie de l'utilisateur.

!!! success "Objectif"

    Ces travaux pratiques ont pour objectif la découverte des commandes de base de l'interpréteur de commandes Linux 
    (en anglais **CLI** pour **command-line interpreter**).


## Préparation

### Lancement de Powershell

Le programme officiel impose de connaître les commandes Linux.
Au quotidien cependant, vous serez probablement amené à utiliser le CLI Windows.

!!! note "Lancement d'un CLI Powershell"

    1. Recherchez `power` en utilisant le champ de recherche de la barre de tâches Windows
    2. Lancez l'application **Windows PowerShell**

### ️Liste des commandes

Les commandes utilisables dans l'interpréteur sont innombrables et dépendent des applications installées sur votre système d'exploitation.

Voici une liste de commandes communément utilisées pour explorer et manipuler un système de fichiers.
Parcourez attentivement cette liste et comprenez le rôle de chaque commande avant de commencer les travaux pratiques.

| Commandes                      | Documentation                                                |
|:-------------------------------|:-------------------------------------------------------------|
| `pwd`                          | Affiche le chemin absolu du dossier courant                  |
| `ls`                           | Liste le contenu du dossier courant                          |
| `cat` *nom_fichier*            | Affiche le contenu du fichier *nom_fichier*                  |
| `cp` *source destination*      | Copie le fichier *source* dans *destination*                 |
| `mv` *source destination*      | Déplace et/ou renomme le fichier *source* vers *destination* |
| `rm` *nom_fichier*             | Supprimer le fichier *nom_fichier*                           |
| `cd` *nom_dossier*             | Place l'utilisateur dans le dossier *nom_dossier*            |
| `cd ..`                        | Place l'utilisateur dans le dossier parent                   |
| `mkdir` *nom_dossier*          | Crée un dossier nommé *nom_dossier*                          |
| `rmdir` *nom_dossier*          | Supprime le dossier *nom_dossier*                            |
| `man` *commande*               | Affiche la documentation d'une commande                      |

## Instructions

### Déplacements

!!! note "Déplacement dans une arborescence"

    1. Placez-vous à la racine `C:\`
    2. Placez-vous dans le dossier `Windows`
    3. Comment auriez-vous pu faire ça en une seule étape ?
    4. Listez le contenu du dossier `Windows`

!!! tip "Conseil"
    
    Vous pouvez à tout moment utiliser la touche ++tab++ pour compléter la saisie d'un nom de fichier ou de répertoire.

### Création d'éléments

!!! note "Création de dossiers"

    1. Placez-vous dans votre dossier personnel `C:\Users\prenomnom`
    2. Placez-vous dans le dossier `Documents`
    3. Créez un dossier nommé `premiere_nsi`
    4. Dans ce dossier, créez un dossier nommé `chapitre_1`
    5. Vérifiez le résultat dans l'explorateur de fichiers

!!! note "Création d'un fichier"

    1. Placez-vous dans le dossier `~\Documents\premiere_nsi`
    2. Entrez la commande suivante :
    ```bash
    echo "Hello, World!" > salutations.txt
    ```
    3. Listez le contenu du dossier `home`. Un fichier nommé `salutations.txt` doit être maintenant présent
    4. Affichez le contenu du fichier `salutation.txt`

### Modification d'éléments

!!! note "Déplacement d'un fichier"

    1. Déplacez le fichier `salutations.txt` dans le dossier `chapitre_1`<br>
       *(Soyez rigoureux sur la saisie du chemin de destination car si le dossier n'existe pas, il pourrait y avoir renommage au lieu de déplacement)* 
    2. Créez un dossier `archives` dans le dossier `premiere_nsi`
    3. Copiez le fichier `salutations.txt` dans le dossier `archives` en le renommant `salutations_v1.txt`

!!! note "Suppression d'un fichier et d'un dossier"

    1. Supprimez le fichier `salutations.txt` présent dans le dossier `chapitre_1`
    2. Supprimez le dossier `chapitre_1`