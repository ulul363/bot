{ pkgs }: {
  deps = [
    pkgs.nodejs
    pkgs.bashInteractive           
    pkgs.nodePackages.bash-language-server
    pkgs.man
    pkgs.unzip
   pkgs.imagemagick
    pkgs.ffmpeg
    pkgs.libwebp
  ];
}