import { getTipsByTag } from "@/lib/api/tips";

export default async function Page({ params }: { params: { id: string } }) {
    const tipId = params.id;
    const tips = await getTipsByTag(tipId);
    return <div>{JSON.stringify(tips)}</div>;
}
