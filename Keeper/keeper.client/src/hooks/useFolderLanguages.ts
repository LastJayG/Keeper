import { useState, useEffect } from 'react';
import { FolderDto } from '../models/folder';
import { api } from '../api/api';

export const useFolderLanguages = (folders: FolderDto[]) => {
  const [folderLanguages, setFolderLanguages] = useState<Record<string, Record<string, number>>>(
    {}
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (folders.length === 0) return;

    const loadLanguages = async () => {
      setIsLoading(true);
      try {
        const results: Record<string, Record<string, number>> = {};
        await Promise.all(
          folders.map(async (folder) => {
            results[folder.id] = await api.getFolderLanguages(folder.id);
          })
        );
        setFolderLanguages(results);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    loadLanguages();
  }, [folders]);

  return { folderLanguages, isLoading, error };
};
