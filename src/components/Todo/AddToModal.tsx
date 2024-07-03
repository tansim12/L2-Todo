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
// import { useAppDispatch } from "@/Redux/hooks";
import { ITodo } from "@/Redux/Features/todoSlice";
import { useAddTodoMutation } from "@/Redux/Api/api";

export function AddToModal() {
  const [task, setTask] = useState("");

  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("high");

  // using redux  and manage local state
  // const dispatch = useAppDispatch();

  // using redux RTK query mutation  with post server
  const [addTodo] = useAddTodoMutation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const payload: ITodo = {
      title: task,
      description,
      priority: priority as "high" | "medium" | "low",
      id: Math.random().toString(32).substring(2, 7),
    };

    // using redux  and manage local state
    // dispatch(addTodo(payload));

    // using rtk query and post server
    addTodo(payload);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient text-white px-3 py-2 rounded-md">
          Add Todo
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
