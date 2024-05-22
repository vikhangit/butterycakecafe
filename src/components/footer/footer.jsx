"use client";
import Image from "next/image";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="bg_footer fixed max-lg:relative bottom-0 -z-10 max-lg:z-10 w-full">
      <div className="border-t w-full text-green-500 py-4 px-20 max-xl:px-5 text-xs flex justify-center">
        <span className="max-lg:w-full text-center !font-semibold text-sm">
          Bản quyền thuộc Công Ty TNHH Thiên Thuỷ - 2024
        </span>
      </div>
    </div>
  );
}
