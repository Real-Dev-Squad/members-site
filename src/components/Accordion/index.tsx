import React, { useState } from "react";
import {AiOutlineCaretDown} from 'react-icons/ai'

import styles from "./accordion.module.css";

export default function Accordion(props: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => setIsExpanded((prev) => !prev);

  return (
    <div 
    style={{
      padding:'15px 0',
      borderBottom:'2px solid black'
    }} 
    className={`pl-5  ${styles.panelContainer}`}>
      <h2 className="text-4xl ">
        <button
          onClick={toggleAccordion}
          id={`accordion-header-${props.id}`}
          aria-controls={`aria-panel-${props.id}`}
          aria-expanded={isExpanded}
          className={`flex flex-row justify-between  items-center ${styles.accordionBtn}`}
        >
           <span>
        {props.title}
        </span>
          <AiOutlineCaretDown className={isExpanded ? styles.toggleOpenIcon : styles.toggleCloseIcon}/>

        </button>
      </h2>
      <div
        aria-expanded={isExpanded}
        className={styles.panel}
        id={`accordion-panel-${props.id}`}
        aria-labelledby={`accordion-header-${props.id}`}
      >
        {props.accordionData}
      </div>
    </div>
  );
}


type Props = {
  title:string,
  accordionData:React.ReactNode,
  id:number
}