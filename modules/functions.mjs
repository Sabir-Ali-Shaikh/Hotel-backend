import { card } from "../local-data/card.mjs";
import { top } from "../local-data/top.mjs";
import { slide } from "../local-data/slider.mjs";
import fs from "fs/promises";

export let topData = () => {
  return JSON.stringify({
    message: "success",
    data: top,
  });
};

export async function addFormData(d) {
  let readData = await fs.readFile("./database/inputform.txt", "utf-8");
  readData = JSON.parse(readData);
  readData.push(d);
  await fs.writeFile("./database/inputform.txt", JSON.stringify(readData));
}

export let cardData = () => {
  return JSON.stringify({
    message: "success",
    data: card,
  });
};

export let slideData = () => {
  return JSON.stringify({
    message: "success",
    data: slide,
  });
};
