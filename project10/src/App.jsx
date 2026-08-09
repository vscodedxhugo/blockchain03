import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebglBackground from './components/WebglBackground';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Features from './components/Features';
import FeaturesGrid from './components/FeaturesGrid';
import YieldCalculator from './components/YieldCalculator';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';

function DashboardHome() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesGrid />
      <YieldCalculator />
      <Pricing />
      <FAQ />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <WebglBackground />
      <Layout>
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          {/* Add more routes here as the app scales */}
        </Routes>
      </Layout>
    </Router>
  );
}