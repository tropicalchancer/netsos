"use client";

import { useZupassPopupSetup } from "@pcd/passport-interface/PassportPopup/react";

export default function PopupPage() {
  // Call the hook but ignore the return value since we don't need it
  useZupassPopupSetup();
  
  return (
    <div className="h-screen flex items-center justify-center p-4">
      {/* Empty div to maintain layout but remove text */}
    </div>
  );
}