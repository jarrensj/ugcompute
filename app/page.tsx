import TaskCard from "./components/TaskCard";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">ugcompute</h1>
      <div className="flex justify-center">
        <TaskCard 
          title="omaka$e hat"
          description="Make content with the omaka$e hat"
          slug="omakase-hat"
        />
      </div>
    </div>
  );
}
