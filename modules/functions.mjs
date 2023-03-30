import { card } from "../frontend-data/card.mjs";
import { top } from "../frontend-data/top.mjs";
import { slide } from "../frontend-data/slider.mjs";
import fs from "fs/promises";

export let topData = () => {
  return JSON.stringify({
    message: "success",
    data: top,
  });
};

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

export async function addFormData(d) {
  let readData = await fs.readFile("./database/inputform.txt", "utf-8");
  readData = JSON.parse(readData);
  readData.push(d);
  await fs.writeFile("./database/inputform.txt", JSON.stringify(readData));
}

export async function addEmailData(d) {
  let readEmailData = await fs.readFile("./database/emailData.txt", "utf-8");
  readEmailData = JSON.parse(readEmailData);
  readEmailData.push(d);
  await fs.writeFile("./database/emailData.txt", JSON.stringify(readEmailData));
}
