import React from 'react'
import '../ScrollTop/ScrollTop.css'
const ScrollTop = () => {
    window.addEventListener("scroll",function(){
        const scrollTop = document.querySelector(".scrolltop")
        if(this.scrollY >= 560) scrollTop.classList.add("show-scroll")
        else scrollTop.classList.remove("show-scroll")
    })
  return (
    <div>
      <a href="#" className="scrolltop">
        <i className="uil uil-arrow-up scrolltop-icon"></i>
      </a>
    </div>
  )
}

export default ScrollTop
