import { apiClient } from "@/lib/utils/api-client";

// 画像をすべて取得
export const getImages = async () => {
    const data = await apiClient.get(`images`);
    return data;
};

// あるIDの画像を取得
export const getImage = async (id: string) => {
    const data = await apiClient.get(`image/${id}`);
    return data;
};

// あるIDのサブカテゴリに紐づく画像を取得
export const getImagesBySubCategory = async (subCategoryId: string) => {
    const data = await apiClient.get(`subcategory/${subCategoryId}/image`);
    return data;
};

// あるIDのタグに紐づく画像を取得
export const getImagesByTag = async (tagId: string) => {
    const data = await apiClient.get(`tag/${tagId}/image`);
    return data;
};
