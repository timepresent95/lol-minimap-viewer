import { writeFile } from "node:fs/promises";
import { Buffer } from "node:buffer";

//NOTE: https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/ko_kr/v1/cherry-augments.json
const augmentJson = [];

const augmentInfos = augmentJson.map(({ id, augmentSmallIconPath }) => {
  const chunks = augmentSmallIconPath.split("/");
  const file = chunks[chunks.length - 1]
    .toLowerCase()
    .replace("_small", "_large");
  const path = `https://raw.communitydragon.org/latest/game/assets/ux/cherry/augments/icons/${file}`;
  return {
    id,
    path,
  };
});

try {
  await Promise.all(
    augmentInfos.map(({ id, path }) => {
      const data = new Uint8Array(Buffer.from(`${path} ${id}\n`));

      return writeFile("list.txt", data, { encoding: "utf8", flag: "as+" });
    })
  );
} catch (err) {
  console.error(err);
}
