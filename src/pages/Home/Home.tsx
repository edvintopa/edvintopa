import TechStack from '../../components/Containers/TechStack/TechStack'

function Home() {
  return (
    <div className="container mx-auto p-4">

      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-4 dark:text-white">Tech Stack</h2>
        <TechStack />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white dark:bg-neutral-800 rounded shadow p-4 col-span-1">
          <h2 className="text-xl font-bold dark:text-white">Card 1</h2>
          <p className="mt-2 dark:text-gray-300">This card takes one column.</p>
        </div>
        <div className="bg-white dark:bg-neutral-800 rounded shadow p-4 col-span-1 md:col-span-2">
          <h2 className="text-xl font-bold dark:text-white">Card 2</h2>
          <p className="mt-2 dark:text-gray-300">
            On mobile, this is full width; on desktop, it takes two columns.
          </p>
        </div>
        <div className="bg-white dark:bg-neutral-800 rounded shadow p-4 col-span-1">
          <h2 className="text-xl font-bold dark:text-white">Card 3</h2>
          <p className="mt-2 dark:text-gray-300">This card takes one column.</p>
        </div>
        <div className="bg-white dark:bg-neutral-800 rounded shadow p-4 col-span-1">
          <h2 className="text-xl font-bold dark:text-white">Card 4</h2>
          <p className="mt-2 dark:text-gray-300">This card takes one column.</p>
        </div>
      </div>
    </div>
  )
}

export default Home