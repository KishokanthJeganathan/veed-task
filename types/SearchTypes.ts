//these types were obtained via https://transform.tools/json-to-typescript and contains only a select subset of data that was required for this app.
// did not want too many types blocking readability
export interface SearchResponse {
  total_count: number;
  incomplete_results: boolean;
  items: Item[];
}

export interface Item {
  name: string;
  forks: number;
  html_url: string;
  stargazers_count: number;
  language: string;
}
