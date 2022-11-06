import * as React from 'react';

import Header from '../components/Header';
import SiteFooter from '../components/SiteFooter';
import Navigation from '../components/Navigation';

const BaseLayout = ({children}) => {
  return (
    <div>
      <Header />

      <section className="max-w-9xl mx-auto flex flex-col lg:flex-row">
        <div className="basis-full min-h-[100vh] lg:basis-1/4 bg-[#EBEBEB]">
          <Navigation />
        </div>
        <div className="basis-full lg:basis-3/4">
          {children}
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

export default BaseLayout