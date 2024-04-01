import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function AddEventBtn({ setMeetings }) {
  let [isOpen, setIsOpen] = useState(false);
  const [event, setEvent] = useState({});

  function closeModal() {
    setEvent({ ...event, id: Math.random().toString(36).substring(7) });
    setMeetings((prev) => [...prev, event]);
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black/40 px-4 py-2 text-sm font-medium text-white hover:bg-black/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Add Event
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add New Event
                  </Dialog.Title>
                  <div className="mt-2">
                    <form>
                      <div className="mt-4">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="p-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          placeholder="Michael Foster"
                          onChange={(e) => {
                            setEvent({ ...event, name: e.target.value });
                          }}
                        />
                      </div>
                      <div className="mt-4">
                        <label
                          htmlFor="imageUrl"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Image URL
                        </label>
                        <input
                          type="text"
                          name="imageUrl"
                          className="p-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          placeholder="https://images.unsplash.com/"
                          onChange={(e) => {
                            setEvent({ ...event, imageUrl: e.target.value });
                          }}
                        />
                      </div>
                      <div className="mt-4">
                        <label
                          htmlFor="startDatetime"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Start Datetime
                        </label>
                        <input
                          type="datetime-local"
                          name="startDatetime"
                          className="p-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          placeholder="2022-05-20T09:00"
                          onChange={(e) => {
                            setEvent({
                              ...event,
                              startDatetime: e.target.value,
                            });
                          }}
                        />
                      </div>
                      <div className="mt-4">
                        <label
                          htmlFor="endDatetime"
                          className="block text-sm font-medium text-gray-700"
                        >
                          End Datetime
                        </label>
                        <input
                          type="datetime-local"
                          name="endDatetime"
                          className="p-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          placeholder="2022-05-20T11:30"
                          onChange={(e) => {
                            setEvent({ ...event, endDatetime: e.target.value });
                          }}
                        />
                      </div>
                    </form>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Submit
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
