import React from 'react'
import {
  BellIcon,
  InboxIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline'
const Header = () => {
  return (
    <>
      <div className="bg-[#95bf47] w-full h-[10vh] py-6 items-center justify-between flex px-12">
        <div className="items-center w-full justify-center flex spacing-x-4">
          <h1 className="text-xl text-gray-900 font-medium">
            Shopify Analytics Panel
          </h1>
        </div>

        <div className="items-center justify-end space-x-6 flex w-full">
          <BellIcon className="header-icon" />
          <InboxIcon className="header-icon" />
          <UserCircleIcon className="header-icon" />
        </div>
      </div>
    </>
  )
}

export default Header
