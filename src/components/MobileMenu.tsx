import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

interface MenuItem {
  title: string;
  href: string;
}

interface Props {
  items: MenuItem[];
}

export default function MobileMenu({ items }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="text-gray-700 dark:text-gray-200"
        aria-label="منو"
      >
        <Bars3Icon className="h-6 w-6" />
      </button>

      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 lg:hidden"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-300"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-800 px-6 py-6 sm:max-w-sm">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="text-gray-700 dark:text-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
                <a href="/" className="text-xl font-bold text-primary-600 dark:text-primary-400">
                  آکادمی نخبگان
                </a>
              </div>
              <div className="mt-6 flow-root">
                <div className="space-y-2 py-6">
                  {items.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </a>
                    </motion.div>
                  ))}
                  <div className="mt-4">
                    <button className="w-full bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg transition-colors">
                      ورود / ثبت‌نام
                    </button>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
}