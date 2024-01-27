"use client"
import React, {  useState } from "react";

import Modal from "@/app/components/Modal";
import Link from "next/link";

const Page = () => {
  const [showModal, setShowModal] = useState(false);
    return (
      <div className="home">
        <h1 className="mx-auto p-3">Jak to u nás funguje</h1>
        <div className="home-box box-even">
          <h2 className="">stačí vybrat a jet</h2>
          <h3 className="">auto dovezeme po celé české republice</h3>
          <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem dolores nulla?</p>
          <Link href="/cars">
            <button className="btn">Automobily</button>
          </Link>
        </div>
        <div className="home-box box-odd">
          <h2 className="">plná nádž</h2>
          <h3 className="">Při předání vždy s plnou</h3>
          <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem dolores nulla?</p>
          <button onClick={() => setShowModal(true)} className="btn">Ceník</button>
        </div>
        <div className="home-box box-even">
          <h2 className="">pojištění</h2>
          <h3 className="">základní pojištění zdarma</h3>
          <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem dolores nulla?</p>
        </div>
        <Modal isVisible={showModal} onClose={() => setShowModal(false)}/>
      </div>

    );
};

export default Page;