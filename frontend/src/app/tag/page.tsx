import { getTags } from "@/lib/api/tags";

export default async function Page() {
    const tags = await getTags();
    return <div>{JSON.stringify(tags)}</div>;
}
