import useMultiCheckbox from "../hooks/useMultiCheckbox";

const MultiCheckbox = () => {
  const { checkedAll, setCheckedAll, checkboxList, changeCheckedList } =
    useMultiCheckbox({
      initialNames: ["a", "b"],
    });

  const [a, b] = checkboxList;

  return (
    <>
      <div>
        모두 동의
        <input
          type="checkbox"
          id="all"
          checked={checkedAll}
          onChange={(e) => setCheckedAll(e.target.checked)}
        />
      </div>
      <div>
        동의 1
        <input
          type="checkbox"
          id={a?.id}
          checked={a?.checked}
          onChange={(e) => changeCheckedList(a?.id, e.target.checked)}
        />
      </div>
      <div>
        동의 2
        <input
          type="checkbox"
          id={b?.id}
          checked={b?.checked}
          onChange={(e) => changeCheckedList(b?.id, e.target.checked)}
        />
      </div>
      <button disabled={!a?.checked || !b?.checked}>버튼</button>
    </>
  );
};

export default MultiCheckbox;
