import React from 'react';

function List({ onClick, toDos }) {
  const listStyle = {
    listStyle: 'none',
  };
  return (
    <>
      {toDos.map(({ toDo, id }) => (
        <li style={listStyle} key={id}>
          {toDo}
          {' '}
          <button type="button" onClick={() => onClick(id)}>
            완료
          </button>
        </li>
      ))}
    </>
  );
}

export default List;
