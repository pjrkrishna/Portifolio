import React from 'react'
import { projectExperience, WhatDoIHelp } from '../../utils/data'
import css from './Experties.module.scss'
import {motion} from 'framer-motion'
import {fadeIn, staggerContainer, textVariant} from '../../utils/motion.js'
const Experties = () => {
    // const formatTextWithBold = (text, targetWord) => {
    //     const parts = text.split(targetWord);
    //     return parts.map((part, index) => (
    //       <React.Fragment key={index}>
    //         {part}
    //         {index !== parts.length - 1 && <strong>{targetWord}</strong>}
    //       </React.Fragment>
    //     ));
    //   };
    const formatTextWithBold = (text, targetWords) => {
        const parts = text.split(' ');
        return parts.map((part, index) => {
          if (targetWords.includes(part)) {
            return <strong key={index}>{part} </strong>;
          } else {
            return <React.Fragment key={index}>{part} </React.Fragment>;
          }
        });
      };
  return (
    <section className={css.wrapper}>
        <a className="anchor" id="experties"></a>
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        // viewport={{ once: false, amount: 0.25 }}
        className={`paddings yPaddings innerWidth flexCenter ${css.container}`}>


            {/* left side */}
            <div className={css.leftSide}>
                {
                    projectExperience.map((exp, i)=> {
                        return <motion.div variants = {fadeIn("right", "tween", (i+1)*0.2, 1)} className={css.exp} key={i}>
                            <div style={{background: exp.bg}} className="flexCenter">
                                <exp.icon size={25} color="white"/>
                            </div>
                            <div>
                                <span>{exp.name}</span>
                                <span className='secondaryText'>{exp.projects}</span>
                            </div>
                        </motion.div>
                    })
                }
            </div>


            {/* right */}
            <motion.div
            variants={textVariant(0.5)}
            className={css.rightSide}>

                <span className='primaryText'>What do I help? </span>
                {WhatDoIHelp.map((paragraph, i)=> <span className='secondaryText' key={i}>{formatTextWithBold(paragraph, ['Project', 'Management:', 'Technical','Expertise:','Health', 'Care'])}</span>)}


                <div className={`flexCenter ${css.stats}`}>
                    <div className={`flexCenter ${css.stat}`}>
                        <span className='primaryText'>8</span>
                        <span className='secondaryText'>HIS Projects</span>
                    </div>
                    <div className={`flexCenter ${css.stat}`}>
                        <span className='primaryText'>21+</span>
                        <span className='secondaryText'>No of Hospitals</span>
                    </div>
                    <div className={`flexCenter ${css.stat}`}>
                        <span className='primaryText'>30+</span>
                        <span className='secondaryText'>Other Projects</span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Experties