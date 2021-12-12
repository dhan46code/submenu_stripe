import React from 'react';
import { useGlobal } from './context';

function Hero() {
  const { closeSubmenu } = useGlobal();
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <div className='hero-info'>
          <h2>classic train</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            sequi consequuntur labore voluptas magni quod, voluptatum maxime
            nisi ipsam quia possimus, totam facilis id corrupti vitae deserunt,
            alias dicta placeat? Dicta corporis facere rerum, nemo officiis aut?
            Sed, doloremque ut.
          </p>
        </div>
        <div className='hero-images'></div>
      </div>
    </section>
  );
}

export default Hero;
