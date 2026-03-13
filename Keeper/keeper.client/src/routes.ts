export const ROUTES = {
  HOME: '/',
  FOLDERS: '/folders',
  CODE_SNIPPETS: '/folders/:folderId/codesnippets',
  getCodeSnippets: (folderId: string) => `/folders/${folderId}/codesnippets`,
} as const;
