import { getCategories } from "@/lib/api/categories";

export default async function Page() {
    const categories = await getCategories();
    return <div>{JSON.stringify(categories)}</div>;
}
