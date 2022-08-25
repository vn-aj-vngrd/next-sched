import { ClipboardIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useState } from "react";
import { server } from "../../config";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { ButtonProps } from "../types";

const Clipboard = ({ isButton }: ButtonProps) => {
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
        {isButton ? (
          <button className="inline-flex items-center px-1 py-1 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 shadow-sm rounded-2xl hover:text-gray-600 focus:outline-none dark:bg-dark dark:text-white dark:border-transparent">
            <ClipboardIcon className="h-5" />
          </button>
        ) : (
          <button
            onCopy={() =>
              toast.success("Copied to clipboard", { position: "top-right" })
            }
            className="block px-4 py-2 text-sm"
          >
            Copy to clipboard
          </button>
        )}
      </CopyToClipboard>
    </>
  );
};

export default Clipboard;
