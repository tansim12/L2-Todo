import { MdOutlineDeleteForever } from "react-icons/md";
import { Button } from "../ui/button";
import {
  ITodo,
  // toggleIsComplete,
} from "@/Redux/Features/todoSlice";
// import { useAppDispatch } from "@/Redux/hooks";
import { EditToModal } from "./EditToModal";
import {
  useDeleteTodoMutation,
  useToggleCompleteMutation,
} from "@/Redux/Api/api";
interface TTodoCardProps {
  item: ITodo;
}

const TodoCard = ({ item }: TTodoCardProps) => {
  const [deleteTodo] = useDeleteTodoMutation();
  const [updateIsComplete] = useToggleCompleteMutation();
  // const dispatch = useAppDispatch();
  const handleComplete = (item: Partial<ITodo>) => {
    // dispatch(toggleIsComplete(id));

    updateIsComplete({ id: item?._id, isCompleted: item?.isCompleted });
  };

  return (
    <div>
      <div className="flex justify-between items-center gap-3 bg-white p-2 rounded-lg my-3 border border-gray-400">
        <input
          onChange={() => handleComplete(item)}
          type="checkbox"
          name="complete"
          id="complete"
        />
        <p className="flex-1">{item?.priority}</p>
        <p className="flex-1">{item?.title}</p>

        <div className="flex-1">
          {item?.isCompleted ? (
            <p className="text-green-500 font-semibold">Done</p>
          ) : (
            <p className="text-red-500 font-semibold">Pending</p>
          )}
        </div>
        {/* <p>Time</p> */}
        <p className="flex-[2]">{item?.description}</p>
        {/* acton div  */}
        <div className="flex gap-5 items-center">
          <EditToModal item={item} />
          <Button
            onClick={() => deleteTodo({ id: item?._id })}
            className="bg-red-600"
          >
            <MdOutlineDeleteForever size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
