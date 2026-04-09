export const ROUTES = {
  HOME: '/',
  FOLDERS: '/folders',
  CODE_SNIPPETS: '/folders/:folderId/codesnippets',
  CODE_SNIPPET_DETAILS: '/folders/:folderId/codesnippets/:codeSnippetId',
  getCodeSnippets: (folderId: string) => `/folders/${folderId}/codesnippets`,
  getCodeSnippet: (folderId: string, codeSnippetId: string) =>
    `/folders/${folderId}/codesnippets/${codeSnippetId}`,
} as const;
