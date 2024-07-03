import { useAppSelector } from "@/Redux/hooks";
import { AddToModal } from "./AddToModal";
import TodoCard from "./TodoCard";
import { TodoFilter } from "./TodoFilter";
import { ITodo } from "@/Redux/Features/todoSlice";
// import { useGetTodoQuery } from "@/Redux/Api/api";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);

  // const {todos, isError, isLoading} = useGetTodoQuery(undefined) 
  // using this todos.data 
  return (
    <>
      {/* filter and add todo button  */}
      <div className="flex justify-between p-2">
        <AddToModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient rounded-lg p-2">
        {/* card   */}
        <div className="bg-white p-5 w-full h-full rounded-lg">
          {todos.length ? (
            todos.map((item: ITodo) => (
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
