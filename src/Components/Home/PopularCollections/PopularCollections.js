import React, { Fragment } from "react";
import titleIcon from "../../../Assets/Icons/titleIcon.png";
import checkMark from '../../../Assets/Icons/checkMarkIcon.png'
import { PopularCollectionsData } from "../../../data/data";


const PopularCollections = () => {
  return (
    <Fragment>
      <section className="bg-[#1E2329] w-full overflow-x-hidden">
        <div className="max-w-[1200px] mx-[16px] md:mx-[32px] lg:mx-auto py-[48px] pt-[0] md:pt-[72px] pb-0 md:pb-[80 px] font-poppins">
          {/* Title Style */}
          <div className="flex justify-between">
            <div>
              <img src={titleIcon} alt="icon" />
              <h1 className="text-[#FFFFFF] text-[24px] md:text-[32px] font-semibold">
                Popular Collections
              </h1>
            </div>
            <button className="py-[12px] px-[32px] text-white rounded-[300px] box-border border-2 border-[#F6D62E] text-[16px] font-semibold leading-[24px]">
              Explore More
            </button>
          </div>

          {/*Single Card Style */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 mt-[24px] lg:mt-[65px] md:mt-[40px] gap-[16px] md:gap-[24px] ">
            {PopularCollectionsData.map((data) => (
              <div
                className=" popularCollectionCard p-[16px] rounded-[15px] "
                key={data.id}
              >
                <div className="grid grid-cols-3 ">
                  {data.collection.map((img) => (
                    <img className="w-[96px] h-[96px]" src={img} alt="icon" />
                  ))}
                </div>

                <div>
                  <h4 className="mt-[16px] mb-[8px] text-[#FFFFFF] text-[20px] leading-[30px] font-semibold">
                    {data.title}
                  </h4>
                  <div className="flex items-center">
                    <p className=" text-[#FFFFFF] text-[15px] font-semibold leading-[22.5px]">
                      By
                      <span className="text-[#3C84F7] ml-[7px]">
                        {data.name}
                      </span>
                    </p>
                    <img
                      className="w-[19.54px] h-[19.35px] ml-[10px]"
                      src={checkMark}
                      alt="checkMark"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default PopularCollections;
