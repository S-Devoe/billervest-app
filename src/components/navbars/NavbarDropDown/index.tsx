import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

type NavbarDropDownProps = {
  title: string;
  lists: { id: number; title: string; path: string }[];
};

export function NavbarDropDown({ title, lists }: NavbarDropDownProps) {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center items-center gap-x-1  p-2 text-sm  text-[text-[#F5F2EA]] font-bold   focus:outline-none focus-visible:ring-2  focus-visible:ring-opacity-75">
            <span>{title}</span>
            <span className="ml-1 ">
              <RiArrowDownSLine className="text-xl" />
            </span>
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
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {lists.map((item) => (
                <Menu.Item key={item.id}>
                  {({ active }) => (
                    <Link href={item.path}>
                      <button
                        className={`${
                          active ? "bg-primary text-[#7049F7]" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {item.title}
                      </button>
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
