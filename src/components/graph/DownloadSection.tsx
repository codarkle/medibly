'use client';

import { useEffect, useState } from 'react';

type Post = {
  id: number;
  month: string;
};

export default function ReportHistory() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/download')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch reports', err);
        setLoading(false);
      });
  }, []);

  const handleDownload = async (month: string) => {
    try {
      const res = await fetch(`/api/export?month=${encodeURIComponent(month)}`, {
        method: 'POST',
      });

      if (!res.ok) throw new Error('Failed to export');

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = `${month}-profit-report.pdf`;
      link.click();
    } catch (error) {
      console.error('Export failed:', error);
      alert('Failed to export PDF.'); // or toast if you use one
    }
  };


  return (
    <div className="min-w-[300px] mt-10">
      <h2 className="text-[30px] font-bold text-[#1f2937] text-center mb-5">Report History</h2>
      <div className="border rounded-lg overflow-hidden border-gray-400">
        <div className="grid grid-cols-2 bg-gray-200 font-medium text-left px-4 py-2">
          <div>Month</div>
          <div>Report</div>
        </div>

        {loading ? (
          <div className="text-center py-4 text-gray-500">Loading...</div>
        ) : (
          <div className={` ${posts.length >= 3 ? 'max-h-40 overflow-y-auto' : ''}`}>
            {posts.map((post) => (
              <div key={post.id} className="grid grid-cols-2 px-4 py-2 hover:bg-gray-50">
                <div>{post.month}</div>
                <div>
                  <button
                    onClick={() => handleDownload(post.month)}
                    className="hover:text-blue-600 hover:underline cursor-pointer"
                  >
                    Download PDF
                  </button>
                </div>
              </div>
            ))}

            {/* Fill in empty rows if fewer than 4 */}
            {Array.from({ length: Math.max(0, 3 - posts.length) }).map((_, i) => (
              <div
                key={`empty-${i}`}
                className="grid grid-cols-2 px-4 py-2 text-gray-300"
              >
                <div>—</div>
                <div>—</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
