import React from 'react';

const Modal = ({
  isVisible,
  onClose,
  children,
}: {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  if (!isVisible) return null;

  return (
    <div
      className="h-modal fixed top-0 right-0 left-0 z-50 flex w-full items-center justify-center overflow-x-hidden overflow-y-auto bg-black/55 backdrop-blur-sm md:inset-0 md:h-full"
      onClick={onClose}
    >
      <div className="relative md:w-96">
        <button
          onClick={onClose}
          className="absolute -top-9 -right-0 flex size-7 items-center justify-center rounded-full bg-white p-2 text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-7"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="rounded-lg bg-white p-6 shadow-lg">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
