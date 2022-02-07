/* This example requires Tailwind CSS v2.0+ */
export default function Cta({ cta }) {
  const { title, description, action = "Get started", image } = cta;
  return (
    <div className="bg-indigo-700">
      <div className="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">{title}</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">{description}</p>
        <a
          href="#"
          className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50 sm:w-auto"
        >
          {action}
        </a>
      </div>
    </div>
  );
}
