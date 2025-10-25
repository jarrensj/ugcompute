import Link from 'next/link';

interface TaskPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TaskPage({ params }: TaskPageProps) {
  const { slug } = await params;
  
  // Format slug for display (e.g., "sushi-hat" -> "Sushi Hat")
  const title = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="min-h-screen p-8">
      <Link 
        href="/" 
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 font-medium"
      >
        ← Back to Tasks
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          {title}
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Make content with the {title.toLowerCase()}
        </p>

        {/* Photos Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Reference Photos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Placeholder photo cards */}
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div 
                key={num}
                className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600"
              >
                <div className="text-center text-gray-400 dark:text-gray-500">
                  <p className="text-sm">Photo {num}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Download Assets Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 border border-blue-100 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Download Assets
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Get all the files you need to complete this task
          </p>
          
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
            Download All Assets
          </button>
        </section>
      </div>
    </div>
  );
}

