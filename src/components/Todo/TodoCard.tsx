import {  MdOutlineDeleteForever } from "react-icons/md";
import { Button } from "../ui/button";
import {
  ITodo,
  deleteTodo,
  toggleIsComplete,
} from "@/Redux/Features/todoSlice";
import { useAppDispatch } from "@/Redux/hooks";
import { EditToModal } from "./EditToModal";
interface TTodoCardProps {
  item: ITodo;
}

const TodoCard = ({ item }: TTodoCardProps) => {
  const dispatch = useAppDispatch();

  const handleComplete = (id: string) => {
    dispatch(toggleIsComplete(id));
  };
  return (
    <div>
      <div className="flex justify-between items-center gap-3 bg-white p-2 rounded-lg my-3 border border-gray-400">
        <input
          onChange={() => handleComplete(item?.id)}
          type="checkbox"
          name="complete"
          id="complete"
        />
        <p>{item?.priority}</p>
        <p>{item?.title}</p>

        <div>
          {item?.isCompleted ? (
            <p className="text-green-500 font-semibold">Done</p>
          ) : (
            <p className="text-red-500 font-semibold">Pending</p>
          )}
        </div>
        {/* <p>Time</p> */}
        <p>{item?.description}</p>
        {/* acton div  */}
        <div className="flex gap-5 items-center">
         <EditToModal item={item}  />
          <Button
            onClick={() => dispatch(deleteTodo(item?.id))}
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
