import React from "react";

export default function ConfirmModal({ open, message, onConfirm, onCancel }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-[#1b1b1b] text-white rounded-3xl w-96 max-w-full shadow-xl overflow-hidden">
        {/* Message Section */}
        <div className="p-8">
          <p className="text-xl">{message}</p>
        </div>

        {/* Buttons Section */}
        <div className="flex w-full">
          {/* No Button */}
          <div
            onClick={onCancel}
            className="flex-1 bg-red-500 h-[72px] flex items-center justify-center text-white text-lg font-semibold hover:bg-red-400 transition-colors cursor-pointer"
          >
            No
          </div>

          {/* Yes Button */}
          <div
            onClick={onConfirm}
            className="flex-1 bg-green-500 h-[72px] flex items-center justify-center text-white text-lg font-semibold hover:bg-green-400 transition-colors cursor-pointer"
          >
            Yes
          </div>
        </div>
      </div>
    </div>
  );
}