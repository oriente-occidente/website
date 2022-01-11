import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';

function CustomDialog({
  title,
  description,
  open = false,
  onClose = null,
  children,
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
        className="fixed z-10 inset-0 overflow-y-auto"
      >
        <div className="md:flex md:items-center md:justify-center h-full w-full">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-90" />
          <div className="relative w-full sm:mx-20">
            <button
              type="button"
              className="absolute right-10 top-5 z-30 bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={() => closeDialog()}
            >
              <span className="sr-only">Close</span>
              <XIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            <div className="relative bg-white text-black rounded    flex-col flex p-10 ">
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
