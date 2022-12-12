import { useEffect, useState } from "react";

type CheckboxProps = {
  id: string;
  checked: boolean;
};

const useMultiCheckbox = ({ initialNames }: { initialNames: string[] }) => {
  const [checkedAll, setCheckedAll] = useState(false);
  const [checkboxList, setCheckboxList] = useState<CheckboxProps[]>([]);

  useEffect(() => {
    setCheckboxList(
      initialNames.map((name: string) => ({ id: name, checked: false }))
    );
  }, []);

  useEffect(() => {
    const notAllChecked = checkboxList.some((item) => !item.checked);
    setCheckedAll(!notAllChecked);
  }, [checkboxList]);

  const changeCheckedList = (id: string, checked: boolean) => {
    setCheckboxList(
      checkboxList.map((item) => (item.id === id ? { id, checked } : item))
    );
  };

  const changeAllCheckedList = (checked: boolean) => {
    setCheckedAll(checked);
    setCheckboxList(checkboxList.map((item) => ({ id: item.id, checked })));
  };

  return {
    checkedAll,
    setCheckedAll: changeAllCheckedList,
    checkboxList,
    setCheckboxList,
    changeCheckedList,
  };
};

export default useMultiCheckbox;
