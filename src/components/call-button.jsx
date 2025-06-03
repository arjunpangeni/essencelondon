"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useMobilecheck } from "@/hooks/usecheck-mobile";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export function CallButton({
  phoneNumber,
  className = "",
  variant = "default",
  children,
}) {
  const isMobile = useMobilecheck();
  const [copied, setCopied] = useState(false);
  const formattedNumber = phoneNumber.replace(/[^\d+]/g, "");

  const handleCopyClick = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // For mobile devices, use the tel: protocol
  if (isMobile) {
    return (
      <a href={`tel:${formattedNumber}`} className={className}>
        {children}
      </a>
    );
  }

  // For desktop, show a tooltip with copy option
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={className}>{children}</div>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          className="p-4 max-w-xs bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 border border-gray-700 dark:border-gray-300 rounded-md shadow-lg"
        >
          <div className="space-y-2">
            <p className="text-sm font-medium">Call from your device</p>
            <p className="text-xs text-gray-300 dark:text-gray-600">
              {phoneNumber}
            </p>
            <Button
              size="sm"
              variant="outline"
              className="w-full flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={handleCopyClick}
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy number</span>
                </>
              )}
            </Button>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
