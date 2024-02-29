import { faMicrochip, faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import NavLinks from "./nav-links";
import { redirect } from "next/dist/server/api-utils";



export default function SideNav() {
    return (
      <div className="flex h-full flex-col px-3 py-4 md:px-2">
        <Link
          className="mb-2 flex h-20 items-end justify-start rounded-md bg-gray-700 p-4 md:h-40"
          href="/admin"
        >
          <div className="w-39 text-white font-bold text-2xl md:w-40">
            <FontAwesomeIcon className="pr-2" icon={faMicrochip} />
            Infinity Tech
          </div>
        </Link>
        <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
          <NavLinks />
          <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
          {/* <form
           action={async () => {
            'use server';
            await signOut();
          }}> */}
            <button className="flex h-[48px] w-full grow items-center justify-center text-gray-500 gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
              <FontAwesomeIcon icon={faRightFromBracket} className="text-gray-500 w-6" />
              <div className="hidden md:block" >
                <Link href="../main">Sign Out</Link>
              </div>
            </button>
          {/* </form> */}
        </div>
      </div>
    );
  }
  