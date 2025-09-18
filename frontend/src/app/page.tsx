import CodeEditor from "./components/CodeEditor/CodeEditor";
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl font-bold text-center">
        Real-time Collaborative Code Editor
      </h1>
      <div className="w-full h-full border-2 border-gray-300 rounded-lg overflow-hidden">
        <CodeEditor language="javascript" theme="vs-dark"/>
      </div>
      <footer className="text-center text-sm text-gray-500">
        &copy; 2024 Your Company. All rights reserved.
      </footer>
    </div>
  );
}
