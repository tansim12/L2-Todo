// import { useAppSelector } from "@/Redux/hooks";
import { AddToModal } from "./AddToModal";
import TodoCard from "./TodoCard";
import { TodoFilter } from "./TodoFilter";
import { ITodo } from "@/Redux/Features/todoSlice";
import { useGetTodoQuery } from "@/Redux/Api/api";
import { useState } from "react";

const TodoContainer = () => {
const [priority , setPriority] = useState("")


  //* using local state by redux 
  // const { todos } = useAppSelector((state) => state.todos);

  const {data:todos } = useGetTodoQuery(priority)    // putin  query value 
  // using this todos.data  get by redux rtk query and server 


  return (
    <>
      {/* filter and add todo button  */}
      <div className="flex justify-between p-2">
        <AddToModal />
        <TodoFilter setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient rounded-lg p-2">
        {/* card   */}
        <div className="bg-white p-5 w-full h-full rounded-lg">
          {todos?.data?.length ? (
            todos?.data?.map((item: ITodo) => (
              <div key={item?.id}>
                <TodoCard item={item} />
              </div>
            ))
          ) : (
            <p className="text-black rounded-xl text-center text-3xl font-bold border-2 w-[30%] border-black mx-auto bg-white">
              There is no todo create 😥
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default TodoContainer;
