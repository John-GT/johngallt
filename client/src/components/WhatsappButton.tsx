import React from "react";
import { MessageSquare } from "lucide-react";

const WHATSAPP_NUMBER = "+55946326071";
const WHATSAPP_LINK = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}`;

const WhatsappButton: React.FC = () => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed z-[9999] bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition-colors focus:outline-none"
    aria-label="Conversar no WhatsApp"
  >
    <MessageSquare size={32} />
  </a>
);

export default WhatsappButton;
