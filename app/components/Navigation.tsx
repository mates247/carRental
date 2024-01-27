import React from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
const Navigation = () => {
    return (
        <div className="nav">
            <div className="nav-box">
              <div className="nav-small-box-top">
                <img src="./logo.png" alt="" />
                <h1 className="nav-h1-hidden">AutoMatěj.cz</h1>
              </div>
              <div className="nav-small-box-bot">
                <ul className="nav-ul">
                  <li><Link href="/">Domů</Link></li>
                  <li>Ceník</li>
                  <li><Link href="/cars">Automobily</Link></li>
                </ul>
              </div>
            </div>
        </div>
    );
};

export default Navigation;
