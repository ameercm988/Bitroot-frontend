import React from "react";
import db from "../db";
import "./Modal.css";
import { AiOutlineClose} from "react-icons/ai";

const Modal = ({ data, modalShut }) => {
  const modalData = db.find((obj) => obj.id === data);
//   console.log(modalData);
  // console.log(data)
  return (
    <div>
      <div className="modal" id="modal" style={{ display: "grid" }}>
        <div className="modal__header">
         
        </div>
        <div className="modal__body active" id="modal-body">
            <div className="button__container">
            <button
          
          className="modal__close-btn"
          aria-label="Close modal."
          id="close-modal-btn"
          onClick={()=>{modalShut(false)}}
        >
        
          <AiOutlineClose/>
          
        </button>
            </div>
        
          <figure className="img-content">
            <div className="img-box" id="img-content__img-box">
              <img src={modalData?.thumbnail?.large} alt="" />
            </div>
            <figcaption
              className="img-content__caption"
              id="img-content__caption"
            >
              <h2>{modalData?.title}</h2>
            </figcaption>
            <p className="title">{modalData?.content}</p>
            <div className="avatar__details">
              <img
                src={modalData?.author?.avatar}
                alt=""
                className="avatar__image"
              />
              <p>
                {modalData.author.name} - {modalData.author.role}
              </p>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Modal;
