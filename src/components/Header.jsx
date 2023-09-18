import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { motion } from 'framer-motion';
const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Projects', href: '/projects' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header
      className={`sm:px-8 sticky inset-x-0 top-0 z-50 bg-AAprimary ${
        isScrolled ? `shadow-lg` : `shadow-none`
      }`}
    >
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <motion.span
              initial={{ scale: 0, y: -4, x: -1 }}
              animate={{ scale: 1 }}
              transition={{ scale: { delay: 1.5, duration: 1.5 } }}
              className="text-AAsecondary font-bold text-4xl"
            >
              Shubham
            </motion.span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              className="h-8 w-8 text-AAsecondary"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              <motion.div
                initial={{
                  y: -40,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  type: 'spring',
                  duration: 1.2,
                  delay: 9.7,
                }}
                className="text-AAsecondary"
              >
                <span className="text-white  hover:cursor-pointer hover:text-AAsecondary duration-300">
                  {item.name}
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              opacity: {
                delay: 10.8,
                duration: 0.2,
              },
              y: {
                delay: 10.8,
                duration: 0.2,
              },
            }}
            className=""
          >
            <Link href={'/'} target={'_blank'} rel="noreferrer">
              <button className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary">
                Contact Me!
              </button>
            </Link>
          </motion.div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden "
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 h-1/2 right-0 z-50 w-full overflow-y-auto bg-AAprimary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <motion.span
                initial={{ scale: 0, y: -4, x: -1 }}
                animate={{ scale: 1 }}
                transition={{
                  scale: { delay: 1.5, duration: 1.5 },
                }}
                className="text-AAsecondary font-Text2 text-4xl"
              >
                Shubham
              </motion.span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                className="h-8 w-8 text-AAsecondary"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-500 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    opacity: {
                      delay: 10.8,
                      duration: 0.2,
                    },
                    y: {
                      delay: 10.8,
                      duration: 0.2,
                    },
                  }}
                  className=""
                >
                  <Link href={'/'} rel="noreferrer">
                    <button className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary">
                      Contact Me
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
