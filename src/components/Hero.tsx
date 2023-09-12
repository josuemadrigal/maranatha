// import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative object-cover h-full lg:h-screen ">
      <img
        src="/public/foto-maranatha.jpg"
        className="absolute justify-end object-cover w-full h-full "
        alt=""
      />

      {/* <motion.div
        className="bg-white  flex  opacity-70  aspect-[1155/678] absolute justify-center  lg:w-96 lg:h-96   mix-blend-overlay "
        animate={{
          scale: [0.5, 1, 2, 4, 2, 1, 0.5],
          rotate: [10, 20, 180, 180, 20, 10, 0],
          borderRadius: ["30%", "40%", "50%", "60", "50%", "40%", "30%"],
        }}
        transition={{
          duration: 5,
          ease: "anticipate",
          times: [0.2, 0.8, 1, 0.8, 0.4],
          repeat: Infinity,
          repeatDelay: 0,
        }}
      >
        {" "}
      </motion.div> */}
      <div className="relative  bg-opacity-80 w-screen h-screen md:pt-2 bg-gradient-to-tr from-[#480b0bcc] from-30% via-[#9d0c0c37] to-[#510c0c] ">
        <div className="px-4  mx-auto sm:px-0 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
          <div className="flex flex-row  items-center h-screen justify-between w-full ">
            <div className="  lg:mb-0 lg:w-1/2 lg:pr-5">
              <div className="max-w-xl mb-6 ">
                <div>
                  <p className="inline-block  py-px p-4 lg:mb-4  text-sx font-semibold tracking-wider uppercase bg-red-900 text-white rounded-full">
                    Iglesia Bautista Misionera
                  </p>
                  <h1 className="font-extrabold  uppercase text-6xl sx:text-2xl md:text-6xl xl:text-7xl   xl:mt-0">
                    <span className="inline-block bg-clip-text text-transparent  bg-gradient-to-r from-gray-200 from-30% via-white via-90% to-gray-100 to-100%">
                      Maranatha
                    </span>
                  </h1>
                </div>
                {/* <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
              Eduard
              <br className="hidden md:block" />{" "}
              <span className="inline-block text-deep-purple-accent-400">
                Espiritusanto
              </span>
            </h2> */}
                <p className="text-white  md:text-base">
                  "Juntos, iluminando el camino hacia la fe y el amor
                  inquebrantable."
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <a
                  href="/"
                  className="rounded-3xl bg-white px-10 py-2.5 text-sm font-semibold text-red-900 shadow-sm hover:bg-red-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Ministerios
                </a>

                <a
                  href="/"
                  className="rounded-3xl border-gray-100 border-2 px-10 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-red-800 hover:bg-red-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Horarios
                </a>
              </div>
            </div>
            {/* <motion.div className="flex items-center justify-center lg:w-1/2">
              <div className=" -ml-16 lg:-ml-32">
                <img
                  className="object-cover  inset-0 "
                  src="/foto-eduard.png"
                  alt=""
                />
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
