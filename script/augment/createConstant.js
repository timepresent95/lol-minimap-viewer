import { writeFile } from "node:fs/promises";
import { Buffer } from "node:buffer";

// NOTE: https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/ko_kr/v1/cherry-augments.json

// NOTE: PBE 더미 데이터 제거해야 함
// {
//   id: 110,
//   nameTRA: "아이템 활용가", //itemizer
//   augmentSmallIconPath:
//     "/lol-game-data/assets/ASSETS/UX/Cherry/Augments/Icons/MidnightExpress_small.png",
//   rarity: "kSilver",
// },

const augmentJson = [];

const augmentInfos = augmentJson
  .map(({ id, nameTRA, rarity }) => ({
    id,
    name: nameTRA,
    rarity: rarity.slice(1),
  }))
  .sort((a, b) => a.id - b.id);

try {
  for (const augment of augmentInfos) {
    const { id, name, rarity } = augment;

    const data = new Uint8Array(
      Buffer.from(`${id}:{id: ${id}, name: "${name}", rarity: "${rarity}"},\n`)
    );

    await writeFile("constant.txt", data, { encoding: "utf8", flag: "as+" });
  }
} catch (err) {
  console.error(err);
}
