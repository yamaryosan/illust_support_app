import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // シーディング前にテーブルをクリア
    await prisma.tags_images.deleteMany();
    await prisma.tips_images.deleteMany();
    await prisma.tips_tags.deleteMany();
    await prisma.subcategories_images.deleteMany();
    await prisma.subcategories_tips.deleteMany();

    await prisma.subcategories.deleteMany();
    await prisma.categories.deleteMany();
    await prisma.tips.deleteMany();
    await prisma.images.deleteMany();
    await prisma.tags.deleteMany();

    // テーブルを作成
    const category = await prisma.categories.create({
        data: { name: "Category 1" },
    });
    const subcategory = await prisma.subcategories.create({
        data: { name: "SubCategory 1", category_id: category.id },
    });
    const tip = await prisma.tips.create({
        data: { title: "Tip 1", content: "Tip 1" },
    });
    const image = await prisma.images.create({
        data: { path: "test.jpg", description: "test" },
    });
    const tag = await prisma.tags.create({
        data: { name: "Tag 1" },
    });
    // 中間テーブル
    await prisma.subcategories_images.create({
        data: { subcategory_id: subcategory.id, image_id: image.id },
    });
    await prisma.subcategories_tips.create({
        data: { subcategory_id: subcategory.id, tip_id: tip.id },
    });
    await prisma.tags_images.create({
        data: { tag_id: tag.id, image_id: image.id },
    });
    await prisma.tips_images.create({
        data: { tip_id: tip.id, image_id: image.id },
    });
    await prisma.tips_tags.create({
        data: { tip_id: tip.id, tag_id: tag.id },
    });
}

main();
