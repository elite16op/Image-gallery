import React from "react";
import { set } from "@/redux/Pagination";
import { useDispatch, useSelector } from "react-redux";


const Page = (props) => {
    const num = useSelector((state)=>state.pages.number)
const dispatch = useDispatch();

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <a
              href="#"
              onClick={()=>dispatch(set({
                n  :1,
                range : [0,3]
              }))}
              className={`px-3 py-2 ${num==1? "text-blue-500":"text-gray-500"} bg-white border border-gray-300`}
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={()=>dispatch(set({
                n  :2,
                range : [3,6]
              }))}
              className={`px-3 py-2 ${num==2? "text-blue-500":"text-gray-500"} bg-white border border-gray-300`}
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={()=>dispatch(set({
                n  :3,
                range : [6,9]
              }))}
              aria-current="page"
              className={`px-3 py-2 ${num==3? "text-blue-500":"text-gray-500"} bg-white border border-gray-300`}
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={()=>dispatch(set({
                n  :4,
                range : [9,12]
              }))}
              className={`px-3 py-2 ${num==4? "text-blue-500":"text-gray-500"} bg-white border border-gray-300`}
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={()=>dispatch(set({
                n  :5,
                range : [12,15  ]
              }))}
              className={`px-3 py-2 ${num==5? "text-blue-500":"text-gray-500"} bg-white border border-gray-300`}
            >
              5
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Page;