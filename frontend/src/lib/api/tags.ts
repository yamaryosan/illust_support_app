import { apiClient } from "@/lib/utils/api-client";

// タグをすべて取得
export const getTags = async () => {
    const data = await apiClient.get(`tags`);
    return data;
};

// ある画像に紐づくタグを取得
export const getTagsByImage = async (imageId: string) => {
    const data = await apiClient.get(`image/${imageId}/tags`);
    return data;
};

// あるヒントに紐づくタグを取得
export const getTagsByTip = async (tipId: string) => {
    const data = await apiClient.get(`tip/${tipId}/tags`);
    return data;
};
