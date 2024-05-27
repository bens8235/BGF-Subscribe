"use client";

import { useState } from "react";
import { submitAction } from "../lib/actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivacyPolicyModal from "./PrivacyPolicyModal";

export default function Form() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const submitActionWithEmail = submitAction.bind(null, email);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    await submitActionWithEmail();
    setEmail("");
    setIsLoading(false);
    toast.success("Subscribed Successfully!", {
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: { backgroundColor: "#78C091", color: "#fff" },
    });
  }

  function handleChange(event) {
    setEmail(event.target.value);
  }
  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4"
      >
        <div className="relative border-2 p-2 mt-5  rounded-lg">
          <label
            htmlFor="email"
            className="absolute top-0 left-2 -translate-y-1/2 bg-white px-1 text-sm"
          >
            Email
          </label>
          <input
            className="w-full pt-3 pb-1 px-2 border-none text-base focus:outline-none rounded-lg"
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={email}
            required
          />
        </div>
        <div className="flex items-start gap-2 max-w-[331px] pl-2">
          <input type="checkbox" id="consent" name="consent" required />
          <label className=" text-xs" htmlFor="consent">
            I agree to receive a one-time email notification when the site goes
            live. <span className="text-[#FF914D]">*</span> {""}
            <button
              type="button"
              className="text-[#FF914D] "
              onClick={() => setIsModalOpen(true)}
            >
              Privacy Policy
            </button>
          </label>
        </div>
        <button
          className={`bg-[#78C091] text-white font-bold text-m pt-2 pb-2 pl-4 pr-4 rounded-2xl min-w-40 mb-4 cursor-pointer ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg
                className="animate-spin h-5 w-5 mr-3 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              Loading...
            </div>
          ) : (
            "Subscribe"
          )}
        </button>
      </form>
      <ToastContainer hideProgressBar closeOnClick pauseOnHover draggable />
      <PrivacyPolicyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
