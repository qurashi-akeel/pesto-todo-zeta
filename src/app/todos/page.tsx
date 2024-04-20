import TodoFormDailog from "./todo-form-dialog";
import TodosDataTable from "./todos-table";

const AllTodos = () => {
  return (
    <main className="flex flex-col items-center justify-between min-h-[75vh] py-4">
      <section className="w-full">
        <div className="flex justify-end w-full">
          <TodoFormDailog formType="create" />
        </div>

        <div className="mx-1">
          <h2 className="text-xl font-semibold -mt-2">List of all Todos</h2>
          <TodosDataTable />
        </div>
      </section>
    </main>
  );
};

export default AllTodos;
