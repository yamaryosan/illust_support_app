import Link from "next/link";

export default function Home() {
    return (
        <>
            <Link href="/category">
                <p>カテゴリー一覧</p>
            </Link>
            <Link href="/category/1">
                <p>カテゴリー1</p>
            </Link>
            <Link href="/subcategory/1">
                <p>サブカテゴリー1</p>
            </Link>
            <Link href="/tip">
                <p>チップ一覧</p>
            </Link>
            <Link href="/tip/1">
                <p>チップ1</p>
            </Link>
            <Link href="/image">
                <p>画像一覧</p>
            </Link>
            <Link href="/image/1">
                <p>画像1</p>
            </Link>
            <Link href="/setting">
                <p>設定</p>
            </Link>
            <Link href="/tag">
                <p>タグ一覧</p>
            </Link>
            <Link href="/tag/1">
                <p>タグ1</p>
            </Link>
        </>
    );
}
