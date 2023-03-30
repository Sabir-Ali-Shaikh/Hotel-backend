import http from "http";
import { parse } from "querystring";
import { topData } from "./modules/functions.mjs";
import { cardData } from "./modules/functions.mjs";
import { slideData } from "./modules/functions.mjs";
import { addFormData } from "./modules/functions.mjs";
import { addEmailData } from "./modules/functions.mjs";

const server = http.createServer(function (req, res) {
  try {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");

    if (req.url === "/form-data" && req.method === "POST") {
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
      res.end(JSON.stringify({message:"done"}))
    } else if (req.url === "/email-data" && req.method === "POST") {
      let chunks = "";
      req.on("data", (chunk) => {
        chunks = chunk.toString();
        console.log(chunks);
      });

      req.on("end", () => {
        let emailData = parse(chunks);
        console.log(emailData);
        if (Object.keys(emailData).length !== 0) {
          addEmailData(emailData);
        }
      });
      res.end(JSON.stringify({message:"done"}))
    } else if (req.url === "/top") {
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
