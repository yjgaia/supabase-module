export default interface SubscribeToDataChangesOptions<T> {
  channel: string;
  table: string;
  filter?: string;
  onSubscribe: () => void;
  onInsert?: (newData: T) => void;
  onUpdate?: (newData: T) => void;
  onDelete?: (oldData: T) => void;
}
