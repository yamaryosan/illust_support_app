const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const apiClient = {
    get: async (endpoint: string) => {
        const res = await fetch(`${BASE_URL}/${endpoint}`);
        return res.json();
    },
};
