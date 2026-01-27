import { Check, CheckCheck } from 'lucide-react';

export default function MessageBubble({ message, isOwn }) {
  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-1 px-2 sm:px-0`}>
      <div className={`
        max-w-[75%] sm:max-w-[65%] rounded-lg px-3 py-1.5 relative shadow-sm
        ${isOwn ? 'bg-primary-light rounded-tr-sm' : 'bg-white rounded-tl-sm'}
      `}>
        {message.type === 'link' ? (
          <a
            href={message.text}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-xs sm:text-sm break-all hover:underline"
          >
            {message.text}
          </a>
        ) : (
          <p className="text-text text-xs sm:text-[0.95rem] leading-relaxed">{message.text}</p>
        )}
        <div className={`flex items-center justify-end gap-1 ${isOwn ? 'text-textSecondary' : ''}`}>
          <span className="text-[10px] opacity-80">{message.time}</span>
          {isOwn && (
            message.status === 'read' ? <CheckCheck size={12} sm:size={14} className="text-primary" /> :
              message.status === 'delivered' ? <CheckCheck size={12} sm:size={14} /> : <Check size={12} sm:size={14} />
          )}
        </div>
      </div>
    </div>
  );
}

