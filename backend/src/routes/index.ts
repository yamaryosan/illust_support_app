import express from "express";
import pgPromise from "pg-promise";

const router = express.Router();

// 以下にルーティングを記述
router.get("/", (req, res) => {
    res.send("Hello World");
});

const db = pgPromise()("postgresql://myuser:mypassword@localhost:5432/mydb");

router.get("/category", async (req, res) => {
    // データベースからカテゴリを取得
    const categories = await db.query("SELECT * FROM categories");
    res.json(categories);
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
