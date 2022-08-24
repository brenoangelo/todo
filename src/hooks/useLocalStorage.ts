export function useLocalStorage<T>(): [
  storage: T | null,
  setStorage: (key: string, value: T) => void,
] {
  const itemStoraged: T | null = JSON.parse(
    localStorage.getItem('tasks') ?? '',
  );

  function setStorage(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  return [itemStoraged, setStorage];
}
