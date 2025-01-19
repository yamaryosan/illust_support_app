import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // シーディング前にテーブルをクリア
    await prisma.tagsImages.deleteMany();
    await prisma.tipsImages.deleteMany();
    await prisma.tipsTags.deleteMany();
    await prisma.subCategoriesImages.deleteMany();
    await prisma.subCategoriesTips.deleteMany();

    await prisma.subCategories.deleteMany();
    await prisma.categories.deleteMany();
    await prisma.tips.deleteMany();
    await prisma.images.deleteMany();
    await prisma.tags.deleteMany();

    // テーブルを作成
    const category = await prisma.categories.create({
        data: { name: "Category 1" },
    });
    const subCategory = await prisma.subCategories.create({
        data: { name: "SubCategory 1", categoryId: category.id },
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
    await prisma.subCategoriesImages.create({
        data: { subCategoryId: subCategory.id, imageId: image.id },
    });
    await prisma.subCategoriesTips.create({
        data: { subCategoryId: subCategory.id, tipId: tip.id },
    });
    await prisma.tagsImages.create({
        data: { tagId: tag.id, imageId: image.id },
    });
    await prisma.tipsImages.create({
        data: { tipId: tip.id, imageId: image.id },
    });
    await prisma.tipsTags.create({
        data: { tipId: tip.id, tagId: tag.id },
    });
}

main();
