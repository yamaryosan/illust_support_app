import express from "express";
import pgPromise from "pg-promise";

const router = express.Router();

// 以下にルーティングを記述
router.get("/", (req, res) => {
    res.send("Hello World");
});

const db = pgPromise()("postgresql://myuser:mypassword@localhost:5432/mydb");

// カテゴリをすべて取得
router.get("/categories", async (req, res) => {
    const categories = await db.any("SELECT * FROM categories");
    res.json(categories);
});

// あるIDのカテゴリに紐づくサブカテゴリを取得
router.get("/category/:id/subcategory", async (req, res) => {
    // IDが存在しない場合は404を返す
    if (!req.params.id) {
        res.status(404).send("Not Found");
        return;
    }
    const subCategories = await db.any(
        "SELECT * FROM subcategories WHERE category_id = $1",
        [req.params.id]
    );
    res.json(subCategories);
});

// あるIDのサブカテゴリに紐づく画像を取得
router.get("/subcategory/:id/image", async (req, res) => {
    // IDが存在しない場合は404を返す
    if (!req.params.id) {
        res.status(404).send("Not Found");
        return;
    }
    const images = await db.any(
        "SELECT i.* FROM images i JOIN subcategories_images si ON i.id = si.image_id WHERE si.subcategory_id = $1",
        [req.params.id]
    );
    res.json(images);
});

// あるIDのサブカテゴリに紐づくヒントを取得
router.get("/subcategory/:id/tip", async (req, res) => {
    const tips = await db.any(
        "SELECT t.* FROM tips t JOIN subcategories_tips st ON t.id = st.tip_id WHERE st.subcategory_id = $1",
        [req.params.id]
    );
    res.json(tips);
});

// 画像をすべて取得
router.get("/images", async (req, res) => {
    const images = await db.any("SELECT * FROM images");
    res.json(images);
});

// あるIDの画像を取得
router.get("/image/:id", async (req, res) => {
    try {
        const image = await db.one("SELECT * FROM images WHERE id = $1", [
            req.params.id,
        ]);
        res.json(image);
    } catch (error) {
        res.status(404).json({ message: "Not Found" });
    }
});

// 設定を取得
router.get("/setting", (req, res) => {
    res.json({ message: "Setting" });
});

// ヒントをすべて取得
router.get("/tips", async (req, res) => {
    const tips = await db.any("SELECT * FROM tips");
    res.json(tips);
});

// あるIDのヒントを取得
router.get("/tip/:id", async (req, res) => {
    try {
        const tip = await db.one("SELECT * FROM tips WHERE id = $1", [
            req.params.id,
        ]);
        res.json(tip);
    } catch (error) {
        res.status(404).json({ message: "Not Found" });
    }
});

// タグをすべて取得
router.get("/tags", async (req, res) => {
    const tags = await db.any("SELECT * FROM tags");
    res.json(tags);
});

// あるIDのタグを取得
router.get("/tag/:id", async (req, res) => {
    try {
        const tag = await db.one("SELECT * FROM tags WHERE id = $1", [
            req.params.id,
        ]);
        res.json(tag);
    } catch (error) {
        res.status(404).json({ message: "Not Found" });
    }
});

export default router;
