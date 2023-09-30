import React from "react";

const List = ({ items, setCheckedItems }) => {
  const changeHandler = (item) => {
    const value = Number(item.target.value);
    // on toggle add or remove from the checkedItems
    if (item.target.checked) setCheckedItems((prev) => [...prev, value]);
    else setCheckedItems((prev) => prev.filter((i) => i !== value));
  };

  return (
    <form action='' className='List'>
      {items.map((item) => (
        <div key={item}>
          <input
            id={item}
            name={item}
            value={item}
            type='checkbox'
            onChange={changeHandler}
          />
          <label htmlFor={item}>{item}</label>
        </div>
      ))}
    </form>
  );
};

export default List;
