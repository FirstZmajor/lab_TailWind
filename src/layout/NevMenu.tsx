import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Disclosure, Menu, Transition } from '@headlessui/react'

const navigation = [
  { label: 'Home', path: '/' },
  { label: 'Profile', path: '/profile' },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const NevMenu: React.FC<any> = (props) => {
  const location = useLocation()

  return (
    <>
      <div>
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                        alt="Workflow"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item, itemIdx) =>
                          location.pathname === item.path ? (
                            <React.Fragment key={itemIdx}>
                              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                              <Link
                                to={item.path}
                                className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                              >
                                {item.label}
                              </Link>
                            </React.Fragment>
                          ) : (
                            <Link
                              to={item.path}
                              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
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
                      <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
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
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
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
                        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                        <a
                          href="#"
                          className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                          {item.label}
                        </a>
                      </React.Fragment>
                    ) : (
                      <a
                        key={itemIdx}
                        href="#"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      >
                        {item.label}
                      </a>
                    ),
                  )}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
      {/* <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav
          className="relative flex items-center justify-between sm:h-10 lg:justify-start"
          aria-label="Global"
        >
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link to="/">
                <span className="sr-only">Workflow</span>
                <img
                  alt="first SY"
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                />
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
            <Link to={'/'} className="font-medium text-gray-500 hover:text-gray-900">
              HomePage
            </Link>
            <Link to={'/profile'} className="font-medium text-gray-500 hover:text-gray-900">
              Profile
            </Link>
          </div>
        </nav>
      </div> */}
    </>
  )
}
export default NevMenu
