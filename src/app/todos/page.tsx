import TodoFormDailog from "./todo-form-dialog";

const AllTodos = () => {
  return (
    <main className="flex flex-col items-center justify-between min-h-[80vh] py-4">
      <div className="flex justify-end w-full my-5">
        <TodoFormDailog formType="create" />
      </div>

      <p>All Todos here</p>
    </main>
  );
};

export default AllTodos;
