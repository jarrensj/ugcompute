import Link from 'next/link';

interface TaskCardProps {
  title: string;
  description: string;
  slug: string;
}

export default function TaskCard({ title, description, slug }: TaskCardProps) {
  return (
    <Link href={`/tasks/${slug}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-md border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105">
        <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {description}
        </p>
        <div className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium">
          View Task
        </div>
      </div>
    </Link>
  );
}

