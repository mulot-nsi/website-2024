# Application web

## Objectif

Découvrir les traitements côté serveur en PHP et en Python

## Version PHP

### Installation de PHP

!!! note "Instructions"

    1. Télécharger l'archive ZIP de la version 8.4.7 de PHP depuis [la page officielle de téléchargement](https://windows.php.net/download/){:target="_blank"} (VS17 x64 Non Thread Safe)
    2. Décompresser l'archive ZIP
    3. Renommer le répertoire `php-8.4.7-nts-Win32-vs17-x64` en `php`
    5. Lancer l'application **Invite de commande**
    6. Exécuter la commande ci-dessous qui permet de rendre php accessible depuis n'importe quel dossier :
    ```
    set PATH=%PATH%;C:%HOMEPATH%\Downloads\php
    ```
    7. Vérifier que PHP soit bien accessible en lançant la commande :
    ```
    php -v
    ```
    8. Vous devez obtenir l'affichage suivant :
    ```
    PHP 8.2.2 (cli) (built: Jan 31 2023 21:19:11) (ZTS Visual C++ 2019 x64)
    Copyright (c) The PHP Group
    Zend Engine v4.2.2, Copyright (c) Zend Technologies
    ```

### Squelette de l'application

!!! note "Instructions"

    1. [Télécharger](assets/version_php.zip) le squelette d'application
    2. Décompresser l'archive ZIP
    3. Ouvrir l'ensemble des fichiers dans l'éditeur de votre choix (Notepad++, Visual Studio Code, ...)

### Lancement du serveur

!!! note "Instructions"

    1. Lancer l'application **Invite de commande**
    2. Se déplacer jusqu'au dossier du squelette *(en considérant qu'il soit le dossier Téléchargements)*
    ```
    cd C:%HOMEPATH%\Downloads\version_php
    ```
    3. Une fois dans le dossier, lancer un serveur PHP :

    ```
    set PATH=%PATH%;C:%HOMEPATH%\Downloads\php
    php -d extension=C:%HOMEPATH%\Downloads\php\ext\php_gd.dll -S localhost:8080
    ```
    4. Se rendre à l'adresse [http://localhost:8080](http://localhost:8080), une page avec pour titre **Page d'accueil** doit s'afficher

### Exécution des traitements
Le squelette comporte 3 traitements dont il vous faudra comprendre parfaitement le fonctionnement :

- [Traitement 1](http://localhost:8080/exemple_traitement_1.php){:target="_blank"} - génération d'une réponse texte
- [Traitement 2](http://localhost:8080/exemple_traitement_2.php){:target="_blank"} - génération d'une réponse HTML
- [Traitement 3](http://localhost:8080/exemple_traitement_3.php){:target="_blank"} - génération d'une réponse image


!!! note "Instructions"

    1. Se rendre sur [http://localhost:8080/exemple_traitement_1.php](http://localhost:8080/exemple_traitement_1.php){:target="_blank"}
    2. Un message réclamant le paramètre **nom** doit s'afficher
    3. Fournir une valeur au paramètre **nom** directement via l'URL
    4. Un message réclamant que le paramètre **nom** soit fourni via la méthode POST doit s'afficher
    5. Modifier la page `index.php` afin créer le formulaire permettant d'envoyer le paramètre **nom** en utilisant la méthode POST
    6. Modifier le formulaire de façon à appeler le [traitement numéro 2](http://localhost:8080/exemple_traitement_2.php){:target="_blank"} et observez le résultat
    7. Modifier le formulaire de façon à appeler le [traitement numéro 3](http://localhost:8080/exemple_traitement_3.php){:target="_blank"} et observer le résultat
    8. Expérimenter en modifiant le formulaire et les traitements afin de bien comprendre le fonctionnement de l'ensemble

## Version Python

### Squelette de l'application

!!! note "Instructions"

    1. Télécharger le squelette d'application : [Télécharger](assets/version_python.zip)
    2. Décompresser l'archive ZIP
    3. Renommer le dossier en `squelette_python`
    4. Ouvrir l'ensemble des fichiers sous Thonny *(ou tout autre éditeur que vous maîtrisez)*

### Lancement du serveur

!!! note "Instructions"

    1. Installer les modules **Flask** et **Pillow**
    2. Lancer le fichier `server.py` en passant par la console système *(Outils ▸ Ouvrir la console du système...)*

### Exécution des traitements
Le squelette comporte 3 traitements dont il vous faudra comprendre parfaitement le fonctionnement :

- [Traitement 1](http://localhost:8080/exemple_traitement_1){:target="_blank"} - génération d'une réponse texte
- [Traitement 2](http://localhost:8080/exemple_traitement_2){:target="_blank"} - génération d'une réponse HTML
- [Traitement 3](http://localhost:8080/exemple_traitement_3){:target="_blank"} - génération d'une réponse image

!!! note "Instructions"

    1. Se rendre sur [http://localhost:8080/exemple_traitement_1](http://localhost:8080/exemple_traitement_1){:target="_blank"}
    2. Un message réclamant le paramètre **nom** doit s'afficher
    3. Fournir une valeur au paramètre **nom** directement via l'URL
    4. Un message réclamant que le paramètre **nom** soit fourni via la méthode POST doit s'afficher
    5. Modifier le template `templates\index.html` afin créer le formulaire permettant d'envoyer le paramètre **nom** en utilisant la méthode POST
    6. Modifier le formulaire de façon à appeler le [traitement numéro 2](http://localhost:8080/exemple_traitement_2){:target="_blank"} et observez le résultat
    7. Modifier le formulaire de façon à appeler le [traitement numéro 3](http://localhost:8080/exemple_traitement_3){:target="_blank"} et observer le résultat
    8. Expérimenter en modifiant le formulaire et les traitements afin de bien comprendre le fonctionnement de l'ensemble