# Site web

Nouvelle version du site web pour l'année scolaire 2023-2024.

# Documentation

- [MKDocs](https://www.mkdocs.org/)
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
- [Markdown extensions](https://facelessuser.github.io/pymdown-extensions/)

## Développement

### Développement MkDocs
Initialisation de l'environnement de développement :
```bash
uv sync
```

Lancement du serveur de développement :

```bash
(cd src ; uv run mkdocs serve)
```

### Test des cloud functions

Dans cette situation, il est nécessaire de lancer le serveur Vercel en local.

```bash
vercel dev
```

## Déploiement

Le site web est hébergé sur Vercel.
Le déploiement s'effectue automatiquement dès lors qu'une nouvelle est version poussée sur la branche `main`.

### Configuration Vercel

Les paramètres de build et de déploiement sont les suivants :

| Paramètre        | Valeur                             |
|------------------|------------------------------------|
| Framework Preset | Other                              |
| Root Directory   | `src`                              |
| Build Command    | `uv run mkdocs build`              |
| Output Directory | `site`                             |
| Install Command  | `uv sync`                          |
