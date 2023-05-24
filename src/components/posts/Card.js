import React from "react";
import style from "../../styles/style.module.css";
import Cards from "../apis/card";
const Card = () => {
  const content = Cards;

  // const cards = () => {
  //   return content.map((item) => {
  //     return (
  //         <div className={`${style.card}`}>
  //           <button type="button" className={`${style.dismiss}`}>
  //             ×
  //           </button>
  //           <div className={`${style.header}`}>
  //             <div className={`${style.image}`}>
  //               <svg
  //                 xmlns={`${item.src}`}
  //                 fill="none"
  //                 viewBox="0 0 24 24"
  //               >
  //                 <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
  //                 <g
  //                   stroke-linejoin="round"
  //                   stroke-linecap="round"
  //                   id="SVGRepo_tracerCarrier"
  //                 ></g>
  //                 <g id="SVGRepo_iconCarrier">
  //                   {" "}
  //                   <path
  //                     stroke-linejoin="round"
  //                     stroke-linecap="round"
  //                     stroke-width="1.5"
  //                     stroke="#000000"
  //                     d="M20 7L9.00004 18L3.99994 13"
  //                   ></path>{" "}
  //                 </g>
  //               </svg>
  //             </div>
  //             <div className={`${style.content}`}>
  //               <span className={`${style.title}`}>{`${item.title}`}</span>
  //               <p className={`${style.message}`}>
  //               {`${item.message}`}
  //               </p>
  //             </div>
  //             <div className={`${style.actions}`}>
  //               <button type="button" className={`${style.history}`}>
  //                 History
  //               </button>
  //               <button type="button" className={`${style.track}`}>
  //                 Track my package
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //     );
  //   });
  // };
  return <>
  <div style={{padding: "5% 5%", alignItems: "center"}}>
  <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"flex-start", gap: "20px"}}>
    {content.map((item) => {
      return (
          <div className={`${style.card}`}>
            <button type="button" className={`${style.dismiss}`}>
              ×
            </button>
            <div className={`${style.header}`}>
              <div className={`${style.image}`}>
                <svg
                  xmlns={`${item.src}`}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                  <g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    id="SVGRepo_tracerCarrier"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      stroke-width="1.5"
                      stroke="#000000"
                      d="M20 7L9.00004 18L3.99994 13"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className={`${style.content}`}>
                <span className={`${style.title}`}>{`${item.title}`}</span>
                <p className={`${style.message}`}>
                {`${item.message}`}
                </p>
              </div>
              <div className={`${style.actions}`}>
                <button type="button" className={`${style.history}`}>
                  History
                </button>
                <button type="button" className={`${style.track}`}>
                  Track my package
                </button>
              </div>
            </div>
          </div>
      );
    })}
  </div>
  </div>
  </>;
};

export default Card;
