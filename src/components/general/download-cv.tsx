"use client";

import Button from "@/components/general/button";

const DownloadCV = () => {
  return (
    <Button
      onClick={() =>
        window?.open(
          "https://publuu.com/flip-book/293356/682471",
          "_blank"
        )
      }
    >
      Download CV
    </Button>
  );
};

export default DownloadCV;
