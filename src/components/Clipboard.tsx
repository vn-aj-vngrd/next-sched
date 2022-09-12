import { ClipboardIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useState } from "react";
import { server } from "../../config";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { ButtonProps } from "../types";
import ReactTooltip from "react-tooltip";

const Clipboard = ({ isButton }: ButtonProps) => {
  const router = useRouter().asPath;
  const [clipboard] = useState<string>(`${server}${router}`);
  const [tooltip, showTooltip] = useState(true);

  return (
    <>
      {tooltip && <ReactTooltip id="clip" effect="float" place="bottom" />}

      <CopyToClipboard
        text={clipboard}
        onCopy={() =>
          toast.success("Copied to clipboard")
        }
      >
        {isButton ? (
          <button
            data-for="clip"
            data-tip="Copy to clipboard"
            onMouseLeave={() => {
              showTooltip(false);
              setTimeout(() => showTooltip(true), 50);
            }}
            className="inline-flex items-center px-1 py-1 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 shadow-sm rounded-2xl hover:text-gray-600 focus:outline-none dark:bg-dark dark:text-white dark:border-transparent"
          >
            <ClipboardIcon className="h-5" />
          </button>
        ) : (
          <button className="w-full justify-start flex px-4 py-2 text-sm text-dark dark:text-white">
            Copy to clipboard
          </button>
        )}
      </CopyToClipboard>
    </>
  );
};

export default Clipboard;
