export interface CodeSnippetDto {
  id: string;
  title: string;
  description: string;
  code: string;
  programmingLanguage: string;
  createdAt: string;
}

export interface CodeSnippetShortDto {
  id: string;
  title: string;
  programmingLanguage: string;
  createdAt: string;
}
