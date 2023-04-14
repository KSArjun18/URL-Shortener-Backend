const express = require("express");
const { allUrl } = require("../controllers/url-shortener/allUrl");
const { createUrl } = require("../controllers/url-shortener/createUrl");
const { deleteShortUrl } = require("../controllers/url-shortener/deleteShotUrl");

const { shortUrl } = require("../controllers/url-shortener/shortUrl");
const { authentication } = require("../middlewares/authentication");


const router = express.Router();



router.post("/create-url",authentication,createUrl);
router.get("/all-Url/:id",authentication,allUrl);
router.get("/shortUrl/:shortUrl",shortUrl);
router.delete("/delete-short/:id",authentication,deleteShortUrl)








module.exports = router;
