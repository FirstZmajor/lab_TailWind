import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Disclosure, Menu, Transition } from '@headlessui/react'

import myIcon from '../static/icons/sunflower.svg'

const navigation = [
  { label: 'Home', path: '/' },
  { label: 'Profile', path: '/profile' },
]

const NevMenu: React.FC<any> = (props) => {
  const location = useLocation()

  return (
    <>
      <Disclosure as="nav" className="sticky top-0 bg-yellow-900">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-2 px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8 animate-bounce ease duration-100"
                      src={myIcon}
                      alt="Workflow"
                    />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item, itemIdx) =>
                        location.pathname === item.path ? (
                          <React.Fragment key={itemIdx}>
                            {/* Current: "bg-yellow-500 text-white", Default: "text-gray-300 hover:bg-yellow-700 hover:text-white" */}
                            <Link
                              to={item.path}
                              className="bg-yellow-500 text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                              {item.label}
                            </Link>
                          </React.Fragment>
                        ) : (
                          <Link
                            to={item.path}
                            className="text-gray-300 hover:bg-yellow-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                          >
                            {item.label}
                          </Link>
                        ),
                      )}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <button className="bg-yellow-900 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">View notifications</span>
                      {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                    </button>

                    {/* Profile dropdown */}
                    {/* <Menu as="div" className="ml-3 relative">
                        {({ open }) => (
                          <>
                            <div>
                              <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">Open user menu</span>
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                  alt=""
                                />
                              </Menu.Button>
                            </div>
                            <Transition
                              show={open}
                              as={React.Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items
                                static
                                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                              >
                                {profile.map((item) => (
                                  <Menu.Item key={item}>
                                    {({ active }) => (
                                      <a
                                        href="#"
                                        className={classNames(
                                          active ? 'bg-gray-100' : '',
                                          'block px-4 py-2 text-sm text-gray-700',
                                        )}
                                      >
                                        {item}
                                      </a>
                                    )}
                                  </Menu.Item>
                                ))}
                              </Menu.Items>
                            </Transition>
                          </>
                        )}
                      </Menu> */}
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      // <XIcon className="block h-6 w-6" aria-hidden="true" />
                      <span>X</span>
                    ) : (
                      // <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      <span>Icon</span>
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item, itemIdx) =>
                  location.pathname === item.path ? (
                    <React.Fragment key={itemIdx}>
                      {/* Current: "bg-yellow-500 text-white", Default: "text-gray-300 hover:bg-yellow-700 hover:text-white" */}
                      <Link
                        to={item.path}
                        className="bg-yellow-500 text-white block px-3 py-2 rounded-md text-base font-medium"
                      >
                        {item.label}
                      </Link>
                    </React.Fragment>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-gray-300 hover:bg-yellow-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item.label}
                    </Link>
                  ),
                )}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  )
}
export default NevMenu
