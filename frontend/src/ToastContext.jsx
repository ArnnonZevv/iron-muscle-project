import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  function addToast(message, type = "default") {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}

      <div className="fixed top-6 right-6 flex flex-col gap-4 z-50">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="w-96 max-w-full flex overflow-hidden rounded-xl shadow-xl animate-slide-in-right"
          >
            <div
              className={`w-3 ${
                toast.type === "success"
                  ? "bg-green-500"
                  : toast.type === "error"
                  ? "bg-red-500"
                  : "bg-gray-800"
              }`}
            />
            <div className="flex-1 px-6 py-4 bg-[#1b1b1b] text-white text-lg font-medium">
            {toast.message}
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
