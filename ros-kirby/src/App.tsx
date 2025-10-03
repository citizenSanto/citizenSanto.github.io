import IndexPortfolio from "./imports/IndexPortfolio";
import { CaseStudyCarousel } from "./components/CaseStudyCarousel";
import svgPaths from "./imports/svg-z2q90l25zz";
import imgAdobeStock3156692391 from "figma:asset/c263066b8b2ec9916c17568ec2cd71a91db40780.png";
import imgNoise1 from "figma:asset/cc7cf1138f571815c54494adc61e37aaff73cdb0.png";

export default function App() {
  return (
    <div className="bg-[#f5f3ef] box-border content-stretch flex flex-col gap-[30px] md:gap-[50px] items-center px-[20px] md:px-[40px] lg:px-[60px] py-[40px] md:py-[60px] lg:py-[80px] relative min-h-screen w-full">
      {/* Hero Section */}
      <div className="content-stretch flex flex-col items-end relative shrink-0 w-full max-w-[1648px]">
        <div className="bg-[#333333] box-border content-stretch flex gap-[10px] items-start justify-end px-[20px] md:px-[30px] py-[15px] md:py-[20px] relative rounded-[20px] md:rounded-[30px] shrink-0">
          <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[#eeeeee] text-[16px] md:text-[20px] text-nowrap whitespace-pre">
            Menu
          </p>
        </div>
        <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[#333333] text-[48px] sm:text-[72px] md:text-[120px] lg:text-[160px] xl:text-[192px] tracking-[-0.02em] w-full py-[20px] md:py-[30px] lg:py-[40px]">
          <p className="mb-0">Roslyn Kirby</p>
          <p>Graphic Designer</p>
        </div>
        <div className="content-stretch flex flex-col sm:flex-row font-['Inter:Semi_Bold',_sans-serif] font-semibold items-start sm:justify-between gap-[10px] sm:gap-0 leading-none not-italic relative shrink-0 text-[#333333] text-[20px] md:text-[28px] lg:text-[32px] tracking-[-0.64px] w-full whitespace-pre">
          <p className="relative shrink-0">(Ottawa, Canada)</p>
          <p className="relative shrink-0 hidden sm:block">Scroll Down</p>
        </div>
      </div>

      {/* Picture Container */}
      <div className="relative shrink-0 w-full max-w-[1648px] aspect-[1648/1173]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute inset-0 size-full object-cover"
              src={imgAdobeStock3156692391}
            />
          </div>
        </div>
        <div className="absolute inset-0 mix-blend-overlay opacity-70">
          <img
            alt=""
            className="absolute inset-0 size-full object-cover pointer-events-none"
            src={imgNoise1}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="h-0 relative shrink-0 w-full max-w-[1649px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1649 2"
          >
            <line
              stroke="var(--stroke-0, #333333)"
              strokeWidth="2"
              x2="1649"
              y1="1"
              y2="1"
            />
          </svg>
        </div>
      </div>

      {/* About Section */}
      <div className="content-stretch flex flex-col lg:flex-row gap-[40px] lg:gap-[80px] items-start lg:items-center relative shrink-0 w-full max-w-[1648px]">
        <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.1] not-italic relative text-[#333333] text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] xl:text-[96px] tracking-[-0.04em] w-full lg:w-auto lg:flex-1">
          Lorem ipsum dolor sit amet consectetur. Montes netus faucibus
          porttitor{" "}
        </p>
        <div className="hidden lg:flex flex-row items-center self-stretch">
          <div className="w-[2px] h-full bg-[#333333] shrink-0"></div>
        </div>
        <div className="flex flex-row items-stretch w-full lg:w-auto self-stretch">
          <div className="content-stretch flex flex-col items-start justify-between gap-[30px] relative shrink-0 w-full lg:w-[530px]">
            <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[#333333] text-[20px] md:text-[28px] lg:text-[32px] text-nowrap tracking-[-0.64px] whitespace-pre">
              (About Me)
            </p>
            <div className="content-stretch flex gap-[20px] md:gap-[34px] items-start relative shrink-0">
              {/* Badge - Behance */}
              <div className="relative shrink-0 size-[40px] md:size-[50px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 50 50"
                >
                  <g>
                    <circle cx="25" cy="25" fill="#333333" r="25" />
                    <g>
                      <path d={svgPaths.p127d5780} fill="#EEEEEE" />
                    </g>
                  </g>
                </svg>
              </div>
              {/* Badge - Instagram */}
              <div className="relative shrink-0 size-[40px] md:size-[50px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 50 50"
                >
                  <g>
                    <circle cx="25" cy="25" fill="#333333" r="25" />
                    <g>
                      <path d={svgPaths.p31449580} fill="#EEEEEE" />
                    </g>
                  </g>
                </svg>
              </div>
              {/* Badge - Dribbble */}
              <div className="relative shrink-0 size-[40px] md:size-[50px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 50 50"
                >
                  <g>
                    <circle cx="25" cy="25" fill="#333333" r="25" />
                    <g>
                      <path d={svgPaths.p29b7d100} fill="#EEEEEE" />
                    </g>
                  </g>
                </svg>
              </div>
              {/* Badge - Star */}
              <div className="relative shrink-0 size-[40px] md:size-[50px]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 50 50"
                >
                  <g>
                    <circle cx="25" cy="25" fill="#333333" r="25" />
                    <g>
                      <path d={svgPaths.p343ecf00} fill="#EEEEEE" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-0 relative shrink-0 w-full max-w-[1652px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1652 2"
          >
            <line
              stroke="var(--stroke-0, #333333)"
              strokeWidth="2"
              x2="1652"
              y1="1"
              y2="1"
            />
          </svg>
        </div>
      </div>

      {/* Case Study Carousel */}
      <CaseStudyCarousel />

      {/* Bottom Divider */}
      <div className="h-0 relative shrink-0 w-full max-w-[1652px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1652 2"
          >
            <line
              stroke="var(--stroke-0, #333333)"
              strokeWidth="2"
              x2="1652"
              y1="1"
              y2="1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
