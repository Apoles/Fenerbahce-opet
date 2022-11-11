/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropwDownButton() {


    const [data, setData] = useState('s');


    return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className=" inline-flex justify-center w-32 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-l font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          {data}
         
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
          <Menu.Item >
              {({ active }) => (

                
                <p   onClick={()=>{
                    active ?  setData('XS'):setData('s')

                }}
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  XS
                </p>
              )}
            </Menu.Item>
            <Menu.Item >
              {({ active }) => (

                
                <p onClick={()=>{
                    active ?  setData('S'):setData('s')

                }}
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  S
                </p>
              )}
            </Menu.Item>
            <Menu.Item >
              {({ active }) => (

                
                <p onClick={()=>{
                    active ?  setData('M'):setData('s')

                }}
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  M
                </p>
              )}
            </Menu.Item>
            <Menu.Item >
              {({ active }) => (

                
                <p onClick={()=>{
                    active ?  setData('xl'):setData('s')

                }}
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  XL
                </p>
              )}
            </Menu.Item>
            <Menu.Item >
              {({ active }) => (

                
                <p onClick={()=>{
                    active ?  setData('2XL'):setData('s')

                }}
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  2XL
                </p>
              )}
            </Menu.Item>
            <Menu.Item >
              {({ active }) => (

                
                <p onClick={()=>{
                    active ?  setData('3XL'):setData('s')

                }}
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  3XL
                </p>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
