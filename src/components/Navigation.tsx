import { Dialog, DialogPanel } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  // MoonIcon
} from '@heroicons/react/24/outline'
import {
  InstagramLink,
  BlueSky,
  YoutubeLink,
  // TwitterLink,
  TikTokLink,
} from './MediaLinks'
import { useState } from 'react'
// import clsx from 'clsx'
// import { useLocalStorage } from 'react-use'

// TODO: set theme in local storage

const navigation = [
  { name: 'About Me', href: '#about' },
  { name: 'What I do?', href: '#myduties' },
]

const Navigation = ({ onNavItemClick }: { onNavItemClick: () => void }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  // const [theme, setTheme] = useState('light')

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          {/* Toggle dark mode */}
          {/* <button
            type="button"
            className={clsx(
              '-m-2.5 inline-flex items-center justify-center rounded-md p-2.5',
              theme === 'light' && ' text-zinc-600 hover:text-zinc-800 ',
              theme === 'dark' && ' text-white hover:text-gray-100 dark',
            )}
            onClick={() => {
              if (theme === 'dark') {
                setTheme('light')
              } else {
                setTheme('dark')
              }
            }}
          >
            <span className="sr-only">Toggle dark mode</span>
            <MoonIcon aria-hidden="true" className="size-6 stroke-2" />
          </button> */}
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold text-gray-900"
              onClick={() => onNavItemClick()}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center space-x-2">
          <span className="text-sm/6 font-semibold text-gray-600 mr-2">
            Follow me on
          </span>
          <InstagramLink />
          <BlueSky />
          <YoutubeLink />
          {/* <TwitterLink /> */}
          <TikTokLink />
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    onClick={() => {
                      setMobileMenuOpen(false)
                      onNavItemClick()
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <span className="-mx-3 block rounded-lg px-3 pt-2.5 text-sm font-semibold text-gray-600">
                  Follow me on
                </span>
                <div className="flex gap-x-4">
                  <span className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    <InstagramLink />
                  </span>
                  <span className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    <BlueSky />
                  </span>
                  <span className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    <YoutubeLink />
                  </span>
                  {/* <span className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    <TwitterLink />
                  </span> */}
                  <span className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    <TikTokLink />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

export default Navigation
