---
title: Programmation défensive
description: Introduction à la programmation défensive
---

# Protection des fonctions

## Introduction

Vous allez implémenter une fonction dont l'algorithme n'est correct que dans certaines conditions.
Pour empêcher toute mauvaise utilisation de cette fonction, vous allez devoir la protéger.

!!! target "Objectifs"

    Savoir utiliser des assertions afin de protéger l'utilisation d'une fonction.

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
        5. Dans le dossier `chapitre_04` créez le dossier `assetions`

    === ":material-desktop-tower: Ordinateur fixe"

        1. Depuis le bureau, double-cliquez sur l'icône intitulée **Zone personnelle**
        2. Dans la **zone personnelle**, s'il n'y a pas de dossier `NSI`, créez-le
        3. Dans le dossier `NSI`, s'il n'y a pas de dossier `chapitre_04`, créez-le
        4. Dans le dossier `chapitre_04` créez le dossier `assetions`



## Mise en pratique

Vous allez implémenter une fonction dont l'algorithme n'est correct que dans certaines conditions.
Pour empêcher toute mauvaise utilisation de cette fonction, vous allez devoir la protéger.

### Implémentation initiale

Soit la fonction `multiplication` ayant pour paramètres `x` et `y` deux entiers positifs ou nuls.
Cette fonction renvoie le produit de `x` par `y` sans utilisation de l'opérateur `*` selon l'algorithme décrit dans la
*docstring*

```python
def multiplication(x, y):
    """
    Renvoie la produit de x par y.
  
    x -- Entier positif non nul
    y -- Entier positif non nul
  
    Algorithme :
       total ← 0
       Répéter y fois :
          total ← total + x
       renvoyer total
    """
```

!!! note "Instructions"
    
    1. Lancez l'application Thonny
    2. Créez un nouveau fichier `CTRL+N`
    3. Copiez/collez le code Python de la fonction `multiplication`
    4. Implémentez l'algorithme
    5. Enregistrez votre programme dans le fichier `NSI\chapitre_04\assetions\multiplication.py`
    6. Lancez le programme afin que la fonction `multiplication` soit disponible dans la console Python
    7. Vérifiez que vous obtenez `4` pour l'appel de fonction `multiplication(2, 2)`

### Implémentation avec assertions

!!! note "Instructions"

    Testez les appels de fonction ci-dessous depuis la console Python :

    - `#!python multiplication(2, -2)`
    - `#!python multiplication(-2, 2)`
    - `#!python multiplication(1.1, 2)`
    - `#!python multiplication(2, 1.1)`

??? success "Résultat attendu"

    Vous devriez obtenir l'affichage console ci-dessous.

    === ":material-console: Console"

        ```text
        >>> multiplication(2, -2)
        0
        >>> multiplication(-2, 2)
        -4
        >>> multiplication(1.1, 2)
        2.2
        >>> multiplication(2, 1.1)
        Traceback (most recent call last):
          File "<stdin>", line 1, in <module>
          File "multiplication.py", line 15, in multiplication
            for _ in range(y):
        TypeError: 'float' object cannot be interpreted as an integer
        ```

Vous constaterez des résultats erronés, voire des erreurs, selon les arguments d'appel.
En effet, l'algorithme est conçu pour ne fonctionner qu'avec des entiers positifs ou nuls.
Il faudrait donc protéger la fonction `multiplication` de tout usage non conforme et ainsi éviter l'introduction 
d'anomalies au sein de programmes plus vastes.

Pour cela, vous allez utiliser des **assertions**.
Une assertion est une condition qui doit être vraie pour poursuivre l'exécution d'un programme.
L'exécution de la fonction `multiplication` ne doit être possible que si les **préconditions** suivantes sont 
respectées :

- `x` est un entier
- `x` est supérieur ou égal à 0
- `y` est un entier
- `y` est supérieur ou égal à 0

En Python, l'instruction `assert` permet la définition d'une assertion.
Voici l'équivalent en assertions Python des préconditions listées pour la fonction `multiplication` :

```python
assert isinstance(x, int)  # valide si x est de type int
assert x >= 0              # valide si x est positif ou nul
assert isinstance(y, int)  # valide si y est de type int
assert y >= 0              # valide si y est positif ou nul
```

Vous allez ajouter les assertions à la fonction `multiplication`.
Celles-ci doivent être les premières instructions de la fonction et sont à placer juste après la *docstring*.
Une fois les assertions en place, toute précondition non respectée déclenchera une `AssertionError`.

```python
def multiplication(x, y):
    """
    --- Docstring ---
    """
    assert isinstance(x, int)
    assert x >= 0
    assert isinstance(y, int)
    assert y >= 0

    # --- Code ---
```

!!! note "Instructions"

    1. Implémenter les assertions
    2. Enregistrez vos modifications
    3. Lancez le programme afin que la fonction `multiplication` soit à jour dans la console Python
    4. Testez de nouveau les appels suivant dans la console Python :
        - `#!python multiplication(2, -2)`
        - `#!python multiplication(-2, 2)`
        - `#!python multiplication(1.1, 2)`
        - `#!python multiplication(2, 1.1)`

??? success "Résultat attendu"

    Vous devriez obtenir l'affichage console ci-dessous. Les lignes importantes sont surlignées.

    === ":material-console: Console"

        ```text hl_lines="1 5"
        >>> multiplication(2, -2)
        Traceback (most recent call last):
          File "<stdin>", line 1, in <module>
          File "multiplication.py", line 17, in multiplication
            assert y >= 0
        AssertionError
        ```

        ```text hl_lines="1 5"
        >>> multiplication(-2, 2)
        Traceback (most recent call last):
          File "<stdin>", line 1, in <module>
          File "multiplication.py", line 15, in multiplication
            assert x >= 0
        AssertionError
        ```
        
        ```text hl_lines="1 5"
        >>> multiplication(1.1, 2)
        Traceback (most recent call last):
          File "<stdin>", line 1, in <module>
          File "multiplication.py", line 14, in multiplication
            assert isinstance(x, int)
        AssertionError
        ```

        ```text hl_lines="1 5"
        >>> multiplication(2, 1.1)
        Traceback (most recent call last):
          File "<stdin>", line 1, in <module>
          File "multiplication.py", line 16, in multiplication
            assert isinstance(y, int)
        AssertionError
        ```

## Application

Vous allez maintenant appliquer les concepts introduits dans le cadre des exercices précédents.
Pour cela, vous devrez implémenter une nouvelle fonction, en écrire la documentation, les tests et les préconditions.


Selon le même principe que l'exercice 3, écrire la fonction `puissance` ayant pour paramètres `x` et `y` deux entiers
positifs ou nuls.
Cette fonction renvoie la valeur de `x` élevé à la puissance `y`. Utiliser uniquement l'opérateur `*` et une boucle.

- Enregistrer le code dans un fichier fichier `puissance.py`
- Écrire la documentation docstring (description de la fonction et des paramètres)
- Écrire l'algorithme dans la doctring
- Écrire les tests que vous jugerez pertinents au format doctest
- Écrire les assertions


!!! note "Consigne"

    Écrire la fonction `puissance` ayant pour paramètres `n` et `p` deux entiers positifs ou nuls.
    Cette fonction renvoie la valeur de `n` élevé à la puissance `p` sans utiliser l'opérateur `**`.

    ```text
    >>> puissante(2, 3)
    8
    >>> puissante(2, 0)
    1
    ```

    1. Définir la fonction `puissance`
    2. Écrire la documentation *docstring*
    3. Écrire l'algorithme dans la *docstring*
    3. Écrire des tests pertinents au format *doctest*
    4. Ajouter le code d'exécution du jeu de tests
    5. Implémenter la fonction sans oublier les assertions
    6. Enregistrer le programme dans le fichier `NSI\chapitre_04\assetions\puissance.py`
    7. Vérifiez que les tests et les assertions fonctionnent