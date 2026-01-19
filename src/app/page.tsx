import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Welcome to my portfolio</h1>
        <p className="mt-4">
          This is the home page of my portfolio. Please use the sidebar to navigate to other pages.
        </p>
      </main>
    </div>
  );
}
