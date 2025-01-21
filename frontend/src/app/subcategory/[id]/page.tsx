import { getImagesBySubCategory } from "@/lib/api/images";
import { getTipsBySubCategory } from "@/lib/api/tips";

export default async function Page({ params }: { params: { id: string } }) {
    const subCategoryId = params.id;
    const images = await getImagesBySubCategory(subCategoryId);
    const tips = await getTipsBySubCategory(subCategoryId);
    return (
        <>
            <h1>SubCategory {subCategoryId}</h1>
            <p>画像</p>
            <div>{JSON.stringify(images)}</div>
            <p>ヒント</p>
            <div>{JSON.stringify(tips)}</div>
        </>
    );
}
