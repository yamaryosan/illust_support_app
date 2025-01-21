import { getSetting } from "@/lib/api/settings";

export default async function Page() {
    const setting = await getSetting();
    return <div>{JSON.stringify(setting)}</div>;
}
