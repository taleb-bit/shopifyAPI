const router = require("express").Router();
const shopController = require("../controllers/shopController");
router.get("/orders", shopController.getOrders);
router.get("/products", shopController.getProducts);

module.exports = router;
