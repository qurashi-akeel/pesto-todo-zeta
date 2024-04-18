export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-[80vh] py-4">
      <div className="text-center">
        <h1 className="text-3xl md:text-6xl font-bold mt-14 mb-5">
          Pesto Todo Zeta
        </h1>
        <p className="text-xl mb-14">
          A fast and productive app for managing your todos.
        </p>

        <p className="mt-8">
          Pesto Todo Zeta is a todo app that allows you to create, edit, change
          state, and delete todos. It is built with Nextjs, Tailwind CSS and
          TypeScript. It is available on{" "}
          <a
            className="text-blue-500 underline"
            href="https://github.com/qurashi-akeel/pesto-todo-zeta"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
          . The app is also responsive and mobile-friendly.
        </p>
      </div>
    </main>
  );
}
