import express from "express";

const router = express.Router();

// 以下にルーティングを記述
router.get("/", (req, res) => {
    res.send("Hello World");
});

router.get("/test", (req, res) => {
    res.send("Test");
});

export default router;
