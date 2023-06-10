import { useCallback, useEffect, useState } from "react";

export type SetValueAction = "Add";

export type SetValueData<T> = {
  data: T;
  action: SetValueAction;
};

const useLocalStorage = <T, K>(keyName: string, defaultValue: K) => {
  const [storedData, setStoredData] = useState<T[]>([]);
  const readValue = useCallback(() => {
    if (typeof window === "undefined") {
      return defaultValue;
    }

    try {
      const item = window.localStorage.getItem(keyName);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      return defaultValue;
    }
  }, [keyName, defaultValue]);

  useEffect(() => {
    setStoredData(readValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setValue = ({ data, action }: SetValueData<T>): void => {
    try {
      const newData = action === "Add" ? [...storedData, data] : storedData;

      window.localStorage.setItem(keyName, JSON.stringify(newData));
      setStoredData(newData);
    } catch (error) {
      throw new Error();
    }
  };

  return {
    storedData,
    setValue,
  };
};

export default useLocalStorage;
