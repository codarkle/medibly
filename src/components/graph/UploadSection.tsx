"use client";

import React, { useState, useRef, useEffect } from "react";
import { Upload, Download } from "lucide-react";
import toast from "react-hot-toast";
import MonthPicker from "../ui/MonthPicker";

function getCurrentMonth(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

export default function UploadSection() {
  const [selectedMonth, setSelectedMonth] = useState(getCurrentMonth());
  const [wasUploaded, setWasUploaded] = useState(false);
  const [checkingMonth, setCheckingMonth] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check if month already exists in database
  useEffect(() => {
    async function checkMonthExists() {
      setCheckingMonth(true);
      try {
        const res = await fetch(`/api/upload/check?month=${selectedMonth}`);
        const data = await res.json();
        setWasUploaded(data.exists === true);
          
      } catch (err) { 
        console.error("Failed to check month:", err);
        setWasUploaded(false); // fail open
      } finally {
        setCheckingMonth(false);
      }
    }

    checkMonthExists();
  }, [selectedMonth]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    const formData = new FormData();

    if (selectedFile) {
      formData.append("file", selectedFile);
      formData.append("month", selectedMonth); // optional: if your backend needs it

      try {
        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
  
        const data = await res.json();
        setWasUploaded(true);
        toast.success(data.message || "Upload success!");
      } catch (error) {
        console.error("File upload failed:", error);
        toast.error("Upload failed.");
      }
    }
  };

  const handleClick = () => {
    if (!wasUploaded) {
      fileInputRef.current?.click();
    }
  };

  const handleDownload = async () => {
    if (!wasUploaded) return;

    try {
      const res = await fetch(`/api/export`);
      if (!res.ok) throw new Error("Failed to export");

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `profit-report.pdf`;
      link.click();
    } catch (error) {
      console.error("Export failed:", error);
      toast.error("Failed to export PDF.");
    }
  }

  return (
    <div className="flex flex-col px-5 items-center justify-center">
      <span className="flex justify-center items-center text-[30px] font-bold text-[#1f2937] text-center mb-5">
        Upload Documents
      </span>

      <MonthPicker value={selectedMonth} onChange={setSelectedMonth} />

      <div className="mt-5 w-full"> 
        <div className="flex items-center mx-auto justify-center text-base gap-4">
          <input type="file" accept=".csv,.xlsx" onChange={handleFileChange} ref={fileInputRef} hidden />

          <button
            type="button"
            onClick={handleClick}
            disabled={wasUploaded || checkingMonth}
            className={`bg-white flex flex-col items-center justify-center border-2 max-w-[140px] max-h-[140px] rounded-2xl p-5 text-black active:scale-95 transition-transform duration-150 shadow-md ${
              wasUploaded || checkingMonth
                ? "border-gray-300 text-gray-400 cursor-not-allowed"
                : "border-gray-200 hover:shadow-lg cursor-pointer"
            }`}
          >
            <Upload size={48} />
            <span>
              {checkingMonth
                ? "Checking..."
                : wasUploaded
                ? "Already Uploaded"
                : "Upload Bank Statement"}
            </span>
          </button>

          <button
            type="button"
            onClick={handleDownload}
            disabled={!wasUploaded || checkingMonth} 
            className={`bg-white flex flex-col items-center justify-center border-2 max-w-[140px] max-h-[140px] rounded-2xl p-5 text-black active:scale-95 transition-transform duration-150 shadow-md ${
              wasUploaded
                ? "border-gray-200 hover:shadow-lg cursor-pointer"
                : "border-gray-300 text-gray-400 cursor-not-allowed"
            }`}
          >
            <Download size={48} />
            <span>
              {checkingMonth
                ? "Checking..."
                : wasUploaded
                ? "Download Graph"
                : "Not Uploaded"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
