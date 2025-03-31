---
title: TP2 - Les métadonnées
description: Découverte des métadonnées et des façons de les consulter
---

# Les métadonnées

## Introduction

Les métadonnées *(littéralement : données à propos des données)* sont des données servant à décrire d'autres données *(exemple : le titre d'un morceau de musique, l'auteur d'un document, ...)*.
L'objectif de ces travaux pratiques est d'apprendre à consulter les métadonnées d'un fichier ou d'une page web.

!!! warning "Attention - QCM noté"

    Soyez attentifs aux explications et aux questions. Un QCM Pronote sera à compléter **15 minutes** avant la fin de la séance.
    En attendant, vous pouvez gérer les réponses aux questions en :

    - les mémorisant
    - les notant sur une feuille de brouillon
    - les notant dans un fichier texte en utilisant le bloc-notes Windows

    Attention, vous ne pourrez répondre au QCM que pendant la séance, vous ne pourrez pas y répondre chez vous.

## Préparation

Vous allez créer des dossiers afin de ne pas mélanger vos productions numériques entre vos différentes matières et
travaux pratiques.

!!! note "Organisation de l'espace travail"

    === ":material-laptop: Ordinateur portable"

        1. Lancez l'application <i class="icon file-explorer"></i> **Explorateur de fichiers**
        2. Dans le dossier `Document`, s'il n'y a pas de dossier nommé `SNT`, créez-le
        3. Dans le dossier `SNT`, créez-le dossier `Données structurées`
        4. Dans le dossier `Données structurées`, créez-le dossier `TP2 - Métadonnées`

    === ":material-desktop-tower: Ordinateur fixe"

        1. Depuis le bureau, double-cliquez sur l'icône intitulée **Zone personnelle**
        2. Dans la **zone personnelle**, s'il n'y a pas de dossier nommé `SNT`, créez-le
        3. Dans le dossier `SNT`, créez-le dossier `Données structurées`
        4. Dans le dossier `Données structurées`, créez-le dossier `TP2 - Métadonnées`




## Exercices

### Métadonnées d'une musique

Nous disposons d'un fichier son au format [:material-link: MP3](https://fr.wikipedia.org/wiki/MP3){:target="_blank"} dont nous souhaitons connaître les informations suivantes : 

- le titre
- l'artiste
- l'année de composition

Ces informations sont potentiellement renseignées dans les métadonnées du fichier.

!!! note "Instructions"

    1. Téléchargez le fichier [:material-download: SNT04_musique.mp3](assets/SNT04_musique.mp3){:download="SNT04_musique.mp3"}
    2. Lancez l'application <i class="icon file-explorer"></i> **Explorateur de fichiers** 
       <span class="keys shortcut"><kbd>:fontawesome-brands-windows:</kbd><span>+</span><kbd>E</kbd></span>
    3. Déplacez le fichier vers le dossier de travail `SNT\Données structurées\TP2 - Métadonnées`
    4. Depuis l'explorateur de fichier, trouvez comment accéder aux métadonnés du fichier<br>
       *:material-comment-alert: il n'est pas nécessaire d'ouvrir le fichier en double-cliquant dessus*
    5. Notez les trois informations recherchées en vue de répondre au QCM Pronote

??? help "Aide - Accès aux métadonnées"

    Pour accéder aux métadonnés d'un fichier au format MP3 :
    
    1. Lancez l'explorateur de fichiers
    2. Faites un clic droit sur le fichier dont vous souhaitez consulter les métadonnés
    3. Cliquez sur *Propriétés* puis accédez à l'onglet *Détails*

    <div style="position: relative; padding-top: 56.25%;"><iframe title="Métadonnées d'un fichier MP3" width="100%" height="100%" src="https://tube-sciences-technologies.apps.education.fr/videos/embed/12bbb589-555e-4788-aa07-7b68d8cadc40?title=0&amp;warningTitle=0&amp;peertubeLink=0&amp;p2p=0" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" style="position: absolute; inset: 0px;"></iframe></div>




### Métadonnées d'une image

Nous disposons d'une photographie numérique au format [:material-link: JPEG](https://fr.wikipedia.org/wiki/JPEG){:target="_blank"}.
Nous souhaitons connaître l'appareil utilisé ainsi que la date et le lieu précis de la prise de vue.
Ces informations sont potentiellement renseignées dans les métadonnées du fichier.

!!! note "Instructions"

    1. Téléchargez le fichier [:material-download: SNT04_photo.jpg](assets/SNT04_photo.jpg){:download="SNT04_photo.jpg"}
    2. Déplacez le fichier vers le dossier de travail `SNT\Données structurées\TP2 - Métadonnées`
    3. Double-cliquez sur le fichier pour l'ouvrir
    4. Depuis l'application de visualisation, trouvez comment consulter les métadonnées
    5. Notez les trois informations recherchées en vue de répondre au QCM Pronote

??? help "Aide - Accès aux métadonnées"

    === ":material-microsoft-windows: Windows 11"

        Pour accéder aux métadonnés d'un fichier image :
        
        1. Lancez l'explorateur de fichiers
        2. Double-cliquez sur le fichier image pour l'ouvrir
        3. Cliquez sur l'icône :material-information-outline:

        <div style="position: relative; padding-top: 56.25%;"><iframe title="Métadonnées d'une image" width="100%" height="100%" src="https://tube-sciences-technologies.apps.education.fr/videos/embed/4c792d3b-f49c-44f0-9594-3f5e1b35fdff?title=0&amp;warningTitle=0&amp;peertubeLink=0&amp;p2p=0" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" style="position: absolute; inset: 0px;"></iframe></div>

    === ":material-web: Web"
        
        Certains site web offrent la possibilité de consulter les métadonnées d'une photo.<br>
        **:material-alert: N'envoyez jamais de photos personnelles** car rien ne garantit qu'elles ne soient pas réexploitées.

        1. 31/03/2025 - Site hors service...

!!! info "Explications"

    Les métadonnées d'une image sont générées automatiquement par l'outil de capture (un appareil photo, un téléphone).
    Elles sont intégrées directement aux données de l'image au moyen du format [:material-link: EXIF](https://fr.wikipedia.org/wiki/Exchangeable_image_file_format){:target="_blank"}.


### Métadonnées d'un PDF

Nous disposons d'un document PDF au format [:material-link: PDF](https://fr.wikipedia.org/wiki/PDF){:target="_blank"}.
Nous trouvons sa mise en forme intéressante et souhaitons connaître le logiciel utilisé pour le créer.
Cette information est potentiellement renseignée dans les métadonnées du fichier.

!!! note "Instructions"

    1. Téléchargez le fichier [:material-download: SNT04_droits-des-enfants.pdf](assets/SNT04_droits-des-enfants.pdf){:download="SNT04_droits-des-enfants.pdf"}
    2. Déplacez le fichier vers le dossier de travail `SNT\Données structurées\TP2 - Métadonnées`
    3. Ouvrez le fichier avec Chrome ou Firefox *(clic droit ▸ Ouvrir avec)*
    4. Depuis le navigateur, trouvez comment accéder aux métadonnées du fichier 
    5. Identifiez le logiciel utilisé pour créer ce document en vue de répondre au QCM Pronote

??? help "Aide - Accès aux métadonnées"

    === ":material-firefox: Firefox"

        Pour accéder aux métadonnés d'un fichier PDF en utilisant Firefox :
    
        1. Lancez l'explorateur de fichiers
        2. Faites un clic droit sur le fichier puis *Ouvrir avec :material-menu-right: Firefox*
        3. Depuis le menu de la visionneuse de PDF, cliquez sur *:material-information-outline: Propriétés du document...*
    
        <div style="position: relative; padding-top: 56.25%;"><iframe title="Métadonnées d'un fichier PDF (Firefox)" width="100%" height="100%" src="https://tube-sciences-technologies.apps.education.fr/videos/embed/7e4646fc-7fdf-4b07-a23e-d71f5c1b6c81?title=0&amp;warningTitle=0&amp;peertubeLink=0&amp;p2p=0" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" style="position: absolute; inset: 0px;"></iframe></div>

    === ":material-google-chrome: Chrome"

        Pour accéder aux métadonnés d'un fichier PDF en utilisant Chrome :
    
        1. Lancez l'explorateur de fichiers
        2. Faites un clic droit sur le fichier puis *Ouvrir avec* :material-menu-right: *Google Chrome*
        3. Depuis le menu de la visionneuse de PDF, cliquez sur :material-dots-vertical: puis *Propriétés du document*

        <div style="position: relative; padding-top: 56.25%;"><iframe title="Métadonnées d'un fichier PDF (Chrome)" width="100%" height="100%" src="https://tube-sciences-technologies.apps.education.fr/videos/embed/0b30d3b9-9e64-4bc8-bab5-78d7f402cd43?title=0&amp;warningTitle=0&amp;peertubeLink=0&amp;p2p=0" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" style="position: absolute; inset: 0px;"></iframe></div>

!!! info "Explications"

    Certaines métadonnées comme l'auteur ou les dates de création et modification sont générées automatiquement par les logiciels tableur ou de traitement de texte
    Vous avez cependant la possibilité de les modifier et ou renseigner d'autres.

### Métadonnées d'un document

Nous avons reçu les devoirs de deux élèves et constatons que ceux-ci sont identiques.
L'un d'eux a donc triché en se contentant de récupérer le travail de son camarade, mais lequel ?
Les informations présentes dans les métadonnées des fichiers pourraient nous aider.

!!! note "Instructions"

    1. Téléchargez le fichier du devoir de Judy [:material-download: SNT04_devoir-judy.ods](assets/SNT04_devoir-judy.ods){:download="SNT04_devoir-judy.ods"}
    2. Téléchargez le fichier du devoir de Peter [:material-download: SNT04_devoir-peter.ods](assets/SNT04_devoir-peter.ods){:download="SNT04_devoir-peter.ods"}
    3. Déplacez le fichier vers le dossier de travail `SNT\Données structurées\TP2 - Métadonnées`
    4. Ouvrez le devoir de **Judy** en premier
    5. Trouvez la fonction permettant de consulter les informations ou les propriétés du document
    6. Faites de même avec le devoir de **Peter**
    7. Identifiez l'élève ayant triché en vue de répondre au QCM Pronote

??? help "Aide - Accès aux métadonnées"

    === ":material-table: LibreOffice Calc"

        Pour accéder aux métadonnés d'un document d'une suite bureautique en utilisant LibreOffice Calc :

        1. Lancez l'explorateur de fichiers
        2. Faites un clic droit sur le fichier puis *Ouvrir avec :material-menu-right: LibreOffice Calc*
        3. Depuis le menu cliquez sur *Fichier :material-menu-right: Propriétés :material-menu-right: Général*

    === ":material-microsoft-excel: Microsoft Excel"

        Pour accéder aux métadonnés d'un document d'une suite bureautique en utilisant Microsoft Office :

        1. Lancez l'explorateur de fichiers
        2. Faites un clic droit sur le fichier puis *Ouvrir avec :material-menu-right: Microsoft Excel*
        3. Depuis le menu cliquez sur *Fichier :material-menu-right: Informations*

        <div style="position: relative; padding-top: 56.25%;"><iframe title="Métadonnées d'une page web" width="100%" height="100%" src="https://tube-sciences-technologies.apps.education.fr/videos/embed/0c3ad4a2-60cc-47ed-ac00-417d9a8d622f?title=0&amp;warningTitle=0&amp;peertubeLink=0&amp;p2p=0" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" style="position: absolute; inset: 0px;"></iframe></div>




### Métadonnées d'une page web

Vous pouvez définir les métadonnées d'une page HTML en utilisant la balise `#!html <meta>`.

!!! example "Exemple - Métadonnées indiquant l'auteur d'une page"

    ```html
     <meta name="author" content="Jean Dupont">
    ```

    - La propriété `name` correspond au **descripteur**. C'est le nom de la propriété pour laquelle nous souhaitons indiquer une valeur.
      Ici le descripteur est `author`, donc la métadonnée informe sur l'auteur de la page.
    - La propriété `content` correspond à la **valeur**, c'est à dire le nom de l'auteur

!!! example "Exemple - Métadonnées résumant le contenu d'une page"

    ```html
     <meta name="description" content="Mes recettes de cuisine préférées">
    ```
    
    Cette métadonnée permet de renseigner un résumé du contenu d'une page.
    Invisible des internautes, cette information est très utile pour :

    - les moteurs de recherche afin d'utiliser cette description pour décrire la page dans les résultats de recherche
    - les réseaux sociaux pour décrire la page lors d'un partage
    - les navigateurs pour ajouter une description lors de l'ajout aux favoris


Nous souhaitons consulter les métadonnées d'une page web. Pour ce faire, vous pouvez consulter le code source de la page :

!!! note "Instructions"

    1. Rendez-vous sur le site [:material-link: Digipdf ](https://digipdf.app/){:target="_blank"}
    2. Affichez le code source de la page
     <span class="keys shortcut">++ctrl+u++</span>
    3. Repérez la métadonnée `description` et lisez simplement sa valeur
    4. Repérez la métadonnée `og:image` et copiez-collez l'URL associée dans un nouvel onglet du navigateur afin de simplement visualiser l'image

!!! info "Les services libres de *La digitale*"

    L'application en ligne [:material-link: DigiPDF](https://digipdf.app/){:target="_blank"} propose de nombreux outils de manipulation des fichiers des PDF dont la possibilité de modifier les métadonnées.
    Cette application n'est que l'une des nombreuses autres disposibles sur le site [:material-link: La Digitale](https://ladigitale.dev/){:target="_blank"} et qui pourraient vous être utiles.
    Explorez ce site une fois ces travaux pratiques terminés.

Il existe des outils en ligne permettant de visualiser plus simplement les métadonnées d'une page web.
Celui que vous allez utiliser dans le cadre de ces travaux pratique permet notamment de simuler l'usage qui sera fait des métadonnées par Google, Twitter, Facebook, LinkedIn ou Pinterest 

!!! note "Instructions"

    1. Rendez-vous sur le site [:material-link: https://metatags.io/](https://metatags.io/){:target="_blank"}
    2. Copier/coller l'URL `https://digipdf.app/` dans le champ de saisie présent sur l'accueil
    3. Observez sur la gauche les métadonnées extaites et sur la droite les simulations.<br>
       *:material-comment-alert: Vous devriez observer des informations similaires à celles identifiées directement depuis le code source*

??? help "Aide - Accès aux métadonnées"
    
    Exemple de visualisation des métadonnées d'une page web avec le site de la ville de Chelles :

    <div style="position: relative; padding-top: 56.25%;"><iframe title="Métadonnées d'une page web" width="100%" height="100%" src="https://tube-sciences-technologies.apps.education.fr/videos/embed/0c3ad4a2-60cc-47ed-ac00-417d9a8d622f?title=0&amp;warningTitle=0&amp;peertubeLink=0&amp;p2p=0" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" style="position: absolute; inset: 0px;"></iframe></div>

## Bilan

### Questionnaire

!!! note "Instructions"

    1. Connectez-vous à l'ENT : [:material-link: https://ent.iledefrance.fr](https://ent.iledefrance.fr){:target="_blank"}
    3. Accédez à l'application **Pronote**
    4. Depuis l'accueil, recherchez le devoir **SNT04 - TP2 - Métadonnées**
    5. Répondre au QCM *(10 questions et pas de retour arrière possible)*

### Mise en pratique

Vous allez maintenant tester votre maîtrise d'accès aux métadonnées en réalisant les tâches ci-dessous.

!!! note "Instructions - Modification des métadonnées d'un fichier PDF"

    1. Rendez-vous sur le site [https://digipdf.app/](https://digipdf.app/){:target="_blank"}
    2. Trouvez-y l'outil de modification des métadonnées d'un fichier PDF
    3. Modifier les métadonnées de l'un de vos devoirs au format PDF<br>
       *:material-comment-alert: à défaut, modifiez les métadonnées du fichier PDF de ces travaux pratiques*

!!! note "Instructions - Modification des métadonnées d'un fichier Word ou Excel"

    1. Trouvez un devoir au format Word ou Excel
    2. Modifiez les métadonnés pour lui ajouter un titre, une description et à vérifiez que vous en soyez bien l'auteur

!!! note "Instructions - Vérification des métadonnées d'une photographie"

    1. Transférez une photo prise avec votre téléphone vers l'ordinateur<br>
       *:material-comment-alert: utilisez un câble ou trouvez un moyen de la transérer via Internet*
    2. Consultez les métadonnées de la photo<br>
       *:material-comment-alert: vous devez au moins voir indiqué le nom du modèle de téléphone utilisé pour la prise de vue*