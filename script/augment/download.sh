#!/bin/bash

# 증강 정보
# https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/ko_kr/v1/cherry-augments.json

DOWNLOAD_DIR="$(dirname "$0")/assets"
LIST_FILE="$(dirname "$0")/list.txt"

mkdir -p "$DOWNLOAD_DIR"

while IFS=" " read -r url filename; do
  echo "Downloading $url to $DOWNLOAD_DIR/$filename.png"
  curl -o "$DOWNLOAD_DIR/$filename.png" "$url"
done < "$LIST_FILE"