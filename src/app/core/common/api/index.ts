export interface SearchRequest {
  query: any
  page: number
  pageSize: number
}

export interface SearchResponse extends SearchRequest {
  result: Array<any>
}