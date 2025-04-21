let
  nixpkgs = fetchTarball "https://github.com/NixOS/nixpkgs/tarball/nixos-24.11";
  pkgs = import nixpkgs { config = {}; overlays = []; };
in

pkgs.mkShellNoCC {
  packages = [
    pkgs.git
    pkgs.python3Full
    pkgs.pyenv
    pkgs.poetry
  ];
}