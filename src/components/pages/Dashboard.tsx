export default function Dashboard() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold my-8 dark:bg-gray">
        Welcome to {`${process.env.NEXT_PUBLIC_APP_NAME}`}
      </h1>

      <p className="text-4xl text-red">
        This is an example of light/dark mode toggle in Next.js 15 with Tailwind
        CSS.
      </p>
    </div>
  );
}
