import api from './api';

export interface IConversation {
  _id: string;
  type: 'direct' | 'group';
  participants: { userId: string; role?: string; isPinned?: boolean; isArchived?: boolean; mutedUntil?: string }[];
  lastMessage?: {
    content: string;
    senderId: string;
    createdAt: string;
  };
  updatedAt: string;
  name?: string;
  avatar?: string;
}

export interface IMessage {
  _id: string;
  conversationId: string;
  senderId: string;
  content: string;
  createdAt: string;
  attachments?: string[]; // IDs or Objects? For now IDs or populated objects? Backends sends IDs usually unless populated.
}

export interface IAttachment {
  _id: string;
  filename: string;
  originalName: string;
  path: string;
  mimetype: string;
  size: number;
}

export const chatService = {
  createConversation: async (participantId: string) => {
    const response = await api.post<IConversation>('/chat/conversations', { participantId });
    return response.data;
  },

  getConversations: async () => {
    const response = await api.get<IConversation[]>('/chat/conversations');
    return response.data;
  },

  sendMessage: async (conversationId: string, content: string, attachments?: string[]) => {
    const response = await api.post<IMessage>('/chat/messages', { conversationId, content, attachments });
    return response.data;
  },

  getMessages: async (conversationId: string) => {
    const response = await api.get<IMessage[]>(`/chat/messages/${conversationId}`);
    return response.data;
  },

  markAsRead: async (conversationId: string) => {
    await api.post('/chat/messages/read', { conversationId });
  },

  uploadFile: async (file: File, conversationId: string) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('conversationId', conversationId);
    
    const response = await api.post<IAttachment>('/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },

  createGroup: async (name: string, participantIds: string[]) => {
      const response = await api.post<IConversation>('/chat/groups', { name, participants: participantIds });
      return response.data;
  },

  updatePreferences: async (conversationId: string, prefs: { isPinned?: boolean, isArchived?: boolean, mutedUntil?: string | null }) => {
      const response = await api.put<IConversation>('/chat/conversations/preferences', { conversationId, ...prefs });
      return response.data;
  },

  searchMessages: async (query: string, conversationId?: string) => {
      const params = new URLSearchParams({ query });
      if (conversationId) params.append('conversationId', conversationId);
      const response = await api.get<IMessage[]>(`/chat/search?${params.toString()}`);
      return response.data;
  },

  getNotifications: async () => {
      const response = await api.get<any[]>('/notifications');
      return response.data;
  },

  markNotificationsRead: async (ids: string[]) => {
      await api.post('/notifications/read', { notificationIds: ids });
  },

  saveMessage: async (messageId: string) => {
      await api.post('/chat/messages/save', { messageId });
  },

  getSavedMessages: async () => {
      const response = await api.get<IMessage[]>('/chat/messages/saved');
      return response.data;
  },
  
  exportConversation: async (conversationId: string) => {
      // Trigger download
      window.open(`http://localhost:3000/chat/conversations/${conversationId}/export`, '_blank');
  },
  
  // Admin methods (can move to adminService)
  getAdminStats: async () => {
      const response = await api.get('/admin/stats');
      return response.data;
  },

  getAllUsers: async () => {
      const response = await api.get('/admin/users');
      return response.data;
  }
};
