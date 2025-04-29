import { Link } from "react-router-dom";
import Arrow from "../../../Helpers/icons/Arrow";
import Selectbox from "../../../Helpers/Selectbox";
import { CiShoppingTag } from "react-icons/ci";

export default function TopBar({ className }) {
  return (
    <>
      <div
        className={`w-full bg-white lg:h-10 border-b border-qgray-border ${
          className || ""
        }`}
      >
        <div className="container-x mx-auto h-full">
          <div className="flex flex-col lg:flex-row justify-between items-center h-full">
            <div className="topbar-nav">
              <ul className="flex space-x-6">
                <li>
                  <Link to="/">
                    <span className="text-xs leading-6 text-qblack font-500">
                      Account
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/tracking-order">
                    <span className="text-xs leading-6 text-qblack font-500">
                      Track Order
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/faq">
                    <span className="text-xs leading-6 text-qblack font-500">
                      Support
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center text-qblack text-xs font-[500] pb-3 lg:pb-0">
                <h4 className="flex items-center gap-2 group"><CiShoppingTag className="text-xl group-hover:animate-pulse" /> Get 25 AED off on 1st online pharmacy purchase <br className="lg:hidden"/> Use Code: NEW25</h4>
            </div>
            <div className="topbar-dropdowns sm:block hidden w[30%]">
              <div className="flex space-x-6">
                <button></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
