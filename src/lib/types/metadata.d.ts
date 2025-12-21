declare type PaginatedResponse<T> = {
  metadata: Metadata;
} & T;
