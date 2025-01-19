import express from "express";

const router = express.Router();

// 以下にルーティングを記述
router.get("/", (req, res) => {
    res.send("Hello World");
});

router.get("/category", (req, res) => {
    res.json({ message: "Category" });
});

router.get("/category/:id", (req, res) => {
    res.json({ message: "Category 1" });
});

router.get("/image", (req, res) => {
    res.json({ message: "Image" });
});

router.get("/image/:id", (req, res) => {
    res.json({ message: "Image 1" });
});

router.get("/setting", (req, res) => {
    res.json({ message: "Setting" });
});

router.get("/subcategory", (req, res) => {
    res.json({ message: "Subcategory" });
});

router.get("/subcategory/:id", (req, res) => {
    res.json({ message: "Subcategory 1" });
});

router.get("/tag", (req, res) => {
    res.json({ message: "Tag" });
});

router.get("/tag/:id", (req, res) => {
    res.json({ message: "Tag 1" });
});

router.get("/tip", (req, res) => {
    res.json({ message: "Tip" });
});

router.get("/tip/:id", (req, res) => {
    res.json({ message: "Tip 1" });
});

export default router;
