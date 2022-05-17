//includi libreria express
const express = require("express");
//router
const router = express.Router();
//controllers
const controllerAuthors = require("../controllers/controllerAuthors");

/*
- /authorsActions/ + /addNewAuthor (POST)
                     /filterAuthor (GET)
                     /modifiedAuthor (PUT)
                     /deleteAuthor (DELETE)
*/

router.get("/filterAuthor/:PIVA", controllerAuthors.filterAuthor);

router.post("/addNewAuthor/", controllerAuthors.addNewAuthor);

router.put("/modifiedAuthor/:PIVA", controllerAuthors.modifiedAuthor);

router.delete("/deleteAuthor/:PIVA", controllerAuthors.deleteAuthor);

module.exports = router;