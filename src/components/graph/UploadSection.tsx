"use client";

import React, { useState, useRef, useEffect } from "react";
import { Upload } from "lucide-react";
import toast from "react-hot-toast"; 

export default function UploadSection({
  selectedMonth,
}: {
  selectedMonth: string;
}) {
  const [billExist, setBillExist] = useState(false);
  const [bankExist, setBankExist] = useState(false);
  const [checkingMonth, setCheckingMonth] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef2 = useRef<HTMLInputElement>(null);

  // Check if month already exists in database
  useEffect(() => {
    async function checkMonthExists() {
      setCheckingMonth(true);
      try {
        const res = await fetch(`/api/upload/check?month=${selectedMonth}`);
        const data = await res.json();
        setBillExist(data.billexist === true);
        setBankExist(data.bankexist === true);
      } catch (err) { 
        console.error("Failed to check month:", err);
        setBillExist(false);
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
        const res = await fetch(`/api/upload?filetype=billingreport`, {
          method: "POST",
          body: formData,
        });
  
        const data = await res.json();
        setBillExist(true);
        toast.success(data.message || "Upload success!");
        window.location.reload();
        
      } catch (error) {
        console.error("File upload failed:", error);
        toast.error("Upload failed.");
      }
    }
  };

  const handleFileChange2 = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    const formData = new FormData();

    if (selectedFile) {
      formData.append("file", selectedFile);
      formData.append("month", selectedMonth); // optional: if your backend needs it

      try {
        const res = await fetch(`/api/upload?filetype=bankstatement`, {
          method: "POST",
          body: formData,
        });
  
        const data = await res.json();
        setBankExist(true);
        toast.success(data.message || "Upload success!");
        window.location.reload();
        
      } catch (error) {
        console.error("File upload failed:", error);
        toast.error("Upload failed.");
      }
    }
  };


  const handleClick = () => {
    if (!billExist) {
      fileInputRef.current?.click();
    }
  }; 

  const handleClick2 = () => {
    if (!bankExist) {
      fileInputRef2.current?.click();
    }
  }

  return (
    <div className="flex flex-col px-5 items-center justify-center mt-5">
      <span className="text-[30px] font-bold text-[#1f2937] mb-5">
        Upload Documents
      </span>

      <div className="mt-5 w-full"> 
        <div className="flex items-center mx-auto justify-center text-base gap-4">
          <input type="file" accept=".csv,.xlsx" onChange={handleFileChange} ref={fileInputRef} hidden />
          <input type="file" accept=".csv,.xlsx" onChange={handleFileChange2} ref={fileInputRef2} hidden />
          <button
            type="button"
            onClick={handleClick}
            disabled={billExist || checkingMonth}
            className={`bg-white flex flex-col items-center justify-center border-2 max-w-[140px] max-h-[140px] rounded-2xl p-5 text-black active:scale-95 transition-transform duration-150 shadow-md ${
              billExist || checkingMonth
                ? "border-gray-300 text-gray-400 cursor-not-allowed"
                : "border-gray-200 hover:shadow-lg cursor-pointer"
            }`}
          >
            <Upload size={48} />
            <span>
              {checkingMonth
                ? "Checking..."
                : billExist
                ? "Already Uploaded"
                : "Upload Bill Report"}
            </span>
          </button> 
          <button
            type="button"
            onClick={handleClick2}
            disabled={bankExist || checkingMonth}
            className={`bg-white flex flex-col items-center justify-center border-2 max-w-[140px] max-h-[140px] rounded-2xl p-5 text-black active:scale-95 transition-transform duration-150 shadow-md ${
              bankExist || checkingMonth
                ? "border-gray-300 text-gray-400 cursor-not-allowed"
                : "border-gray-200 hover:shadow-lg cursor-pointer"
            }`}
          >
            <Upload size={48} />
            <span>
              {checkingMonth
                ? "Checking..."
                : bankExist
                ? "Already Uploaded"
                : "Upload Bank Statement"}
            </span>
          </button> 
        </div>
      </div>
    </div>
  );
}
