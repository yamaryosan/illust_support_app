import { getTips } from "@/lib/api/tips";

export default async function Page() {
    const tips = await getTips();
    return <div>{JSON.stringify(tips)}</div>;
}
