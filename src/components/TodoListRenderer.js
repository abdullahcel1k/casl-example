import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import Can from "./Can";
import PermissionEnums from "../enums/PermissionEnums";

export default function TodoListRenderer(props) {
  const { items, ...todoProps } = props;
  if (!items.length) {
    return "";
  }

  return (
      <section className="main">
        {
      console.log(items)}
        <ul className="todo-list">
          {items.map((todo) => (
            <Can do={PermissionEnums.TODO_VIEW} on={todo}>
              <TodoItem {...todoProps} todo={todo} key={todo.id} />
            </Can>
          ))}
        </ul>
      </section>
  );
}
