import React, { useEffect } from "react";
import { useState } from "react";
import db from "../db";


const CardContainer = ({fetchData}) => {


  // const [id, setId] = useState('')
 
  // useEffect(() => {
  //   const clickHandler = (id) => {
      
  //     setId(id) 
  //   }
  // }, [id])

  // console.log(id,'id')

  const clickHandler = ( modalData) => {
    // console.log(modalData, 'modalData')
    fetchData(modalData)

  }

    return (
    <>
      <li className='cards__item'>
        {db.map((data, i)=>{
          return(

            <div key={i} className='cards__item__link'>
          <div className='cards__item__pic-wrap' >
            <img
              className='cards__item__img'
              alt='image'
              src={data?.thumbnail?.small}
              onClick={()=>clickHandler(data?.id)}
            />
          

            <h2 className="text">Learn More</h2>
            
          </div>
          <div className='cards__item__info'>
            <span className="dot1"></span>
            <span className="dot2"></span>
            <h1 className='cards__item__text'>{data?.title}</h1>
            <p>{data?.content}</p>
          <div className="author__details">
            <p>{data?.author?.name} - {data ?.author?.role}</p>
            <p>{ new Date(data?.date).toDateString().slice(3)}</p>
          </div>
          </div>
        </div>
          )
          })}
        
      </li>
    </>
  );
};

export default CardContainer;