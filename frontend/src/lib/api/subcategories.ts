import { apiClient } from "@/lib/utils/api-client";

// あるIDのカテゴリに紐づくサブカテゴリを取得
export const getSubCategories = async (categoryId: string) => {
    const data = await apiClient.get(`category/${categoryId}/subcategory`);
    return data;
};
