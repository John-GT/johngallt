import React, { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { MessageSquare } from "lucide-react";

interface ChatBubbleProps {
  open: boolean;
  onOpen: () => void;
  notificationCount: number;
  children: React.ReactNode;
  onClose: () => void;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({
  open,
  onOpen,
  notificationCount,
  children,
  onClose,
}) => {
  return (
    <div className="fixed z-[9999] bottom-2 right-2 flex flex-col items-end">
      {!open && (
        <button
          className="relative bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-lg flex items-center justify-center focus:outline-none"
          onClick={onOpen}
          aria-label="Abrir chat"
        >
          <MessageSquare size={32} />
          {notificationCount > 0 && (
            <Badge className="absolute -top-1 -right-1 bg-red-500 text-white px-2 py-0.5 text-xs">{notificationCount}</Badge>
          )}
        </button>
      )}
      {open && (
        <div className="w-[350px] max-w-[90vw] bg-white rounded-lg shadow-2xl border border-green-500 animate-fade-in-up">
          <div className="flex justify-between items-center px-4 py-2 border-b">
            <span className="font-semibold text-green-700">Chat WhatsApp</span>
            <button
              className="text-gray-400 hover:text-green-500 transition-colors"
              onClick={onClose}
              aria-label="Fechar chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-2">{children}</div>
        </div>
      )}
    </div>
  );
};
