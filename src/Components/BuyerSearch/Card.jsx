import React from "react";

const Card = () => {
  return (
    <div>
      {/* card-1 */}
      <div className="h-[232px] flex w-[800px] bg-white shadow-lg">
        <div className="">
          <figure>
            <img
              className="h-[184px] mx-6  mt-6 w-[152px]"
              src="https://i.ibb.co/6n6rDWZ/Banner-Image-1.png"
              alt="Movie"
            />
          </figure>
        </div>
        <div className="">
          <div className="flex justify-evenly gap-1 pr-6 mt-6">
            <p className="text-xl">
              3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi
            </p>
            <p className="text-2xl font-bold">$300000</p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2 text-center justify-evenly">
              <img
                className="w-6 h-6"
                src="https://i.ibb.co/zNSH97p/fi-bs-marker.png"
                alt=""
              />
              <p className="text-xl">Meadowshire Park, Greenfield, USA</p>
            </div>
            <div className="pr-6">
              <button className="btn btn-outline pr-6">Bid Propert</button>
            </div>
          </div>
          <div className="flex gap-3">
            <h3 className="font-bold">Property details</h3>
            <svg
              className="bg-[#E3E3E3] w-2 rounded"
              xmlns="http://www.w3.org/2000/svg"
              width="429"
              height="2"
              viewBox="0 0 429 2"
              fill="none"
            >
              <path d="M1 1H428" className="bg-[#E3E3E3] w-2 rounded" />
            </svg>
          </div>
          <div className="flex justify-between pr-6 my-4">
            <div className="flex gap-4">
              <svg
                className="bg-[#EE6611]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_1561_1302)">
                  <path
                    d="M9.89062 0V5.625H14.1094V0H9.89062ZM12.7031 4.21875H11.2969V1.40625H12.7031V4.21875Z"
                    fill="white"
                  />
                  <path
                    d="M5.00656 2.02319L2.02344 5.00632L6.00092 8.9838L8.98405 6.00068L5.00656 2.02319ZM4.01216 5.00632L5.00656 4.01196L6.99533 6.00068L6.00092 6.99508L4.01216 5.00632Z"
                    fill="white"
                  />
                  <path
                    d="M0 9.89062V14.1094H5.625V9.89062H0ZM4.21875 12.7031H1.40625V11.2969H4.21875V12.7031Z"
                    fill="white"
                  />
                  <path
                    d="M6.00092 15.0164L2.02344 18.9938L5.00656 21.977L8.98405 17.9995L6.00092 15.0164ZM4.01216 18.9938L6.00092 17.0051L6.99533 17.9995L5.00656 19.9882L4.01216 18.9938Z"
                    fill="white"
                  />
                  <path
                    d="M9.89062 18.375V24H14.1094V18.375H9.89062ZM12.7031 22.5938H11.2969V19.7812H12.7031V22.5938Z"
                    fill="white"
                  />
                  <path
                    d="M17.9997 15.0161L15.0166 17.9992L18.9941 21.9767L21.9772 18.9936L17.9997 15.0161ZM18.994 19.988L17.0053 17.9993L17.9997 17.0049L19.9884 18.9936L18.994 19.988Z"
                    fill="white"
                  />
                  <path
                    d="M18.375 9.89062V14.1094H24V9.89062H18.375ZM22.5938 12.7031H19.7812V11.2969H22.5938V12.7031Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1561_1302">
                    <rect width="24" height="24" rx="4" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <h3 className="font-bold">Total Area</h3>
                <p>891 sqft</p>
              </div>
            </div>
            <div className="flex gap-4">
              <svg
                className="bg-[#EE6611]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_1561_1302)">
                  <path
                    d="M9.89062 0V5.625H14.1094V0H9.89062ZM12.7031 4.21875H11.2969V1.40625H12.7031V4.21875Z"
                    fill="white"
                  />
                  <path
                    d="M5.00656 2.02319L2.02344 5.00632L6.00092 8.9838L8.98405 6.00068L5.00656 2.02319ZM4.01216 5.00632L5.00656 4.01196L6.99533 6.00068L6.00092 6.99508L4.01216 5.00632Z"
                    fill="white"
                  />
                  <path
                    d="M0 9.89062V14.1094H5.625V9.89062H0ZM4.21875 12.7031H1.40625V11.2969H4.21875V12.7031Z"
                    fill="white"
                  />
                  <path
                    d="M6.00092 15.0164L2.02344 18.9938L5.00656 21.977L8.98405 17.9995L6.00092 15.0164ZM4.01216 18.9938L6.00092 17.0051L6.99533 17.9995L5.00656 19.9882L4.01216 18.9938Z"
                    fill="white"
                  />
                  <path
                    d="M9.89062 18.375V24H14.1094V18.375H9.89062ZM12.7031 22.5938H11.2969V19.7812H12.7031V22.5938Z"
                    fill="white"
                  />
                  <path
                    d="M17.9997 15.0161L15.0166 17.9992L18.9941 21.9767L21.9772 18.9936L17.9997 15.0161ZM18.994 19.988L17.0053 17.9993L17.9997 17.0049L19.9884 18.9936L18.994 19.988Z"
                    fill="white"
                  />
                  <path
                    d="M18.375 9.89062V14.1094H24V9.89062H18.375ZM22.5938 12.7031H19.7812V11.2969H22.5938V12.7031Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1561_1302">
                    <rect width="24" height="24" rx="4" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <h3 className="font-bold">Total Area</h3>
                <p>891 sqft</p>
              </div>
            </div>
            <div className="flex gap-4">
              <svg
                className="bg-[#EE6611]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_1561_1302)">
                  <path
                    d="M9.89062 0V5.625H14.1094V0H9.89062ZM12.7031 4.21875H11.2969V1.40625H12.7031V4.21875Z"
                    fill="white"
                  />
                  <path
                    d="M5.00656 2.02319L2.02344 5.00632L6.00092 8.9838L8.98405 6.00068L5.00656 2.02319ZM4.01216 5.00632L5.00656 4.01196L6.99533 6.00068L6.00092 6.99508L4.01216 5.00632Z"
                    fill="white"
                  />
                  <path
                    d="M0 9.89062V14.1094H5.625V9.89062H0ZM4.21875 12.7031H1.40625V11.2969H4.21875V12.7031Z"
                    fill="white"
                  />
                  <path
                    d="M6.00092 15.0164L2.02344 18.9938L5.00656 21.977L8.98405 17.9995L6.00092 15.0164ZM4.01216 18.9938L6.00092 17.0051L6.99533 17.9995L5.00656 19.9882L4.01216 18.9938Z"
                    fill="white"
                  />
                  <path
                    d="M9.89062 18.375V24H14.1094V18.375H9.89062ZM12.7031 22.5938H11.2969V19.7812H12.7031V22.5938Z"
                    fill="white"
                  />
                  <path
                    d="M17.9997 15.0161L15.0166 17.9992L18.9941 21.9767L21.9772 18.9936L17.9997 15.0161ZM18.994 19.988L17.0053 17.9993L17.9997 17.0049L19.9884 18.9936L18.994 19.988Z"
                    fill="white"
                  />
                  <path
                    d="M18.375 9.89062V14.1094H24V9.89062H18.375ZM22.5938 12.7031H19.7812V11.2969H22.5938V12.7031Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1561_1302">
                    <rect width="24" height="24" rx="4" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <h3 className="font-bold">Total Area</h3>
                <p>891 sqft</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card-end */}
      {/* card-1 */}
      <div className="h-[232px] flex w-[800px] bg-white shadow-lg">
        <div className="">
          <figure>
            <img
              className="h-[184px] mx-6  mt-6 w-[152px]"
              src="https://i.ibb.co/6n6rDWZ/Banner-Image-1.png"
              alt="Movie"
            />
          </figure>
        </div>
        <div className="">
          <div className="flex justify-evenly gap-1 pr-6 mt-6">
            <p className="text-xl">
              3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi
            </p>
            <p className="text-2xl font-bold">$300000</p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2 text-center justify-evenly">
              <img
                className="w-6 h-6"
                src="https://i.ibb.co/zNSH97p/fi-bs-marker.png"
                alt=""
              />
              <p className="text-xl">Meadowshire Park, Greenfield, USA</p>
            </div>
            <div className="pr-6">
              <button className="btn btn-outline pr-6">Bid Propert</button>
            </div>
          </div>
          <div className="flex gap-3">
            <h3 className="font-bold">Property details</h3>
            <svg
              className="bg-[#E3E3E3] w-2 rounded"
              xmlns="http://www.w3.org/2000/svg"
              width="429"
              height="2"
              viewBox="0 0 429 2"
              fill="none"
            >
              <path d="M1 1H428" className="bg-[#E3E3E3] w-2 rounded" />
            </svg>
          </div>
          <div className="flex justify-between pr-6 my-4">
            <div className="flex gap-4">
              <svg
                className="bg-[#EE6611]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_1561_1302)">
                  <path
                    d="M9.89062 0V5.625H14.1094V0H9.89062ZM12.7031 4.21875H11.2969V1.40625H12.7031V4.21875Z"
                    fill="white"
                  />
                  <path
                    d="M5.00656 2.02319L2.02344 5.00632L6.00092 8.9838L8.98405 6.00068L5.00656 2.02319ZM4.01216 5.00632L5.00656 4.01196L6.99533 6.00068L6.00092 6.99508L4.01216 5.00632Z"
                    fill="white"
                  />
                  <path
                    d="M0 9.89062V14.1094H5.625V9.89062H0ZM4.21875 12.7031H1.40625V11.2969H4.21875V12.7031Z"
                    fill="white"
                  />
                  <path
                    d="M6.00092 15.0164L2.02344 18.9938L5.00656 21.977L8.98405 17.9995L6.00092 15.0164ZM4.01216 18.9938L6.00092 17.0051L6.99533 17.9995L5.00656 19.9882L4.01216 18.9938Z"
                    fill="white"
                  />
                  <path
                    d="M9.89062 18.375V24H14.1094V18.375H9.89062ZM12.7031 22.5938H11.2969V19.7812H12.7031V22.5938Z"
                    fill="white"
                  />
                  <path
                    d="M17.9997 15.0161L15.0166 17.9992L18.9941 21.9767L21.9772 18.9936L17.9997 15.0161ZM18.994 19.988L17.0053 17.9993L17.9997 17.0049L19.9884 18.9936L18.994 19.988Z"
                    fill="white"
                  />
                  <path
                    d="M18.375 9.89062V14.1094H24V9.89062H18.375ZM22.5938 12.7031H19.7812V11.2969H22.5938V12.7031Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1561_1302">
                    <rect width="24" height="24" rx="4" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <h3 className="font-bold">Total Area</h3>
                <p>891 sqft</p>
              </div>
            </div>
            <div className="flex gap-4">
              <svg
                className="bg-[#EE6611]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_1561_1302)">
                  <path
                    d="M9.89062 0V5.625H14.1094V0H9.89062ZM12.7031 4.21875H11.2969V1.40625H12.7031V4.21875Z"
                    fill="white"
                  />
                  <path
                    d="M5.00656 2.02319L2.02344 5.00632L6.00092 8.9838L8.98405 6.00068L5.00656 2.02319ZM4.01216 5.00632L5.00656 4.01196L6.99533 6.00068L6.00092 6.99508L4.01216 5.00632Z"
                    fill="white"
                  />
                  <path
                    d="M0 9.89062V14.1094H5.625V9.89062H0ZM4.21875 12.7031H1.40625V11.2969H4.21875V12.7031Z"
                    fill="white"
                  />
                  <path
                    d="M6.00092 15.0164L2.02344 18.9938L5.00656 21.977L8.98405 17.9995L6.00092 15.0164ZM4.01216 18.9938L6.00092 17.0051L6.99533 17.9995L5.00656 19.9882L4.01216 18.9938Z"
                    fill="white"
                  />
                  <path
                    d="M9.89062 18.375V24H14.1094V18.375H9.89062ZM12.7031 22.5938H11.2969V19.7812H12.7031V22.5938Z"
                    fill="white"
                  />
                  <path
                    d="M17.9997 15.0161L15.0166 17.9992L18.9941 21.9767L21.9772 18.9936L17.9997 15.0161ZM18.994 19.988L17.0053 17.9993L17.9997 17.0049L19.9884 18.9936L18.994 19.988Z"
                    fill="white"
                  />
                  <path
                    d="M18.375 9.89062V14.1094H24V9.89062H18.375ZM22.5938 12.7031H19.7812V11.2969H22.5938V12.7031Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1561_1302">
                    <rect width="24" height="24" rx="4" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <h3 className="font-bold">Total Area</h3>
                <p>891 sqft</p>
              </div>
            </div>
            <div className="flex gap-4">
              <svg
                className="bg-[#EE6611]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_1561_1302)">
                  <path
                    d="M9.89062 0V5.625H14.1094V0H9.89062ZM12.7031 4.21875H11.2969V1.40625H12.7031V4.21875Z"
                    fill="white"
                  />
                  <path
                    d="M5.00656 2.02319L2.02344 5.00632L6.00092 8.9838L8.98405 6.00068L5.00656 2.02319ZM4.01216 5.00632L5.00656 4.01196L6.99533 6.00068L6.00092 6.99508L4.01216 5.00632Z"
                    fill="white"
                  />
                  <path
                    d="M0 9.89062V14.1094H5.625V9.89062H0ZM4.21875 12.7031H1.40625V11.2969H4.21875V12.7031Z"
                    fill="white"
                  />
                  <path
                    d="M6.00092 15.0164L2.02344 18.9938L5.00656 21.977L8.98405 17.9995L6.00092 15.0164ZM4.01216 18.9938L6.00092 17.0051L6.99533 17.9995L5.00656 19.9882L4.01216 18.9938Z"
                    fill="white"
                  />
                  <path
                    d="M9.89062 18.375V24H14.1094V18.375H9.89062ZM12.7031 22.5938H11.2969V19.7812H12.7031V22.5938Z"
                    fill="white"
                  />
                  <path
                    d="M17.9997 15.0161L15.0166 17.9992L18.9941 21.9767L21.9772 18.9936L17.9997 15.0161ZM18.994 19.988L17.0053 17.9993L17.9997 17.0049L19.9884 18.9936L18.994 19.988Z"
                    fill="white"
                  />
                  <path
                    d="M18.375 9.89062V14.1094H24V9.89062H18.375ZM22.5938 12.7031H19.7812V11.2969H22.5938V12.7031Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1561_1302">
                    <rect width="24" height="24" rx="4" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <h3 className="font-bold">Total Area</h3>
                <p>891 sqft</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card-end */}
      {/* card-1 */}
      <div className="h-[232px] flex w-[800px] bg-white shadow-lg">
        <div className="">
          <figure>
            <img
              className="h-[184px] mx-6  mt-6 w-[152px]"
              src="https://i.ibb.co/6n6rDWZ/Banner-Image-1.png"
              alt="Movie"
            />
          </figure>
        </div>
        <div className="">
          <div className="flex justify-evenly gap-1 pr-6 mt-6">
            <p className="text-xl">
              3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi
            </p>
            <p className="text-2xl font-bold">$300000</p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2 text-center justify-evenly">
              <img
                className="w-6 h-6"
                src="https://i.ibb.co/zNSH97p/fi-bs-marker.png"
                alt=""
              />
              <p className="text-xl">Meadowshire Park, Greenfield, USA</p>
            </div>
            <div className="pr-6">
              <button className="btn btn-outline pr-6">Bid Propert</button>
            </div>
          </div>
          <div className="flex gap-3">
            <h3 className="font-bold">Property details</h3>
            <svg
              className="bg-[#E3E3E3] w-2 rounded"
              xmlns="http://www.w3.org/2000/svg"
              width="429"
              height="2"
              viewBox="0 0 429 2"
              fill="none"
            >
              <path d="M1 1H428" className="bg-[#E3E3E3] w-2 rounded" />
            </svg>
          </div>
          <div className="flex justify-between pr-6 my-4">
            <div className="flex gap-4">
              <svg
                className="bg-[#EE6611]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_1561_1302)">
                  <path
                    d="M9.89062 0V5.625H14.1094V0H9.89062ZM12.7031 4.21875H11.2969V1.40625H12.7031V4.21875Z"
                    fill="white"
                  />
                  <path
                    d="M5.00656 2.02319L2.02344 5.00632L6.00092 8.9838L8.98405 6.00068L5.00656 2.02319ZM4.01216 5.00632L5.00656 4.01196L6.99533 6.00068L6.00092 6.99508L4.01216 5.00632Z"
                    fill="white"
                  />
                  <path
                    d="M0 9.89062V14.1094H5.625V9.89062H0ZM4.21875 12.7031H1.40625V11.2969H4.21875V12.7031Z"
                    fill="white"
                  />
                  <path
                    d="M6.00092 15.0164L2.02344 18.9938L5.00656 21.977L8.98405 17.9995L6.00092 15.0164ZM4.01216 18.9938L6.00092 17.0051L6.99533 17.9995L5.00656 19.9882L4.01216 18.9938Z"
                    fill="white"
                  />
                  <path
                    d="M9.89062 18.375V24H14.1094V18.375H9.89062ZM12.7031 22.5938H11.2969V19.7812H12.7031V22.5938Z"
                    fill="white"
                  />
                  <path
                    d="M17.9997 15.0161L15.0166 17.9992L18.9941 21.9767L21.9772 18.9936L17.9997 15.0161ZM18.994 19.988L17.0053 17.9993L17.9997 17.0049L19.9884 18.9936L18.994 19.988Z"
                    fill="white"
                  />
                  <path
                    d="M18.375 9.89062V14.1094H24V9.89062H18.375ZM22.5938 12.7031H19.7812V11.2969H22.5938V12.7031Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1561_1302">
                    <rect width="24" height="24" rx="4" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <h3 className="font-bold">Total Area</h3>
                <p>891 sqft</p>
              </div>
            </div>
            <div className="flex gap-4">
              <svg
                className="bg-[#EE6611]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_1561_1302)">
                  <path
                    d="M9.89062 0V5.625H14.1094V0H9.89062ZM12.7031 4.21875H11.2969V1.40625H12.7031V4.21875Z"
                    fill="white"
                  />
                  <path
                    d="M5.00656 2.02319L2.02344 5.00632L6.00092 8.9838L8.98405 6.00068L5.00656 2.02319ZM4.01216 5.00632L5.00656 4.01196L6.99533 6.00068L6.00092 6.99508L4.01216 5.00632Z"
                    fill="white"
                  />
                  <path
                    d="M0 9.89062V14.1094H5.625V9.89062H0ZM4.21875 12.7031H1.40625V11.2969H4.21875V12.7031Z"
                    fill="white"
                  />
                  <path
                    d="M6.00092 15.0164L2.02344 18.9938L5.00656 21.977L8.98405 17.9995L6.00092 15.0164ZM4.01216 18.9938L6.00092 17.0051L6.99533 17.9995L5.00656 19.9882L4.01216 18.9938Z"
                    fill="white"
                  />
                  <path
                    d="M9.89062 18.375V24H14.1094V18.375H9.89062ZM12.7031 22.5938H11.2969V19.7812H12.7031V22.5938Z"
                    fill="white"
                  />
                  <path
                    d="M17.9997 15.0161L15.0166 17.9992L18.9941 21.9767L21.9772 18.9936L17.9997 15.0161ZM18.994 19.988L17.0053 17.9993L17.9997 17.0049L19.9884 18.9936L18.994 19.988Z"
                    fill="white"
                  />
                  <path
                    d="M18.375 9.89062V14.1094H24V9.89062H18.375ZM22.5938 12.7031H19.7812V11.2969H22.5938V12.7031Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1561_1302">
                    <rect width="24" height="24" rx="4" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <h3 className="font-bold">Total Area</h3>
                <p>891 sqft</p>
              </div>
            </div>
            <div className="flex gap-4">
              <svg
                className="bg-[#EE6611]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_1561_1302)">
                  <path
                    d="M9.89062 0V5.625H14.1094V0H9.89062ZM12.7031 4.21875H11.2969V1.40625H12.7031V4.21875Z"
                    fill="white"
                  />
                  <path
                    d="M5.00656 2.02319L2.02344 5.00632L6.00092 8.9838L8.98405 6.00068L5.00656 2.02319ZM4.01216 5.00632L5.00656 4.01196L6.99533 6.00068L6.00092 6.99508L4.01216 5.00632Z"
                    fill="white"
                  />
                  <path
                    d="M0 9.89062V14.1094H5.625V9.89062H0ZM4.21875 12.7031H1.40625V11.2969H4.21875V12.7031Z"
                    fill="white"
                  />
                  <path
                    d="M6.00092 15.0164L2.02344 18.9938L5.00656 21.977L8.98405 17.9995L6.00092 15.0164ZM4.01216 18.9938L6.00092 17.0051L6.99533 17.9995L5.00656 19.9882L4.01216 18.9938Z"
                    fill="white"
                  />
                  <path
                    d="M9.89062 18.375V24H14.1094V18.375H9.89062ZM12.7031 22.5938H11.2969V19.7812H12.7031V22.5938Z"
                    fill="white"
                  />
                  <path
                    d="M17.9997 15.0161L15.0166 17.9992L18.9941 21.9767L21.9772 18.9936L17.9997 15.0161ZM18.994 19.988L17.0053 17.9993L17.9997 17.0049L19.9884 18.9936L18.994 19.988Z"
                    fill="white"
                  />
                  <path
                    d="M18.375 9.89062V14.1094H24V9.89062H18.375ZM22.5938 12.7031H19.7812V11.2969H22.5938V12.7031Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1561_1302">
                    <rect width="24" height="24" rx="4" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <h3 className="font-bold">Total Area</h3>
                <p>891 sqft</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card-end */}
      {/* card-1 */}
      <div className="h-[232px] flex w-[800px] bg-white shadow-lg">
        <div className="">
          <figure>
            <img
              className="h-[184px] mx-6  mt-6 w-[152px]"
              src="https://i.ibb.co/6n6rDWZ/Banner-Image-1.png"
              alt="Movie"
            />
          </figure>
        </div>
        <div className="">
          <div className="flex justify-evenly gap-1 pr-6 mt-6">
            <p className="text-xl">
              3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi
            </p>
            <p className="text-2xl font-bold">$300000</p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2 text-center justify-evenly">
              <img
                className="w-6 h-6"
                src="https://i.ibb.co/zNSH97p/fi-bs-marker.png"
                alt=""
              />
              <p className="text-xl">Meadowshire Park, Greenfield, USA</p>
            </div>
            <div className="pr-6">
              <button className="btn btn-outline pr-6">Bid Propert</button>
            </div>
          </div>
          <div className="flex gap-3">
            <h3 className="font-bold">Property details</h3>
            <svg
              className="bg-[#E3E3E3] w-2 rounded"
              xmlns="http://www.w3.org/2000/svg"
              width="429"
              height="2"
              viewBox="0 0 429 2"
              fill="none"
            >
              <path d="M1 1H428" className="bg-[#E3E3E3] w-2 rounded" />
            </svg>
          </div>
          <div className="flex justify-between pr-6 my-4">
            <div className="flex gap-4">
              <svg
                className="bg-[#EE6611]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_1561_1302)">
                  <path
                    d="M9.89062 0V5.625H14.1094V0H9.89062ZM12.7031 4.21875H11.2969V1.40625H12.7031V4.21875Z"
                    fill="white"
                  />
                  <path
                    d="M5.00656 2.02319L2.02344 5.00632L6.00092 8.9838L8.98405 6.00068L5.00656 2.02319ZM4.01216 5.00632L5.00656 4.01196L6.99533 6.00068L6.00092 6.99508L4.01216 5.00632Z"
                    fill="white"
                  />
                  <path
                    d="M0 9.89062V14.1094H5.625V9.89062H0ZM4.21875 12.7031H1.40625V11.2969H4.21875V12.7031Z"
                    fill="white"
                  />
                  <path
                    d="M6.00092 15.0164L2.02344 18.9938L5.00656 21.977L8.98405 17.9995L6.00092 15.0164ZM4.01216 18.9938L6.00092 17.0051L6.99533 17.9995L5.00656 19.9882L4.01216 18.9938Z"
                    fill="white"
                  />
                  <path
                    d="M9.89062 18.375V24H14.1094V18.375H9.89062ZM12.7031 22.5938H11.2969V19.7812H12.7031V22.5938Z"
                    fill="white"
                  />
                  <path
                    d="M17.9997 15.0161L15.0166 17.9992L18.9941 21.9767L21.9772 18.9936L17.9997 15.0161ZM18.994 19.988L17.0053 17.9993L17.9997 17.0049L19.9884 18.9936L18.994 19.988Z"
                    fill="white"
                  />
                  <path
                    d="M18.375 9.89062V14.1094H24V9.89062H18.375ZM22.5938 12.7031H19.7812V11.2969H22.5938V12.7031Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1561_1302">
                    <rect width="24" height="24" rx="4" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <h3 className="font-bold">Total Area</h3>
                <p>891 sqft</p>
              </div>
            </div>
            <div className="flex gap-4">
              <svg
                className="bg-[#EE6611]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_1561_1302)">
                  <path
                    d="M9.89062 0V5.625H14.1094V0H9.89062ZM12.7031 4.21875H11.2969V1.40625H12.7031V4.21875Z"
                    fill="white"
                  />
                  <path
                    d="M5.00656 2.02319L2.02344 5.00632L6.00092 8.9838L8.98405 6.00068L5.00656 2.02319ZM4.01216 5.00632L5.00656 4.01196L6.99533 6.00068L6.00092 6.99508L4.01216 5.00632Z"
                    fill="white"
                  />
                  <path
                    d="M0 9.89062V14.1094H5.625V9.89062H0ZM4.21875 12.7031H1.40625V11.2969H4.21875V12.7031Z"
                    fill="white"
                  />
                  <path
                    d="M6.00092 15.0164L2.02344 18.9938L5.00656 21.977L8.98405 17.9995L6.00092 15.0164ZM4.01216 18.9938L6.00092 17.0051L6.99533 17.9995L5.00656 19.9882L4.01216 18.9938Z"
                    fill="white"
                  />
                  <path
                    d="M9.89062 18.375V24H14.1094V18.375H9.89062ZM12.7031 22.5938H11.2969V19.7812H12.7031V22.5938Z"
                    fill="white"
                  />
                  <path
                    d="M17.9997 15.0161L15.0166 17.9992L18.9941 21.9767L21.9772 18.9936L17.9997 15.0161ZM18.994 19.988L17.0053 17.9993L17.9997 17.0049L19.9884 18.9936L18.994 19.988Z"
                    fill="white"
                  />
                  <path
                    d="M18.375 9.89062V14.1094H24V9.89062H18.375ZM22.5938 12.7031H19.7812V11.2969H22.5938V12.7031Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1561_1302">
                    <rect width="24" height="24" rx="4" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <h3 className="font-bold">Total Area</h3>
                <p>891 sqft</p>
              </div>
            </div>
            <div className="flex gap-4">
              <svg
                className="bg-[#EE6611]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_1561_1302)">
                  <path
                    d="M9.89062 0V5.625H14.1094V0H9.89062ZM12.7031 4.21875H11.2969V1.40625H12.7031V4.21875Z"
                    fill="white"
                  />
                  <path
                    d="M5.00656 2.02319L2.02344 5.00632L6.00092 8.9838L8.98405 6.00068L5.00656 2.02319ZM4.01216 5.00632L5.00656 4.01196L6.99533 6.00068L6.00092 6.99508L4.01216 5.00632Z"
                    fill="white"
                  />
                  <path
                    d="M0 9.89062V14.1094H5.625V9.89062H0ZM4.21875 12.7031H1.40625V11.2969H4.21875V12.7031Z"
                    fill="white"
                  />
                  <path
                    d="M6.00092 15.0164L2.02344 18.9938L5.00656 21.977L8.98405 17.9995L6.00092 15.0164ZM4.01216 18.9938L6.00092 17.0051L6.99533 17.9995L5.00656 19.9882L4.01216 18.9938Z"
                    fill="white"
                  />
                  <path
                    d="M9.89062 18.375V24H14.1094V18.375H9.89062ZM12.7031 22.5938H11.2969V19.7812H12.7031V22.5938Z"
                    fill="white"
                  />
                  <path
                    d="M17.9997 15.0161L15.0166 17.9992L18.9941 21.9767L21.9772 18.9936L17.9997 15.0161ZM18.994 19.988L17.0053 17.9993L17.9997 17.0049L19.9884 18.9936L18.994 19.988Z"
                    fill="white"
                  />
                  <path
                    d="M18.375 9.89062V14.1094H24V9.89062H18.375ZM22.5938 12.7031H19.7812V11.2969H22.5938V12.7031Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1561_1302">
                    <rect width="24" height="24" rx="4" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <h3 className="font-bold">Total Area</h3>
                <p>891 sqft</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card-end */}
      {/* card-1 */}
      <div className="h-[232px] flex w-[800px] bg-white shadow-lg">
        <div className="">
          <figure>
            <img
              className="h-[184px] mx-6  mt-6 w-[152px]"
              src="https://i.ibb.co/6n6rDWZ/Banner-Image-1.png"
              alt="Movie"
            />
          </figure>
        </div>
        <div className="">
          <div className="flex justify-evenly gap-1 pr-6 mt-6">
            <p className="text-xl">
              3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi
            </p>
            <p className="text-2xl font-bold">$300000</p>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2 text-center justify-evenly">
              <img
                className="w-6 h-6"
                src="https://i.ibb.co/zNSH97p/fi-bs-marker.png"
                alt=""
              />
              <p className="text-xl">Meadowshire Park, Greenfield, USA</p>
            </div>
            <div className="pr-6">
              <button className="btn btn-outline pr-6">Bid Propert</button>
            </div>
          </div>
          <div className="flex gap-3">
            <h3 className="font-bold">Property details</h3>
            <svg
              className="bg-[#E3E3E3] w-2 rounded"
              xmlns="http://www.w3.org/2000/svg"
              width="429"
              height="2"
              viewBox="0 0 429 2"
              fill="none"
            >
              <path d="M1 1H428" className="bg-[#E3E3E3] w-2 rounded" />
            </svg>
          </div>
          <div className="flex justify-between pr-6 my-4">
            <div className="flex gap-4">
              <svg
                className="bg-[#EE6611]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_1561_1302)">
                  <path
                    d="M9.89062 0V5.625H14.1094V0H9.89062ZM12.7031 4.21875H11.2969V1.40625H12.7031V4.21875Z"
                    fill="white"
                  />
                  <path
                    d="M5.00656 2.02319L2.02344 5.00632L6.00092 8.9838L8.98405 6.00068L5.00656 2.02319ZM4.01216 5.00632L5.00656 4.01196L6.99533 6.00068L6.00092 6.99508L4.01216 5.00632Z"
                    fill="white"
                  />
                  <path
                    d="M0 9.89062V14.1094H5.625V9.89062H0ZM4.21875 12.7031H1.40625V11.2969H4.21875V12.7031Z"
                    fill="white"
                  />
                  <path
                    d="M6.00092 15.0164L2.02344 18.9938L5.00656 21.977L8.98405 17.9995L6.00092 15.0164ZM4.01216 18.9938L6.00092 17.0051L6.99533 17.9995L5.00656 19.9882L4.01216 18.9938Z"
                    fill="white"
                  />
                  <path
                    d="M9.89062 18.375V24H14.1094V18.375H9.89062ZM12.7031 22.5938H11.2969V19.7812H12.7031V22.5938Z"
                    fill="white"
                  />
                  <path
                    d="M17.9997 15.0161L15.0166 17.9992L18.9941 21.9767L21.9772 18.9936L17.9997 15.0161ZM18.994 19.988L17.0053 17.9993L17.9997 17.0049L19.9884 18.9936L18.994 19.988Z"
                    fill="white"
                  />
                  <path
                    d="M18.375 9.89062V14.1094H24V9.89062H18.375ZM22.5938 12.7031H19.7812V11.2969H22.5938V12.7031Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1561_1302">
                    <rect width="24" height="24" rx="4" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <h3 className="font-bold">Total Area</h3>
                <p>891 sqft</p>
              </div>
            </div>
            <div className="flex gap-4">
              <svg
                className="bg-[#EE6611]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_1561_1302)">
                  <path
                    d="M9.89062 0V5.625H14.1094V0H9.89062ZM12.7031 4.21875H11.2969V1.40625H12.7031V4.21875Z"
                    fill="white"
                  />
                  <path
                    d="M5.00656 2.02319L2.02344 5.00632L6.00092 8.9838L8.98405 6.00068L5.00656 2.02319ZM4.01216 5.00632L5.00656 4.01196L6.99533 6.00068L6.00092 6.99508L4.01216 5.00632Z"
                    fill="white"
                  />
                  <path
                    d="M0 9.89062V14.1094H5.625V9.89062H0ZM4.21875 12.7031H1.40625V11.2969H4.21875V12.7031Z"
                    fill="white"
                  />
                  <path
                    d="M6.00092 15.0164L2.02344 18.9938L5.00656 21.977L8.98405 17.9995L6.00092 15.0164ZM4.01216 18.9938L6.00092 17.0051L6.99533 17.9995L5.00656 19.9882L4.01216 18.9938Z"
                    fill="white"
                  />
                  <path
                    d="M9.89062 18.375V24H14.1094V18.375H9.89062ZM12.7031 22.5938H11.2969V19.7812H12.7031V22.5938Z"
                    fill="white"
                  />
                  <path
                    d="M17.9997 15.0161L15.0166 17.9992L18.9941 21.9767L21.9772 18.9936L17.9997 15.0161ZM18.994 19.988L17.0053 17.9993L17.9997 17.0049L19.9884 18.9936L18.994 19.988Z"
                    fill="white"
                  />
                  <path
                    d="M18.375 9.89062V14.1094H24V9.89062H18.375ZM22.5938 12.7031H19.7812V11.2969H22.5938V12.7031Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1561_1302">
                    <rect width="24" height="24" rx="4" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <h3 className="font-bold">Total Area</h3>
                <p>891 sqft</p>
              </div>
            </div>
            <div className="flex gap-4">
              <svg
                className="bg-[#EE6611]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_1561_1302)">
                  <path
                    d="M9.89062 0V5.625H14.1094V0H9.89062ZM12.7031 4.21875H11.2969V1.40625H12.7031V4.21875Z"
                    fill="white"
                  />
                  <path
                    d="M5.00656 2.02319L2.02344 5.00632L6.00092 8.9838L8.98405 6.00068L5.00656 2.02319ZM4.01216 5.00632L5.00656 4.01196L6.99533 6.00068L6.00092 6.99508L4.01216 5.00632Z"
                    fill="white"
                  />
                  <path
                    d="M0 9.89062V14.1094H5.625V9.89062H0ZM4.21875 12.7031H1.40625V11.2969H4.21875V12.7031Z"
                    fill="white"
                  />
                  <path
                    d="M6.00092 15.0164L2.02344 18.9938L5.00656 21.977L8.98405 17.9995L6.00092 15.0164ZM4.01216 18.9938L6.00092 17.0051L6.99533 17.9995L5.00656 19.9882L4.01216 18.9938Z"
                    fill="white"
                  />
                  <path
                    d="M9.89062 18.375V24H14.1094V18.375H9.89062ZM12.7031 22.5938H11.2969V19.7812H12.7031V22.5938Z"
                    fill="white"
                  />
                  <path
                    d="M17.9997 15.0161L15.0166 17.9992L18.9941 21.9767L21.9772 18.9936L17.9997 15.0161ZM18.994 19.988L17.0053 17.9993L17.9997 17.0049L19.9884 18.9936L18.994 19.988Z"
                    fill="white"
                  />
                  <path
                    d="M18.375 9.89062V14.1094H24V9.89062H18.375ZM22.5938 12.7031H19.7812V11.2969H22.5938V12.7031Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1561_1302">
                    <rect width="24" height="24" rx="4" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <h3 className="font-bold">Total Area</h3>
                <p>891 sqft</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card-end */}
    </div>
  );
};

export default Card;
