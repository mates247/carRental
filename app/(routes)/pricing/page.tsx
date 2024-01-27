"use client"
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { LuArrowRight } from "react-icons/lu";
import faqData from "@/app/faqData";
import carsData from "@/app/carsData";
import Question from "@/app/components/Question";
import Image from "next/image";
const Page = () => {
  /*beru id z url*/
  const searchParams = useSearchParams()
  const id:number = searchParams.get('id')
  /* konec beru id z url*/

  const searchId = id - 1
  const {img, price} = carsData[searchId]

  const [day, setDay] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);


  const daysDecrement = () =>{
    setDay(prevState => prevState - 1)
    if (day <= 1) setDay(1)
    setTotalPrice(totalPrice - price)
    if (totalPrice <= price) setTotalPrice(price)
  }
  const daysIncrement = () =>{
    setDay(prevState => prevState + 1)
    if (day >= 30){
      setDay(30)
    }else {
      setTotalPrice(totalPrice + price)
    }
  }



  return (
    <div className="flex flex-col">
      <h2 className="py-3.5 uppercase text-3xl text-center" >Pronájem</h2>
      <div className="pricing">

        <div className="pricing-div-top">
          <img src={img} alt="" />
        </div>

        <div className="pricing-div-arrow">
          <LuArrowRight className="right-arrow" />
        </div>

        <div className="pricing-div-mid">
          <p>počet dní: {day}</p>
          <div className="pricing-buttons-mid">
            <button onClick={daysIncrement} className="btn-sm">přidat</button>
            <button onClick={daysDecrement} className="btn-sm">ubrat</button>
          </div>
          <div className="pricing-date-mid">
            <p>Od data: </p>
            <input type="date" />
          </div>

          <div className="pricing-services-mid">

            <form action="">
              <p>Pojištění:</p>
              <input type="radio" id="yes" name="insurance" value="" />
              <label htmlFor="yes">Ano</label><br />
              <input type="radio" id="no" name="insurance" value="" />
              <label htmlFor="no">Ne</label>

              <p>Druhý řidič:</p>
              <input type="radio" id="yes" name="secondDriver" value="" />
              <label htmlFor="yes">Ano</label><br />
              <input type="radio" id="no" name="secondDriver" value="" />
              <label htmlFor="no">Ne</label>
            </form>


          </div>

        </div>

        <div className="pricing-div-arrow">
          <LuArrowRight className="right-arrow" />
        </div>


        <div className="pricing-div-bot">
          <div className="">
            <p>zadejte slevový kupon:</p>
            <input placeholder="H845FFAD" type="text" />

          </div>

          <div className="">

            <div className="">
              <p>cena za den:</p>
              <p>{price},- Kč</p>
            </div>

            <div className="">
              <p>Celková cena:</p>
              <p>{Math.round(totalPrice)},- Kč</p>

            </div>

          </div>

          <div>
            <button className="btn">Pokračovat</button>
          </div>

        </div>

      </div>

      <div className="">
        {faqData.map((oneQuestion) => {

          return <Question key={oneQuestion.id} {...oneQuestion}/>
        })}
      </div>




    </div>
  );
};

export default Page;