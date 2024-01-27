import React from "react";
import carsData from "@/app/carsData";
import Link from "next/link";
const CarDetail = ({isVisible, onClose, index}) => {
  if (!isVisible) return null

const carNumber = index - 1


  const {id,brand, type,img, price, transmission, consumption} = carsData[carNumber];

  return (
    <div className="modal">
      <div key={id} className="modal-small-car-detail">
        <img className="" src={img} alt="" />
        <h2>{brand}</h2>
        <h3>model: {type}</h3>
        <p>od: {price},- Kč/den</p>
        <p>převodovka: {transmission}</p>
        <p>spotřeba: {consumption}l/100km</p>
        <button onClick={() => onClose()} className="btn-sm btn-car-detail">Zavřít</button>
        <Link href={`/pricing?id=${id}`}>
          <button className="btn-sm btn-car-detail">Rezervovat</button>
        </Link>

      </div>

    </div>
  );
};

export default CarDetail;