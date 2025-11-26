import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from '../_commons/ScrollToTop';
import MainArea from '../_main/MainArea/MainArea';
import Profile from '../_main/Profile/Profile';
import Service from '../_main/Service/Service';
import Works from '../_main/Works/Works';
import Favorite from '../_main/Favorite/Favorite';

import HolidayDiaryData from '../_main/Works/HolidayDiaryData';
import LpData from '../_main/Works/LpData';
import PokeAPIData from '../_main/Works/PokeAPIData';

import NotFound from '../../pages/NotFound';

export default function Navigation() {
  return (
    <MainArea>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Profile />
              <Service />
              <Works />
              <Favorite />
            </>
          }
        />
        <Route path="/service" element={<Service />} />
        <Route path="/works" element={<Works />} />
        <Route path="/works/poke-api" element={<PokeAPIData />} />
        <Route path="/works/moku-lp" element={<LpData />} />
        <Route path="/works/holiday-diary" element={<HolidayDiaryData />} />
        <Route path="/favorite" element={<Favorite />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainArea>
  );
}
