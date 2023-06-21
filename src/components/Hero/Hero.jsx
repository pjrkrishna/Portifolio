import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiGithub, SiFirebase } from "react-icons/si";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            Hey There,
            <br />
            I'm Krishna Potarlanka.
          </motion.span>
          <motion.span className="secondaryText"variants={fadeIn("left", "tween", 0.4, 1)}>
            Health Care IT{" "}
            <br />
            Techno Functional Consultant{" "}
            <br />
            HIS/EMR Implementation Specialitist{" "}
            <br />
            IT Infrastructure Management{" "}
            {/* <br />
            HIS/EMR Implementations{" "}
            <br />
            IT Infra Structure Management{" "}
            <br />
            Project Management{" "}
            <br />
            MS SQL, Oracle, PostgreSQL{" "}
            <br />
            Database Desinging{" "}
            <br />
            Fullstack Developer{" "} */}
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img style={{borderRadius:'50%', width: 400, height: 400}} variants={slideIn("up", "tween", 0.5, 1.3)} src="./pofile.png" alt="" />
        </motion.div>
           <a className={css.email} href="mailto:pjrkrishna@gmail.com">
           <MdEmail size={18}/> pjrkrishna@gmail.com
        </a>
        <a className={css.email1} href="https://www.linkedin.com/in/krishna-potarlanka-6115264b/">
           <BsLinkedin size={18} /> https://www.linkedin.com/in/krishna-potarlanka-6115264b/
        </a>
        <a className={css.email2} href="mailto:pjrkrishna@gmail.com">
           <SiGithub size={18}/> https://github.com/pjrkrishna
        </a>
        <a className={css.email3} href="https://krishna-portfolio-bd38e.web.app/">
           <SiFirebase size={18}/> https://krishna-portfolio-bd38e.web.app
        </a>
        
   
        

        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="primaryText">16+</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
            <img src="./mcitp1.png" alt=""/>
            <span>Master of Computer Applications</span>
            <span>Microsoft Certified IT Professional</span>
            <span>Priciple Architect</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
