import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className=" ">
        <img
          src="/public/foto-maranatha.jpg"
          className="absolute justify-end object-cover w-full h-full mix-blend-overlay "
          alt=""
        />

        {/* <motion.div
          className=" flex   opacity-70  aspect-[1155/678] absolute justify-center lg:w-96 lg:h-96   mix-blend-overlay "
          animate={{
            scale: [0.5, 2, 0.5],

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
          <img src="/public/logo-maranatha.png" />{" "}
        </motion.div> */}
        <div className="relative bg-opacity-80  h-screen  md:pt-2 bg-gradient-to-tr from-[#74080880] from-40% via-[#9d0c0c5d] to-[#770e0e27]">
          <div className="px-4  pt-28  mx-auto sm:px-0 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
            <div className="flex flex-col items-center justify-between w-full lg:flex-row">
              <div className="mb-16  lg:mb-0 lg:max-w-lg lg:pr-5">
                <div className="max-w-xl mb-6">
                  <div>
                    <motion.div
                      className="mt-10 md:mt-0 xl:mt-0"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 1 }}
                      transition={{ duration: 1 }}
                      variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-white from-30% via-red-100 via-90% to-white to-100%  font-extrabold  text-3xl sx sx:text-2xl md:text-3xl xl:text-4xl ">
                        Iglesia Bautista Misionera{" "}
                        <br className="hidden md:block" />
                      </span>
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-white from-30% via-red-100 via-90% to-white to-100% font-extrabold  text-6xl sx sx:text-4xl md:text-7xl xl:text-8xl ">
                        Maranatha
                        <br className="hidden md:block" />
                      </span>
                    </motion.div>
                  </div>

                  <p className="inline-block  py-px p-4 mt-4  text-xs font-semibold tracking-wider uppercase bg-red-950 text-white rounded-full">
                    2 Timoteo 4:2
                  </p>
                  <p className="text-white  md:text-base">
                    “Que prediques la palabra”
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <a
                    href="/"
                    className="rounded-3xl bg-white px-10 py-2.5 text-sm font-semibold text-red-950 shadow-lg hover:bg-red-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
                  >
                    Contactanos
                  </a>

                  <a
                    href="/"
                    className="rounded-3xl border-gray-100 border-2 px-10 py-2.5 text-sm font-semibold text-white shadow-lg hover:border-red-950 hover:bg-red-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  >
                    Ofrendas
                  </a>
                </div>
              </div>
              <motion.div className="flex items-center justify-center lg:w-96">
                <div className=" -ml-16 lg:-ml-32"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
