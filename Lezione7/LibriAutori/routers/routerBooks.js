//includi libreria express ed instanzia una costante
const express = require("express");
const app = express();
//router
const router = express.Router();
//controllers
const controllerBook = require("../controllers/controllerBooks");

/*
/booksActions/ + /addNewBook (POST)
                  /modifiedBook (PUT)
                  /filterBookByName (GET)
                  /filterBookByAuthor (GET)
                  /deleteBook (DELETE)
*/

router.post("/addNewBook/", controllerBook.addNewBook);
router.put("/modifiedBook/:ISBN", controllerBook.modifiedBook);
router.delete("/deleteBook/:ISBN", controllerBook.deleteBook)
module.exports = router;