"use client";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/24/outline";
import translate from "@/lib/locales";

function CustomDialog({
  title,
  description,
  open = false,
  onClose = null,
  children,
  locale = "it",
}) {
  function closeDialog() {
    if (onClose) {
      onClose();
    }
  }
  return (
    <Transition
      show={open}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <Dialog
        onClose={() => closeDialog()}
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <div className="h-full w-full md:flex md:items-center md:justify-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-90" />
          <div className="relative w-full sm:mx-20">
            <button
              type="button"
              className="absolute right-10 top-5 z-30 rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              onClick={() => closeDialog()}
              aria-label={translate("close", locale)}
            >
              <span className="sr-only">{translate("close", locale)}</span>
              <XIcon className="h-6 w-6" aria-hidden="true" focusable="false" />
            </button>

            <div className="relative flex flex-col bg-white p-10 text-black ">
              <div className="mb-10">
                <Dialog.Title className="text-lg">{title}</Dialog.Title>
                <Dialog.Description>{description}</Dialog.Description>

                <div>{children}</div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default CustomDialog;
