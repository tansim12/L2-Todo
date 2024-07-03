import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "../ui/dialog";
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
  import { Button } from "../ui/button";
  import { FormEvent, useState } from "react";
  import { useAppDispatch } from "@/Redux/hooks";
  import { ITodo, editTodo } from "@/Redux/Features/todoSlice";
import { MdModeEdit } from "react-icons/md";
interface TTodoCardProps {
  item: ITodo;
}
  export function EditToModal({item}:TTodoCardProps) {
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("high");
    const dispatch = useAppDispatch();
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      const payload: ITodo = {
        title: task,
        description,
        priority: priority as "high" | "medium" | "low",
        id: item?.id as string,
        isCompleted:item?.isCompleted as boolean
      };
  console.log(payload);
  
      dispatch(editTodo(payload));
    };
    return (
      <Dialog>
        <DialogTrigger asChild>
        <Button className="bg-[#3f5efb]">
            <MdModeEdit />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
            <DialogDescription>
              Add your task that you want to finished.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="task" className="text-right">
                  Task
                </Label>
                <Input
                  onBlur={(e) => setTask(e.target.value)}
                  id="task"
                  className="col-span-3"
                  defaultValue={item?.title}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  onBlur={(e) => setDescription(e.target.value)}
                  id="description"
                  className="col-span-3"
                  defaultValue={item?.description}
                
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="priority" className="text-right">
                  Priority
                </Label>
                <Input
                  onChange={(e) => setPriority(e.target.value)}
                  id="priority"
                  className="col-span-3"
                  defaultValue={item?.priority}
                  
                />
              </div>
            </div>
            <div className="flex justify-end">
              <DialogClose asChild>
                <Button type="submit">Save changes</Button>
              </DialogClose>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    );
  }
  