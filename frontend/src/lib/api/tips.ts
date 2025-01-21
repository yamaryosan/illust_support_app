import { apiClient } from "@/lib/utils/api-client";

// ヒントをすべて取得
export const getTips = async () => {
    const data = await apiClient.get(`tips`);
    return data;
};

// あるIDのヒントを取得
export const getTip = async (id: string) => {
    const data = await apiClient.get(`tip/${id}`);
    return data;
};

// あるIDのサブカテゴリに紐づくヒントを取得
export const getTipsBySubCategory = async (subCategoryId: string) => {
    const data = await apiClient.get(`subcategory/${subCategoryId}/tip`);
    return data;
};

// あるIDのタグに紐づくヒントを取得
export const getTipsByTag = async (tagId: string) => {
    const data = await apiClient.get(`tag/${tagId}/tip`);
    return data;
};
