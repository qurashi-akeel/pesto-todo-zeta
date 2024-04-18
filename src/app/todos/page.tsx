import TodoFormDailog from "./todo-form-dialog";

const AllTodos = () => {
  return (
    <main className="flex flex-col items-center justify-between min-h-[80vh] py-4">
      <section className="overflow-scroll w-full">
        <div className="flex justify-end w-full my-5">
          <TodoFormDailog formType="create" />
        </div>

        <div className="">todo table</div>
      </section>
    </main>
  );
};

export default AllTodos;
