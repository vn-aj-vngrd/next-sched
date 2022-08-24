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
    <div className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8">
      <CopyToClipboard
        text={clipboard}
        onCopy={() =>
          toast.success("Copied to clipboard", { position: "top-right" })
        }
      >
        <button className="p-3 font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700">
          <ClipboardIcon className="w-4 h-4 sm:h-6 sm:w-6 text-white" />
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default FloatingButton;
