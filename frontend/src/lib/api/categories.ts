import { apiClient } from "@/lib/utils/api-client";

// カテゴリをすべて取得
export const getCategories = async () => {
    const data = await apiClient.get("categories");
    return data;
};
