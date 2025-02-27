import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Gallery from './pages/Gallery';
import Journey from './pages/Journey';
import Quiz from './pages/Quiz';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/gallery" element={<Gallery />} />
            {/* <Route path="/messages" element={<Messages />} /> */}
            <Route path="/journey" element={<Journey />} />
            {/* <Route path="/bucket-list" element={<BucketList />} /> */}
            <Route path="/quiz" element={<Quiz />} />
            {/* <Route path="/time-capsule" element={<TimeCapsule />} /> */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App