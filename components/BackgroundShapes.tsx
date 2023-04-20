"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const BackgroundShapes = () => (
	<div>
		<motion.div
			whileHover={{ scale: 1.2 }}
			animate={{ rotate: 360 }}
			transition={{
				duration: 3,
				repeat: Infinity,
				delay: 1,
				repeatDelay: 0.5,
			}}
			className="absolute left-[10%] md:top-[300px] top-[550px] md:block"
		>
			<Image alt="" width={150} height={100} src="/shape_one.svg" />
		</motion.div>

		<motion.div
			whileHover={{ scale: 1.2 }}
			style={{ y: -90 }}
			animate={{ y: 70, rotate: 360 }}
			transition={{
				delay: 1,
				duration: 2,
				ease: [0.075, 0.82, 0.165, 1],
				repeat: Infinity,
				repeatType: "reverse",
			}}
			className="absolute right-0 top-[50px]"
		>
			<Image alt="" width={100} height={100} src="/shape_two.svg" />
		</motion.div>

		<motion.div
			whileHover={{ scale: 1.2 }}
			initial={{ x: -200 }}
			animate={{ x: 200 }}
			transition={{
				type: "spring",
				repeat: Infinity,
				repeatType: "mirror",
				repeatDelay: 0.1,
			}}
			className="absolute right-[40%] top-[150px] hidden md:block"
		>
			<Image alt="" width={200} height={200} src="/shape_three.svg" />
		</motion.div>

		{/* <motion.div className='absolute -left-[30%] md:-left-[39px] top-[60px] md:top-[40px]'>
      <Image
        alt=''
        width={170}
        height={170}
        src='/shape_four.svg'
      />
    </motion.div> */}

		{/* <motion.div className='absolute right-[8%] top-[180px] hidden md:block'>
      <Image
        alt=''
        width={70}
        height={110}
        src='/shape_five.svg'
      />
    </motion.div> */}

		{/* <motion.div className='absolute right-[45%] top-[70px] hidden md:block'>
      <Image alt='' width={32} height={17} src='/shape_six.svg' />
    </motion.div> */}
	</div>
);

export default BackgroundShapes;
