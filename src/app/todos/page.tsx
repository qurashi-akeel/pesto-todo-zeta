import dbConnect from "@/lib/dbConnect";
import TodoFormDailog from "./todo-form-dialog";
import TodosDataTable from "./todos-table";
import { Todo } from "@/model/Todo";
import { auth } from "@clerk/nextjs/server";

const AllTodos = async () => {
  // fetch todos from DB
  await dbConnect();
  const data = await Todo.find({ userId: auth().userId });

  return (
    <main className="flex flex-col items-center justify-between min-h-[75vh] py-4">
      <section className="w-full">
        <div className="flex justify-end w-full">
          <TodoFormDailog formType="create" />
        </div>

        <div className="mx-1">
          <h2 className="text-xl font-semibold -mt-2">List of all Todos</h2>
          <TodosDataTable data={JSON.parse(JSON.stringify(data))} />
        </div>
      </section>
    </main>
  );
};

export default AllTodos;
