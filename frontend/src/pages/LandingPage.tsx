import React from "react"

import About from "../components/About"
import Contact from "../components/Contact"
import Features from "../components/Feature"
import Header from "../components/Header"
import MainDiv from "../components/mainDiv"

export function LandingPage(){
      return (
      <div className="overflow-x-hidden">
            <Header/>
            <MainDiv/>
            <Features/>
            <About/>
            <Contact/>
      </div>
      )
}