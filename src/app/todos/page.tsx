import TodoFormDailog from "./todo-form-dialog";
import TodosDataTable, { TodoType } from "./todos-table";

// fetch todos from DB
const data: TodoType[] = [
  {
    id: "m5gr84i9",
    description: "Description of the test todo 1",
    status: "IN_PROGRESS",
    date: new Date("2024-04-01"),
    title: "todo title 1",
  },
  {
    id: "m5g7yg4i9",
    description: "Description of the test todo 2",
    status: "PLANNED",
    date: new Date("2024-04-03"),
    title: "Todo title 2",
  },
  {
    id: "m5gedg4i9",
    description: "Description of the test todo 3",
    status: "COMPLETED",
    date: new Date("2024-04-12"),
    title: "Todo title 3",
  },
  {
    id: "m5fref4i9",
    description: "Description of the test todo 4",
    status: "PLANNED",
    date: new Date("2024-04-06"),
    title: "Todo title 4",
  },
  {
    id: "m5vfvfvg",
    description: "Description of the test todo 5",
    status: "PLANNED",
    date: new Date("2024-04-10"),
    title: "Todo title 5",
  },
  {
    id: "fsdfjvkf",
    description: "Description of the test todo 6",
    status: "DELETED",
    date: new Date("2024-04-15"),
    title: "Todo title 6",
  },
  {
    id: "m5hfti9",
    description: "Description of the test todo 7",
    status: "IN_PROGRESS",
    date: new Date("2024-04-01"),
    title: "todo title 7",
  },
  {
    id: "m5kugy4i9",
    description: "Description of the test todo 8",
    status: "COMPLETED",
    date: new Date("2024-04-02"),
    title: "todo title 8",
  },
  {
    id: "fvkdvjfhd",
    description: "Description of the test todo 9",
    status: "IN_PROGRESS",
    date: new Date("2024-04-05"),
    title: "todo title 9",
  },
  {
    id: "fvkdvdfshd",
    description: "Description of the test todo 10",
    status: "IN_PROGRESS",
    date: new Date("2024-04-05"),
    title: "todo title 10",
  },
  {
    id: "kdfhxsrdfb",
    description: "Description of the test todo 10",
    status: "COMPLETED",
    date: new Date("2024-04-07"),
    title: "todo title 10",
  },
];

const AllTodos = () => {
  return (
    <main className="flex flex-col items-center justify-between min-h-[75vh] py-4">
      <section className="w-full">
        <div className="flex justify-end w-full">
          <TodoFormDailog formType="create" />
        </div>

        <div className="mx-1">
          <h2 className="text-xl font-semibold -mt-2">List of all Todos</h2>
          <TodosDataTable data={data} />
        </div>
      </section>
    </main>
  );
};

export default AllTodos;
