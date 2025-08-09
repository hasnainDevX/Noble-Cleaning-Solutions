import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const EmailCopyButton = () => {
  const [showToast, setShowToast] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const email = "noblecleaningsolutions.ca@gmail.com";
  
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setShowToast(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setShowToast(false);
        setCopied(false);
      }, 3000);
    } catch (err) {
      console.error('Failed to copy email:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      setCopied(true);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        setCopied(false);
      }, 3000);
    }
  };

  return (
    <div className="relative inline-block">
      <button 
        onClick={copyEmail}
        className="flex gap-2 justify-center items-center btn1 px-4 py-3 text-white rounded-3xl bg-[#2CA2FC] font-[500] hover:bg-[#1e90e6] transition-colors duration-200"
      >
        <span>Contact</span>
        {copied ? (
          <Check className="w-4 h-4" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </button>
      
      {/* Toast Notification */}
      {showToast && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50">
          <div className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-bounce">
            <Check className="w-4 h-4" />
            <span className="text-sm font-medium">Email copied to clipboard!</span>
          </div>
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-600 rotate-45"></div>
        </div>
      )}
    </div>
  );
};

export default EmailCopyButton;