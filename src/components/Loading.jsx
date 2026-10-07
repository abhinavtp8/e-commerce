import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="w-10 h-10 rounded-full border-4 border-slate-200 border-r-blue-600 animate-spin"></div>
      <p className="text-sm font-semibold text-gray-500 tracking-wide">Loading products...</p>
    </div>
  );
};

export default Loading;