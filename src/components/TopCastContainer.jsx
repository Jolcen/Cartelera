import React from 'react'
import "./TopCastContainer.css";
import { ActorCard } from './ActorCard'
import actors from "../assets/actors.json"

export const TopCastContainer = () => {
  return (
    <section className='top-cast-container'>
        <h6>Top Cast</h6>
        <div className="cards-container">
            {
                actors.map((actor)=>{
                    return <ActorCard actor={actor} key={actor.id}/>
                })
            }
            
        </div>
    </section>
  )
}
