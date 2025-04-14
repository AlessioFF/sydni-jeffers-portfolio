import { User } from "lucide-react";

interface ChatBubbleProps {
  message: string;
  avatar?: string;
  name?: string;
  role?: string;
  company?: string;
}

export default function ChatBubble({
  message,
  avatar,
  name,
  role,
  company,
}: ChatBubbleProps) {
  return (
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0">
        {avatar ? (
          <img
            src={avatar}
            alt={name || "User"}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-terracotta flex items-center justify-center">
            <User className="w-6 h-6 text-cream" />
          </div>
        )}
      </div>
      <div className="flex-1">
        {(name || role || company) && (
          <div className="mb-1">
            {name && (
              <span className="font-medium text-gray-900 dark:text-cream">
                {name}
              </span>
            )}
            {(role || company) && (
              <span className="text-sm text-gray-600 dark:text-cream/70 ml-1">
                {role}
                {role && company && ", "}
                {company}
              </span>
            )}
          </div>
        )}
        <div className="bg-peach dark:bg-gray-800 p-4 rounded-2xl rounded-tl-none shadow-sm">
          <p className="text-gray-800 dark:text-cream/90">{message}</p>
        </div>
      </div>
    </div>
  );
}
