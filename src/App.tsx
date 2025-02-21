import './index.css';
import { useEffect } from 'react';
import MadeOnZaptBadge from './components/MadeOnZaptBadge';

function App(): JSX.Element {
  useEffect(() => {
    console.log("App mounted: Claims Management landing page loaded");
  }, []);

  const handleSubmitClaim = (): void => {
    console.log("Submit a Claim button clicked");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      <header className="w-full p-6 bg-white shadow flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-2">Efficient Claims Management for Law Firms</h1>
        <p className="text-lg text-center max-w-2xl">
          Our platform streamlines claim submissions, case reviews, and comprehensive case management. Experience efficiency and clarity tailored for law firms.
        </p>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <button
          onClick={handleSubmitClaim}
          className="cursor-pointer bg-blue-600 hover:bg-blue-700 active:scale-95 text-white py-2 px-6 rounded shadow mb-4"
        >
          Submit a Claim
        </button>
      </main>
      <footer className="w-full">
        <MadeOnZaptBadge />
      </footer>
    </div>
  );
}

export default App;