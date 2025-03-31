"use client";

export default function Button() {
  return (
    <div className="mt-6">
      <button
        className="bg-[#dedede] px-3 py-1 rounded-sm text-black cursor-pointer"
        onClick={() => console.log("I've Clicked")}
      >
        Click here
      </button>
    </div>
  );
}
