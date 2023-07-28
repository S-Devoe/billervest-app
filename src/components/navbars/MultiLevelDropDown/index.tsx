import Link from "next/link";
import styles from "./dropdown.module.css";

type MultiLevelDropdownProps = {
  title: string;
  data: {
    id: number;
    path: string;
    title: string;
    name?: string;
    nested_dropdown?: { id: number; title: string }[];
  }[];
};

export const MultiLevelDropdown = ({
  data,
  title,
}: MultiLevelDropdownProps) => {
  return (
    <div className={`group ${styles.group} inline-block`}>
      <button className="outline-none focus:outline-none flex items-center">
        <span className="pr-1  flex-1">{title}</span>
        <span>
          <svg
            className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </span>
      </button>
      <ul
        className="  rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out flex gap-y-3 flex-col p-3 origin-top min-w-[15rem] bg-white "
      >
        {data.map((item) => {
          if (!item.nested_dropdown) {
            return (
              <li className="rounded-sm text-sm px-3 py-1 " key={item.id}>
                <Link
                  className="hover:text-[#7049F7] text-slate-800"
                  href={item.path}
                >
                  {item.title}
                </Link>
              </li>
            );
          }

          return (
            <li
              className="rounded-sm relative text-sm px-3 py-1 hover:text-[#7049F7] text-slate-800"
              key={item.id}
            >
              <button className="w-full text-left flex items-center outline-none focus:outline-none">
                <span className="pr-1 flex-1">{item.title}</span>
                <span className="mr-auto">
                  <svg
                    className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul className=" border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left flex gap-y-3 flex-col p-3  min-w-[15rem] bg-white">
                {item.nested_dropdown.map((i) => {
                  return (
                    <li
                      className="px-3 py-1 hover:text-[#7049F7] text-slate-800"
                      key={i.id}
                    >
                      <Link href={`/products/${item.name}/${i.id}`}>
                        {i.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
