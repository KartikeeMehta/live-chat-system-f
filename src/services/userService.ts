import api from './api';

export interface IUserProfile {
    id: string;
    _id?: string; // MongoDB ID
    username: string;
    email: string;
    displayName?: string;
    avatarUrl?: string;
    statusMessage?: string;
    blockedUsers?: string[];
    settings?: any;
    timezone?: string;
    language?: string;
}

export const userService = {
    getProfile: async () => {
        const response = await api.get<IUserProfile>('/users/profile');
        return response.data;
    },

    updateProfile: async (data: Partial<IUserProfile>) => {
        const response = await api.put('/users/profile', data);
        return response.data;
    },

    blockUser: async (userIdToBlock: string) => {
        await api.post('/users/block', { userIdToBlock });
    },

    unblockUser: async (userIdToUnblock: string) => {
        await api.post('/users/unblock', { userIdToUnblock });
    }
};
