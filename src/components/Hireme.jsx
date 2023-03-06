import { content } from "../Content";

const Hireme = () => {
  const { Hireme } = content;

  return (
    <section className="bg-primaryLinear">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse ">
          <img
            src={Hireme.image1}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />
          <img
            src={Hireme.image2}
            data-aos="fade-up"
            alt="..."
            className="max-w-sm md:hidden"
          />
          <div
            data-aos="fade-left"
            className="border-2 border-white max-w-sm
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-7 text-white">{Hireme.para}
              <a href={Hireme.link} className="text-blue-400 font-bold"> 43°38'15.5"N 79°25'16.5"W</a> (Diklik aja gapapa terus dizoom tempatnya).
            </p>
            {/* <br /> */}
            {/* <button className="btn bg-dark_primary text-white">
              {Hireme.btnText}
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
