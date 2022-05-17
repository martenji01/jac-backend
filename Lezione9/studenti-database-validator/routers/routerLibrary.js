//includi libreria express ed instanzia una costante
const express = require("express");
const app = express();
//router
const router = express.Router();
//controllers
const controllerLibrary = require("../controllers/controllerLibrary");

/*
/library/ + /filterBooksByAuthor (GET)
            /filterAuthorsByBook (GET)
*/

router.get("/filterBooksByAuthor/:PIVA", controllerLibrary.filterBooksByAuthor);
router.get("/filterAuthorsByBook/:ISBN", controllerLibrary.filterAuthorsByBook);

module.exports = router;
