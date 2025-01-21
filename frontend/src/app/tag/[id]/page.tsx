import { getImagesByTag } from "@/lib/api/images";
import { getTipsByTag } from "@/lib/api/tips";

export default async function Page({ params }: { params: { id: string } }) {
    const tagId = params.id;
    const images = await getImagesByTag(tagId);
    const tips = await getTipsByTag(tagId);
    return (
        <>
            <h1>Tag {tagId}</h1>
            <p>画像</p>
            <div>{JSON.stringify(images)}</div>
            <p>ヒント</p>
            <div>{JSON.stringify(tips)}</div>
        </>
    );
}
