import { formatDate } from "@/lib/utils";
import TodoFormDailog from "../todo-form-dialog";
import { TODO_STATUSES } from "@/constants";
import { TodoType } from "../todos-table";

const todo = {
  _id: "m5gr84i9",
  userId: "34rtyfghv",
  description: "Description of the test todo 1",
  status: TODO_STATUSES.IN_PROGRESS,
  createdAt: new Date("2024-04-01"),
  title: "todo title 1",
} as TodoType;

const SingleTodo = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-[75vh] py-4">
      {/* View Single todo */}
      <div className="w-full border">
        <div className="flex justify-between items-center py-4 px-5 flex-wrap border">
          <h2 className="text-xl font-semibold p-2">{todo.title}</h2>
          <p className="p-2">{todo.status}</p>
          <p className="p-2">
            {formatDate(todo.createdAt, true).toUpperCase()}
          </p>
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
