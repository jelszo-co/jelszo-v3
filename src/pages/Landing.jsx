import React, { useEffect, useState } from 'react';
import * as ScrollMagic from 'scrollmagic';
import { TweenMax, TimelineMax, Power1 } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

import Webpage from './components/Webpage';

import { ReactComponent as Logo } from '../assets/jszc.svg';

import '../scss/landing.scss';

const Landing = () => {
  ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
  const controller = new ScrollMagic.Controller();
  useEffect(() => {
    new ScrollMagic.Scene({
      triggerElement: '#menu',
      duration: 1400,
      offset: -80,
    })
      .setPin('#w-wrapper')
      .setTween('#webpage', { left: '63%', ease: Power1.easeInOut })
      .addTo(controller);
  }, [controller]);
  return (
    <div id='landing'>
      <Logo />
      <div className='menu' id='menu'>
        <button type='button'>Projektjeink</button>
        <button type='button'>csapat</button>
        <button className='CTA' type='button'>
          Keress meg minket!
        </button>
      </div>
      <div id='w-wrapper'>
        <Webpage />
      </div>
      <div className='section-wrapper'>
        <section id='s-intro'>
          <div className='content-wrapper'>
            <h1>
              Tudjuk
              <br />
              mire van szükséged.
            </h1>
            <p>
              Mi vagyunk a Jelszo Co,
              <br />
              és webfejlesztéssel foglalkozunk.
            </p>
          </div>
          <div className='scroller'>
            <span className='dot' />
          </div>
        </section>
        <section style={{ border: '1px solid red' }}>
          <h1>
            Tudjuk
            <br />
            mit csinálunk.
          </h1>
          <p>REPLACE</p>
        </section>
        <section>
          <h1>
            Tudjuk, hogy
            <br />
            másoknak már
            <br />
            elnyertük a tetszését.
          </h1>
          <p>
            Reméljük a tiédet is el fogjuk,
            <br />
            ha megnézed az eddigi projektjeinket.
          </p>
        </section>
        <section className='end'>
          <h1>REPLACE</h1>
        </section>
      </div>
    </div>
  );
};

export default Landing;
