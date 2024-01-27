"use client"
import React, { useEffect, useState } from "react";
import carsData from "@/app/carsData";
import CarDetail from "@/app/components/CarDetail";


const Page = () => {
  const [visible, setVisible] = useState(4);
  const [load, setLoad] = useState("btn");
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const onModal = (index: number) =>{
    setSelectedIndex(index)
    setShowModal(true)
  }

  const showMore = () => {
  setVisible((prevState) => prevState + 4)
  }



  useEffect(() => {
    if (visible > carsData.length) setLoad("hidden");

  })

  return (
    <div className="cars">
      <div className="cars-top">
        <h1>Nabídka Aut</h1>
      </div>

      <div className="cars-show">

        {carsData.slice(0, visible).map((oneCar)=> {
          const { id, brand, type, img, price } = oneCar;

          return (
            <div className="one-car" key={id}>
              <img className="one-car-img"   loading="lazy" id="sample" src={img} alt="" />

              <h2>{brand}</h2>
              <h3>Modelová řada: {type}</h3>
              <p>Od: {price},- Kč/den</p>
              <button onClick={() => onModal(id)} className="btn-sm">Detail</button>
            </div>
          );
        })}
      </div>
      <div className="cars-bot">
        <button onClick={showMore} className={load}>Zobrazit více</button>
      </div>
      <CarDetail index={selectedIndex} isVisible={showModal}  onClose={() => setShowModal(false)}/>
    </div>
  );
};

export default Page;