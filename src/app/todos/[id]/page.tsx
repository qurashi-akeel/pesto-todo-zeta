import { formatDate } from "@/lib/utils";
import TodoFormDailog from "../todo-form-dialog";
import { TODO_STATUSES } from "@/constants";
import { TodoType } from "../todos-table";

const todo = {
  id: "m5gr84i9",
  description: "Description of the test todo 1",
  status: TODO_STATUSES.IN_PROGRESS,
  date: new Date("2024-04-01"),
  title: "todo title 1",
} as TodoType;

const SingleTodo = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-[75vh] py-4">
      {/* View Single todo */}
      <div className="w-full border">
        <div className="flex justify-between items-center py-4 px-5 flex-wrap border">
          <h2 className="text-xl font-semibold -mt-2">{todo.title}</h2>
          <p>{todo.status}</p>
          <p>{formatDate(todo.date, true).toUpperCase()}</p>
        </div>
        <div className="">
          <div className="float-right my-4 mx-10">
            <TodoFormDailog formType="edit" todo={todo} />
          </div>
          <p className="w-full p-5">{todo.description}</p>
        </div>
      </div>
      <div />
    </div>
  );
};
export default SingleTodo;
