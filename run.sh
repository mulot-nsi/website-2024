#!/usr/bin/env bash
nix-shell --run "poetry install ; cd src ; mkdocs serve"