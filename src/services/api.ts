import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://live-chat-system-b.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthToken = (token: string | null) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('accessToken', token);
  } else {
    delete api.defaults.headers.common['Authorization'];
    localStorage.removeItem('accessToken');
  }
};

// Initialize with existing token if available
const token = localStorage.getItem('accessToken');
if (token) {
  setAuthToken(token);
}

// Add interceptor for refresh token logic later if needed
api.interceptors.response.use(
  (response) => response,
  async (error) => {
      // Handle 401/403 -> Logout or Refresh
      if (error.response && error.response.status === 401) {
          // For now, just logout
          localStorage.removeItem('accessToken');
          // window.location.href = '/login'; // Simple redirect
      }
      return Promise.reject(error);
  }
);

export default api;
