import axios from 'axios';
import { FolderDto } from '../models/folder';
const API_URL = 'https://localhost:7254';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const api = {
  async getFolders() {
    try {
      const response = await apiClient.get<FolderDto[]>('api/Folder');
      return response.data;
    }
    catch (error:any) {
        throw error;
    }
  },

  async getFolderLanguages(id: string) {
  try {
    const response = await apiClient.get<Record<string, number>>(`api/Folder/${id}/languages`);
    return response.data;
  } catch (error: any) {
    throw error;
  }
}
};