---
title: Programmation défensive
description: Introduction à la programmation défensive
---

# Automatisation des tests

## Introduction

Il existe de plusieurs techniques d'automatisation des tests. Vous apprendrez à utiliser le module
[:material-book-open-variant: doctest](https://docs.python.org/fr/3.11/library/doctest.html)
qui permet d'écrire des jeux de tests directement dans une
[:material-book-open-variant: docstring](https://docs.python.org/fr/3.11/tutorial/controlflow.html#tut-docstrings).

!!! target "Objectif"

    Savoir utiliser le module `doctest` afin de définir et lancer des tests.

## Préparation

Vous allez créer des dossiers afin de ne pas mélanger vos productions numériques entre vos différentes matières et
travaux pratiques.

!!! note "Organisation de l'espace travail"

    === ":material-laptop: Ordinateur portable"

        1. Lancez l'application <i class="icon file-explorer"></i> **Explorateur de fichiers** 
           <span class="keys shortcut"><kbd>:fontawesome-brands-windows:</kbd><span>+</span><kbd>E</kbd></span>
        2. Accédez à votre dossier <i class="icon onedrive"></i> **OneDrive**
        3. Dans le dossier `OneDrive`, s'il n'y a pas de dossier `NSI`, créez-le
        4. Dans le dossier `NSI`, s'il n'y a pas de dossier `chapitre_04`, créez-le
        5. Dans le dossier `chapitre_04` créez le dossier `doctests`

    === ":material-desktop-tower: Ordinateur fixe"

        1. Depuis le bureau, double-cliquez sur l'icône intitulée **Zone personnelle**
        2. Dans la **zone personnelle**, s'il n'y a pas de dossier `NSI`, créez-le
        3. Dans le dossier `NSI`, s'il n'y a pas de dossier `chapitre_04`, créez-le
        4. Dans le dossier `chapitre_04` créez le dossier `doctests`

## Mise en pratique

Pour expérimenter le module `doctest`, vous devrez écrire la fonction `salutation` qui prend en paramètre le code d'une langue au
format [:material-link: ISO 639-1](https://fr.wikipedia.org/wiki/Liste_des_codes_ISO_639-1)
*(code pays représenté sur deux caractères)* et qui renvoie la formule de salutation correspondant à celui-ci.

Vous ne prendrez en compte que les langues listées dans le tableau ci-après.
Si le code de la langue n'est pas reconnu, le formule anglaise sera renvoyée par défaut.

<figure markdown>

| Code ISO 639-1      | Formule |
|---------------------|---------|
| `en` *(par défaut)* | *Hello* |
| `fr`                | *Salut* |
| `es`                | *Hola*  |

</figure>

### Implémentation initiale

!!! note "Instructions"

    1. Lancez l'application Thonny
    2. Créez un nouveau fichier `CTRL+N`
    3. Copiez/collez le code Python suivant :
        ```python
        def salutation(langue):
            """
            Renvoie le formule de salutation propre une langue donnée.
        
            langue -- Chaîne au format ISO 639-1
            """
        ```
    4. Enregistrez votre programme dans le fichier  `NSI\chapitre_04\tp2\salutation.py`

Vous allez maintenant implémenter la fonction `salutation` en ne prenant en compte que les langues **fr** et **es**
pour le moment. Il est donc question d'une fonction qui renvoie `#!python 'Salut'` si appelée avec l'argument `#!python 'fr'` 
et `#!python 'Hola'` si appelée avec l'argument `#!python 'es'`. 

L'anglais et la valeur par défaut seront pris en charge **dans un second temps**.

Vous testerez cette fonction **uniquement depuis la console Python**.
Le fichier `salutation.py` ne contiendra donc que la définition de la fonction `salutation` et rien d'autre.

!!! note "Instructions"

    1. Implémenter la fonction `salutation` pour **fr** et **es**
    2. Enregistrez vos modifications
    3. Lancez le programme afin que la fonction `salutation` soit disponible dans la console Python
    4. Testez manuellement la fonction `salutation` pour les langues **fr** et **es** depuis la console Python

??? success "Résultat attendu"

    Voici ce que vous devriez obtenir dans la console Python après y avoir manuellement appelé la fonction :
    
    === ":material-console: Console"

        ```
        >>> salutation("fr")
        'Salut'
        >>> salutation("es")
        'Hola'
        ```

??? tip "Conseil - Les raccourcis clavier de Thonny"

    Pour plus d'efficacité, notamment en l'absence de souris, faites usage des raccourcis clavier proposés par Thonny.
    Vous trouvez ci-dessous les plus utiles dans le cadre cet exercice.

    - Enregistrer le script courant <span class="shortcut">++ctrl+s++</span>
    - Exécuter le script courant <span class="shortcut">++f5++</span> 
    - Placer le curseur dans l'éditeur <span class="shortcut">++alt+e++</span> 
    - Placer le curseur dans la console <span class="shortcut">++alt+s++</span>
    - Récupérer les précédentes commandes saisies <span class="shortcut">++up++</span>

### Implémentation des tests

Vous allez maintenant modifier le fichier `salutation.py` afin d'ajouter un **jeu de tests** automatisés.
Observez ci-dessous une nouvelle version de la *docstring* de la fonction `salutation`. Vous constaterez que l'écriture
des tests
consiste simplement à recopier dans la *docstring* ce que vous pourriez obtenir en effectuant manuellement les tests 
depuis la console Python.

```python
def salutation(langue):
    """
    Renvoie le formule de salutation propre une langue donnée.
  
    langue -- Chaîne au format ISO 639-1
  
    >>> salutation('fr')
    'Salut'
    >>> salutation('es')
    'Hola'
    >>> salutation('en')
    'Hello'
    >>> salutation('??')
    'Hello'
    """
```

!!! note "Instructions"

    1. **Ajoutez** le jeu de tests à la *doctring* de la fonction `salutation`
    2. Ajoutez  le code ci-dessous d'import du module `doctest` et d'exécution des tests en fin de fichier :<br>
       *(Attention à l'indentation, ce code doit être en dehors du corps de la fonction `salutation`)*
        ```python
        if __name__ == "__main__":
            import doctest
            doctest.testmod()
        ```
    3. Exécutez le programme

??? success "Résultat attendu"

    Vous devriez obtenir l'affichage console ci-dessous.
    Vous constaterez que deux tests n'ont pas le résultat attendu. 
    Il s'agit de l'anglais et la langue par défaut qui n'ont pas encore été implémentés.

    === ":material-console: Console"

        ```text
        **********************************************************************
        File "exercice1.py", line 12, in __main__.salutation
        Failed example:
        salutation('en')
        Expected:
        'Hello'
        Got nothing
        **********************************************************************
        File "exercice1.py", line 14, in __main__.salutation
        Failed example:
        salutation('??')
        Expected:
        'Hello'
        Got nothing
        **********************************************************************
        1 items had failures:
        2 of   4 in __main__.salutation
        ***Test Failed*** 2 failures.
        ```

### Implémentation finale

Terminez d'écrire le code de la fonction `salutation` en prenant en charge la langue anglaise, sans oublier de
l'utiliser comme langue par défaut.
Si votre implémentation est correcte, l'exécution de votre programme ne devrait plus entrainer l'affichage de tests en
erreur dans la console.

## Application

Vous allez maintenant appliquer les concepts découverts dans le cadre de l'exercice précédent.
Pour cela, vous devrez implémenter une nouvelle fonction, en écrire la documentation et les tests.

!!! note "Consigne"

    Écrire la fonction `initiales` ayant pour paramètres `prenom` et un `nom` et renvoyant les initiales en majuscule.
    On ne prendra en compte que la première lettre du prénom et du nom même s'il s'agit d'un prénom composé ou de 
    plusieurs noms. Voici un exemple d'appel de la fonction depuis la console Python :

    ```text
    >>> initiales("grace", "Hopper")
    'GH'
    ```

    1. Créer un nouveau programme et l'enregistrer dans `NSI\chapitre_04\doctests\initiales.py`
    2. Implémenter la fonction `initiales`
    3. Écrire la documentation *docstring*
    4. Écrire des tests pertinents au format *doctest*
    4. Ajouter le code d'exécution du jeu de tests
    5. Enregistrer le programme
    6. Vérifiez que les tests fonctionnent

??? tip "Aide - Récupérer le premier caractère d'une chaîne"

    Vous pouvez obtenir le caractère en position *n* d'une variable `message` en utilisant l'expression 
    `#!python message[n]`. L'expression pour récupérer le premier caractère de `#!python message` serait 
    `#!python message[0]` car la numérotation se fait à partir de zéro.

    === ":material-console: Console"

        ```
        >>> message = 'Bonjour'
        >>> message[0]
        'B'
        ```

??? tip "Aide - Convertir une chaîne en majuscules"

    Vous pouvez obtenir la conversion en majuscules d'une variable `message` en utilisant l'expression `message.upper()`

    === ":material-console: Console"

        ```
        >>> message = 'Bonjour'
        >>> message.upper()
        'BONJOUR'
        ```