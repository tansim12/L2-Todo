import TodoContainer from "@/components/Todo/TodoContainer";
import Container from "../components/ui/Container";
const Todo = () => {
  return (
    <Container>
      <h1 className="text-2xl font-bold my-10 text-center">My Todos </h1>
      <TodoContainer></TodoContainer>
    </Container>
  );
};

export default Todo;
