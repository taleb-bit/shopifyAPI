const axios = require("axios");

exports.getOrders = async (req, res) => {
  try {
    const { data } = await axios.get(
      "https://assignmentchef.myshopify.com/admin/api/2022-10/orders.json",
      {
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": "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",
        },
      }
    );
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getProducts = async (req, res) => {
  try {
    const { data } = await axios.get(
      "https://assignmentchef.myshopify.com/admin/api/2022-10/products.json",
      {
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": "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",
        },
      }
    );
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};
