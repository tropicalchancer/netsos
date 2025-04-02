"use client";

import { useZupassPopupSetup } from "@pcd/passport-interface/PassportPopup/react";

export default function PopupPage() {
  // This is all we need - this hook handles all the popup logic
  const error = useZupassPopupSetup();
  
  return (
    <div className="h-screen flex items-center justify-center p-4">
      {/* Empty div to maintain layout but remove text */}
    </div>
  );
}