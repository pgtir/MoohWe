import React from 'react'
import Topbar from './Topbar'
import './Mainview.css'
import CardItem from './CardItem'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight, faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";

function Mainview({list, page, setPage, heading, setSearchKey, setIsSearchPage}) {
    function backpager() {
        if(page > 1) 
        setPage(--page)
    }
  return (
    <section className=" mainview flex-fill px-4   py-3">
    <Topbar
     setSearchKey = {setSearchKey}
    //  setIsSearchPage = {setIsSearchPage}
    />
    <section className='showcase-area  py-4'>
    <div className='head '>
    <span className='heading'>{heading}</span>
    <div className='head-icons'>
     <FontAwesomeIcon onClick= {backpager}  icon={faCircleChevronLeft} className=" me-3 left-chevron shadow-sm" />
     <FontAwesomeIcon onClick={() => setPage(++page)} icon={faCircleChevronRight} className="right-chevron shadow-sm" />
    </div>
    </div>
     

     <article className='card-items'>
         {   
             list && list.map((item) => <CardItem 
             itemProp = {item}
              />)
         }
     </article>
    </section>
</section>
  )
}

export default Mainview