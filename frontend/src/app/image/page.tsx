import { getImages } from "@/lib/api/images";

export default async function Page() {
    const images = await getImages();
    return <div>{JSON.stringify(images)}</div>;
}
