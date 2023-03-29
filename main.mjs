import http from "http";
import fs from "fs/promises";
import { parse } from "querystring";
import { topData } from "./modules/functions.mjs";
import { cardData } from "./modules/functions.mjs";
import { slideData } from "./modules/functions.mjs";
import { addFormData } from "./modules/functions.mjs";

const server = http.createServer(function (req, res) {
  try {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    let chunks = "";
    req.on("data", (chunk) => {
      chunks = chunk.toString();
      console.log(chunks);
    });

    req.on("end", () => {
      let formData = parse(chunks);
      console.log(formData);
      if (Object.keys(formData).length !== 0) {
        addFormData(formData);
      }
    });

    if (req.url === "/top") {
      res.end(topData());
    } else if (req.url === "/card") {
      res.end(cardData());
    } else if (req.url === "/slider") {
      res.end(slideData());
    } else {
      res.end(
        JSON.stringify({
          message: "server running ",
        })
      );
    }
  } catch (err) {
    console.log(err);
  }
});

server.listen(5000);
