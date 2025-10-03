import svgPaths from "./svg-z2q90l25zz";
import imgAdobeStock3156692391 from "figma:asset/c263066b8b2ec9916c17568ec2cd71a91db40780.png";
import imgNoise1 from "figma:asset/cc7cf1138f571815c54494adc61e37aaff73cdb0.png";

function Button() {
  return (
    <div className="bg-[#333333] box-border content-stretch flex gap-[10px] items-start justify-end px-[30px] py-[20px] relative rounded-[30px] shrink-0" data-name="Button">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[#eeeeee] text-[20px] text-nowrap whitespace-pre">Menu</p>
    </div>
  );
}

function Subheads() {
  return (
    <div className="content-stretch flex font-['Inter:Semi_Bold',_sans-serif] font-semibold items-start justify-between leading-none not-italic relative shrink-0 text-[#333333] text-[32px] text-nowrap tracking-[-0.64px] w-full whitespace-pre" data-name="Subheads">
      <p className="relative shrink-0">(Ottawa, Canada)</p>
      <p className="relative shrink-0">Scroll Down</p>
    </div>
  );
}

function HeroHeader() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[1648px]" data-name="Hero Header">
      <Button />
      <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold h-[392px] leading-none not-italic relative shrink-0 text-[#333333] text-[192px] tracking-[-3.84px] w-full">
        <p className="mb-0">Roslyn Kirby</p>
        <p>Graphic Designer</p>
      </div>
      <Subheads />
    </div>
  );
}

function PictureContainer() {
  return (
    <div className="h-[1173px] relative shrink-0 w-full" data-name="Picture Container">
      <div className="absolute h-[1173px] left-0 right-0 top-0" data-name="AdobeStock_315669239 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-0.74%] max-w-none top-0 w-[101.48%]" src={imgAdobeStock3156692391} />
        </div>
      </div>
      <div className="absolute h-[1173px] left-0 mix-blend-overlay opacity-70 right-0 top-0" data-name="Noise 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNoise1} />
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="badge">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="badge">
          <circle cx="25" cy="25" fill="var(--fill-0, #333333)" id="Ellipse 1" r="25" />
          <g id="ri:behance-fill">
            <path d={svgPaths.p127d5780} fill="var(--fill-0, #EEEEEE)" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Badge1() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="badge">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="badge">
          <circle cx="25" cy="25" fill="var(--fill-0, #333333)" id="Ellipse 1" r="25" />
          <g id="ri:instagram-line">
            <path d={svgPaths.p31449580} fill="var(--fill-0, #EEEEEE)" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Badge2() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="badge">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="badge">
          <circle cx="25" cy="25" fill="var(--fill-0, #333333)" id="Ellipse 1" r="25" />
          <g id="ri:dribbble-line">
            <path d={svgPaths.p29b7d100} fill="var(--fill-0, #EEEEEE)" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Badge3() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="badge">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
        <g id="badge">
          <circle cx="25" cy="25" fill="var(--fill-0, #333333)" id="Ellipse 1" r="25" />
          <g id="ri:star-s-fill">
            <path d={svgPaths.p343ecf00} fill="var(--fill-0, #EEEEEE)" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Social() {
  return (
    <div className="content-stretch flex gap-[34px] items-start relative shrink-0" data-name="social">
      <Badge />
      <Badge1 />
      <Badge2 />
      <Badge3 />
    </div>
  );
}

function AboutAside() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0 w-[530px]" data-name="About-aside">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[#333333] text-[32px] text-nowrap tracking-[-0.64px] whitespace-pre">(About Me)</p>
      <Social />
    </div>
  );
}

function AboutSection() {
  return (
    <div className="content-stretch flex gap-[80px] items-center relative shrink-0 w-[1648px]" data-name="About Section">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[1.1] not-italic relative shrink-0 text-[#333333] text-[96px] tracking-[-4px] w-[953px]">{`Lorem ipsum dolor sit amet consectetur. Montes netus faucibus porttitor `}</p>
      <div className="flex flex-row items-center self-stretch">
        <div className="flex h-full items-center justify-center relative shrink-0" style={{ "--transform-inner-width": "388", "--transform-inner-height": "422.375", width: "calc(1px * ((var(--transform-inner-height) * 0.9998824000358582) + (var(--transform-inner-width) * 0.015335619449615479)))" } as React.CSSProperties}>
          <div className="flex-none h-full rotate-[89.121deg]">
            <div className="h-full relative w-[388px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 388 2">
                  <line id="Line 2" stroke="var(--stroke-0, #333333)" strokeWidth="2" x2="388" y1="1" y2="1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <AboutAside />
      </div>
    </div>
  );
}

export default function IndexPortfolio() {
  return (
    <div className="bg-[#f5f3ef] box-border content-stretch flex flex-col gap-[50px] items-center px-0 py-[80px] relative size-full" data-name="INDEX - PORTFOLIO">
      <HeroHeader />
      <PictureContainer />
      <div className="h-0 relative shrink-0 w-[1649px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1649 2">
            <line id="Line 1" stroke="var(--stroke-0, #333333)" strokeWidth="2" x2="1649" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <AboutSection />
      <div className="h-0 relative shrink-0 w-[1652px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1652 2">
            <line id="Line 2" stroke="var(--stroke-0, #333333)" strokeWidth="2" x2="1652" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}