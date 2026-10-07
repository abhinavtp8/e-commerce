import React, { useState, useEffect } from 'react';

const ScrollLazyDemo = () => {
  // 1. ഡാറ്റയും ലോഡിങ് സ്റ്റേറ്റും സൂക്ഷിക്കുന്നു
  const [items, setItems] = useState([
    { id: 1, title: "Initial Video 1" },
    { id: 2, title: "Initial Video 2" },
    { id: 3, title: "Initial Video 3" },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  // 2. സ്ക്രോൾ ചെയ്യുമ്പോൾ കൂടുതൽ ഡാറ്റ ലോഡ് ചെയ്യാനുള്ള ഫങ്ഷൻ
  const loadMoreData = () => {
    if (isLoading) return; // നിലവിൽ ലോഡിങ് നടക്കുകയാണെങ്കിൽ വീണ്ടും റൺ ചെയ്യാതിരിക്കാൻ

    setIsLoading(true);

    // നെറ്റിൽ നിന്നും ഡാറ്റ വരാൻ എടുക്കുന്ന സമയം കാണിക്കാൻ 2 സെക്കൻഡ് ഡിലേ കൊടുക്കുന്നു
    setTimeout(() => {
      const nextBatch = [
        { id: Date.now(), title: `New Loaded Video A` },
        { id: Date.now() + 1, title: `New Loaded Video B` },
      ];

      setItems((prevItems) => [...prevItems, ...nextBatch]);
      setIsLoading(false); // ഡാറ്റ ലോഡ് ആയിക്കഴിഞ്ഞാൽ ലോഡിങ് ഓഫ് ആക്കുന്നു
    }, 2000); // 2 സെക്കൻഡ് ഡിലേ
  };

  // 3. യൂസർ പേജിന്റെ താഴെ എത്തിയോ എന്ന് ചെക്ക് ചെയ്യാനുള്ള useEffect
  useEffect(() => {
    const handleScroll = () => {
      // വിൻഡോയുടെ സ്ക്രോൾ ഹൈറ്റും യൂസർ സ്ക്രോൾ ചെയ്ത ദൂരവും തമ്മിൽ ഒത്തുനോക്കുന്നു
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5) {
        loadMoreData();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-6 text-center">Scroll Down to Load More</h1>

      {/* വീഡിയോ ലിസ്റ്റ് */}
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div key={item.id} className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm h-28 flex flex-col justify-end">
            <span className="font-bold text-gray-800">{item.title}</span>
            <span className="text-xs text-gray-400">2 hours ago</span>
          </div>
        ))}

        {/* 4. LOADING STATE: ട്രൂ ആണെങ്കിൽ മാത്രം ഗ്രേ കളർ ബ്ലാങ്ക് ബോക്സുകൾ കാണിക്കും */}
        {isLoading && (
          <div className="flex flex-col gap-4">
            {/* ഒന്നാമത്തെ ഗ്രേ ബോക്സ് */}
            <div className="p-4 bg-gray-200 animate-pulse border rounded-xl h-28 flex flex-col justify-end">
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-300 rounded w-1/4"></div>
            </div>
            {/* രണ്ടാമത്തെ ഗ്രേ ബോക്സ് */}
            <div className="p-4 bg-gray-200 animate-pulse border rounded-xl h-28 flex flex-col justify-end">
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-300 rounded w-1/4"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScrollLazyDemo;