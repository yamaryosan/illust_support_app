import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.category.create({
        data: { name: "Category 1" },
    });
    await prisma.subCategory.create({
        data: { name: "SubCategory 1" },
    });
    await prisma.tip.create({
        data: { title: "Tip 1", content: "Tip 1" },
    });
    await prisma.image.create({
        data: { path: "test.jpg", description: "test" },
    });
    await prisma.tag.create({
        data: { name: "Tag 1" },
    });
}

main();
