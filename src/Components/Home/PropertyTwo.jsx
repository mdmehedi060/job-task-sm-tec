const PropertyTwo = () => {
  return (
    <div>
      <div className="my-10">
        <div className="hero w-[1440px] h-[600px]">
          <div className="hero-content flex-col lg:flex-row">
            <div className="w-[592px] mt-0">
              <p className="text-[#F06711] text-2xl">Property buying</p>
              <h1 className="text-5xl font-bold my-3">
                Efficient and Transparent Home Buying Solutions
              </h1>
              <p className="py-6 text-2xl my-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </p>
              <div>
                <button className="bg-[#ECF5FF] px-4 py-6  text-2xl text-[#0059B1] flex gap-2 ">
                  {" "}
                  <img
                    className="h-8 w-8"
                    src="https://i.ibb.co/Wsck5hW/search1.png"
                    alt
                  />{" "}
                  Find Property
                </button>
              </div>
            </div>
            <div className="w-[592px] h-[504px]">
              <img
                src="https://i.ibb.co/tKJRvbp/img.png"
                className="w-[458px] h-[400px] absulate"
              />
              <img
                src="https://i.ibb.co/SxB7mTQ/Banner-Image.png"
                className="w-[452px] h-[240px] relative ml-32 -mt-36"
              />
              <svg
                className="relative ml-[400px] -mt-72"
                xmlns="http://www.w3.org/2000/svg"
                width={104}
                height={104}
                viewBox="0 0 104 104"
                fill="none"
              >
                <g filter="url(#filter0_d_708_7077)">
                  <circle cx={52} cy={40} r={36} fill="#0059B1" />
                  <path
                    d="M69.2803 39.9997L43.3603 54.9646L43.3603 25.0348L69.2803 39.9997Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_708_7077"
                    x={0}
                    y={0}
                    width={104}
                    height={104}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy={12} />
                    <feGaussianBlur stdDeviation={8} />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_708_7077"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_708_7077"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyTwo;
