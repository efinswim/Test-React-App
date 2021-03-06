import React from 'react';
import CustomInput from "./UI/input/CustomInput";
import CustomSelect from "./UI/select/CustomSelect";

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <CustomInput
        placeholder='Поиск'
        value={filter.query}
        onChange={(event) => setFilter({...filter, query: event.target.value})}
      />
      <CustomSelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue='Выберите фильтр'
        options={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'},
        ]}
      />
    </div>
  );
};

export default PostFilter;