export interface ResultHandler<T = never> {
  onError?(err: Error): void;
  onSuccess?: (...data: T extends never ? [never] : [T]) => void;
}
