import React,{useEffect} from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FadeInFromBottom({children,delay}) 
{
    const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);
    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.3 }}
            variants={{
              show: {
                x: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  duration: 0.5,
                  delay: delay,
                },
              },
                hidden: { x:50,opacity: 0 },
            }}
        whileInView="visible"
        viewport={{ once: true }}

          
        >
          {children}
        </motion.div>
      )
}