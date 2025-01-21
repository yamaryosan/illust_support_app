import { getSubCategories } from "@/lib/api/subcategories";

export default async function Page({ params }: { params: { id: string } }) {
    const subCategories = await getSubCategories(params.id);
    return <div>{JSON.stringify(subCategories)}</div>;
}
