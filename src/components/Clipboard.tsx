import { ClipboardIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useState } from "react";
import { server } from "../../config";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

const Clipboard = () => {
  const router = useRouter().asPath;
  const [clipboard] = useState<string>(`${server}${router}`);

  return (
    <>
      <CopyToClipboard
        text={clipboard}
        onCopy={() =>
          toast.success("Copied to clipboard", { position: "top-right" })
        }
      >
        <button className="inline-flex items-center px-1 py-1 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 shadow-sm rounded-2xl hover:text-gray-600 focus:outline-none dark:bg-dark dark:text-white">
          <ClipboardIcon className="h-5" />
        </button>
      </CopyToClipboard>
    </>
  );
};

export default Clipboard;
