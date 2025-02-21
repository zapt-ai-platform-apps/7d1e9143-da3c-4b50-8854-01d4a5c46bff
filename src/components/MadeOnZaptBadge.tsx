import React from 'react';

function MadeOnZaptBadge(): JSX.Element {
  return (
    <div className="fixed bottom-4 right-4">
      <a
        href="https://www.zapt.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer text-sm font-semibold text-gray-700 hover:text-gray-900"
      >
        Made on ZAPT
      </a>
    </div>
  );
}

export default MadeOnZaptBadge;