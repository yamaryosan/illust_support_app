import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // シーディング前にテーブルをクリア
    await prisma.tagImage.deleteMany();
    await prisma.tipImage.deleteMany();
    await prisma.tipTag.deleteMany();
    await prisma.subCategoryImage.deleteMany();
    await prisma.subCategoryTip.deleteMany();

    await prisma.subCategory.deleteMany();
    await prisma.category.deleteMany();
    await prisma.tip.deleteMany();
    await prisma.image.deleteMany();
    await prisma.tag.deleteMany();

    // テーブルを作成
    const category = await prisma.category.create({
        data: { name: "Category 1" },
    });
    const subCategory = await prisma.subCategory.create({
        data: { name: "SubCategory 1", categoryId: category.id },
    });
    const tip = await prisma.tip.create({
        data: { title: "Tip 1", content: "Tip 1" },
    });
    const image = await prisma.image.create({
        data: { path: "test.jpg", description: "test" },
    });
    const tag = await prisma.tag.create({
        data: { name: "Tag 1" },
    });
    // 中間テーブル
    await prisma.subCategoryImage.create({
        data: { subCategoryId: subCategory.id, imageId: image.id },
    });
    await prisma.subCategoryTip.create({
        data: { subCategoryId: subCategory.id, tipId: tip.id },
    });
    await prisma.tagImage.create({
        data: { tagId: tag.id, imageId: image.id },
    });
    await prisma.tipImage.create({
        data: { tipId: tip.id, imageId: image.id },
    });
    await prisma.tipTag.create({
        data: { tipId: tip.id, tagId: tag.id },
    });
}

main();
