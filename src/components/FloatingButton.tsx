import { ClipboardIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useState } from "react";
import { server } from "../../config";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

const FloatingButton = () => {
  const router = useRouter().asPath;
  const [clipboard] = useState<string>(`${server}${router}`);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-10 sm:right-10">
        <CopyToClipboard
          text={clipboard}
          onCopy={() =>
            toast.success("Copied to clipboard", { position: "top-right" })
          }
        >
           <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full p-3">
            <ClipboardIcon className="h-6 w-6 text-white" />
          </button>
        </CopyToClipboard>
   
    </div>
  );
};

export default FloatingButton;
