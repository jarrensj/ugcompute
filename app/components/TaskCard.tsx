interface TaskCardProps {
  title: string;
  description: string;
  assetsUrl: string;
}

export default function TaskCard({ title, description, assetsUrl }: TaskCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        {description}
      </p>
      <a 
        href={assetsUrl} 
        className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Assets
      </a>
    </div>
  );
}

