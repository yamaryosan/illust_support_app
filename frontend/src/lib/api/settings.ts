import { apiClient } from "@/lib/utils/api-client";

// 設定を取得
export const getSetting = async () => {
    const data = await apiClient.get(`setting`);
    return data;
};
