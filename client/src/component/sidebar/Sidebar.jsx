import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveItem } from '../../redux/features/sideBarSlice'

import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import { navList } from './navList'
const Sidebar = () => {
  return (
    <nav className="col-span-2 border-r border-gray-200 bg-gray-100 min-h-[90vh] w-[80px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between">
      <div className="space-y-8">
        {navList.slice(0, 4).map((link) => (
          <NavItem link={link} key={link.id} />
        ))}
        <div className="w-full border-t border-gray-200" />
        {navList.slice(4, 6).map((link) => (
          <NavItem link={link} key={link.id} />
        ))}
      </div>
      <div className="w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group text-gray-600 hover:border-gray-900 hover:text-gray-900">
        <Cog6ToothIcon className="nav-icon h-8 w-18" />
        <span className="font-medium ml-5 hover:cursor-pointer">Settings</span>
      </div>
    </nav>
  )
}

function NavItem({ link }) {
  const dispatch = useDispatch()
  const activeItem = useSelector((state) => state.sidebar.value)
  return (
    <div
      key={link.id}
      className={`w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent ${
        activeItem === link.id && 'border-gray-900'
      }`}
      onClick={() => dispatch(setActiveItem(link.id))}
    >
      <span>{link.icon}</span>
      <h1
        className={`text-gray-600 group-hover:text-black xl:flex hidden ${
          activeItem === link.id && 'text-black'
        }`}
      >
        {link.title}
      </h1>
    </div>
  )
}

export default Sidebar
