import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Cards.module.scss";


const Cards = ({ results, page }) => {
    let display;
    if (results) {
        display= results.map(result=> {
            let {id, name, image, location, status} = result
            return (
            <Link
            style={{textDecoration:"none"}}
             to={`${page}${id}`}
             key={id} 
             className='col-lg-4 col-md-6 col-12 mb-4 text-dark position-relative'>
                <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
                    <img src={image} alt={name} className={`${styles.img} img-fluid`} />
                    <div className="content p-2">
                        <div className="fs-5 fw-bold mb-3 mt-1">{name}</div>
                        <div className="">
                            <div className="fs-6 text-muted">Last Location:</div>
                            <div className="fs-5">{location.name}</div>
                        </div>
                    </div>
                </div>
                {(()=>{
                    if (status === "Dead") {
                        return (
                            <div className={`${styles.badge} position-absolute badge bg-danger`}>{status}</div>
                        )
                    } else if (status === "Alive") {
                        return (
                            <div className={`${styles.badge} position-absolute badge bg-success`}>{status}</div>
                        )
                    } else {
                        return (
                            <div className={`${styles.badge} position-absolute badge bg-secondary`}>{status}</div>
                        )
                    }
                })()}
                
            </Link>
            );
            });
    } else {
        display= "No characters found :/";
    }

  return <>{display}</>
  
}

export default Cards