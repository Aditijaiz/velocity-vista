import React from "react";
import './price.css';
import Back from "../common/back/Back";
import PriceCard from "./PriceCard";
import FAQ from './Faq';

const Price = () => {
  return (
    <>
      <Back title='Choose The Right Plan' />
      <section className='price padding'>
        <div className='container grid'>
          <PriceCard></PriceCard>
        </div>
      </section>
      <FAQ /> 
    </>
  );
}

export default Price;
