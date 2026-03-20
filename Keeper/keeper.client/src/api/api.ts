import axios from 'axios';
import { CreateFolderDto, FolderDto } from '../models/folder';
import { CodeSnippetDto, CodeSnippetShortDto, CreateCodeSnippetDto } from '../models/codeSnippet';
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
    } catch (error: any) {
      throw error;
    }
  },

  async getFolder(folderId: string) {
    try {
      const response = await apiClient.get<FolderDto>(`api/Folder/${folderId}`);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },

  async getCodeSnippetsByFolderId(folderId: string) {
    try {
      const response = await apiClient.get<CodeSnippetShortDto[]>(
        `api/CodeSnippet/${folderId}/short`
      );
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },

  async getCodeSnippet(codeSnippetId: string) {
    try {
      const response = await apiClient.get<CodeSnippetDto>(`api/CodeSnippet/${codeSnippetId}`);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },

   async postCodeSnippet(codeSnippet: CreateCodeSnippetDto) {
    try {
      const response = await apiClient.post<CreateCodeSnippetDto>(`api/CodeSnippet`, codeSnippet);
      return response.data;
    } catch (error: any) {
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
  },

  async postFolder(folder: CreateFolderDto) {
    try {
      const response = await apiClient.post<FolderDto>(`api/Folder`, folder);
      return response.data;
    } catch (error: any) {
      throw error;
    }
  },
};
