import React from 'react'
import menu from './assets/menu.png';
import video from './assets/video.mp4'
import img1 from './assets/img1.webp'
import img2 from './assets/img2.webp'
import img3 from './assets/img3.webp'

function App() {
  return (
    <div>
      <div>

        <div className="relative">
          <video autoPlay={true}>
            <source src={video} type="video/mp4"/>
          </video>
        </div>

        <div className="absolute top-0  w-full">
          <div className="flex justify-between px-96 my-10">
            <div className="flex justify-between space-x-8">
              <h1 className="font-bold text-3xl text-white">SpaceX</h1>
              <div className="text-white text-sm uppercase mt-1 flex justify-between space-x-4">
                <h1>Falcon 9</h1>
                <h1>Falcon Heavy</h1>
                <h1>Dragon</h1>
                <h1>Starship</h1>
                <h1>Human Spaceflight</h1>
                <h1>Rideshare</h1>
              </div>
            </div>
            <div className="flex justify-between space-x-4">
              <h1 className="text-white uppercase mt-1 text-sm">Shop</h1>
              <div>
                <img className="w-6" src={menu} alt="bars"/>
              </div>
            </div>
          </div>
        </div>

        <div className="px-96 my-10 space-y-20 absolute bottom-0">
          <div className="space-y-5">
            <h1 className="text-white uppercase text-3xl font-light">Completed Mission</h1>
            <h1 className="text-white font-semibold text-4xl uppercase">Dragon returns to <br/>  earth</h1>
            <h1 className="text-gray-300">Dragon completes world's first all-civilian mission to orbit </h1>
          </div>
          
          <div className="mt-20">
            <a href="/" className="px-10 py-4 border-2 text-white uppercase text-xs">Rewatch</a>
          </div>
        </div>

        <div className="relative">
          <img src={img1} alt="img1" />

          <div className="px-96 mb-20 space-y-20 absolute bottom-0">
            <div className="space-y-5">
              <h1 className="text-white uppercase text-xl font-light">Recent Launch</h1>
              <h1 className="text-white font-bold text-5xl uppercase">Starlink <br/>  Mission</h1>
            </div>
            
            <div className="mt-20">
              <a href="/" className="px-10 py-4 border-2 text-white uppercase text-xs">Rewatch</a>
            </div>
          </div>

        </div>

        <div className="relative">
          <img src={img2} alt="img1" />

          <div className="px-96 mb-20 space-y-20 absolute bottom-0">
            <div className="space-y-5">
              <h1 className="text-white uppercase text-xl font-light">Recent Launch</h1>
              <h1 className="text-white font-bold text-5xl uppercase">Crs-23 Mission</h1>
            </div>
            
            <div className="mt-20">
              <a href="/" className="px-10 py-4 border-2 text-white uppercase text-xs">Rewatch</a>
            </div>
          </div>

        </div>

        <div className="relative">
          <img src={img3} alt="img1" />

          <div className="px-96 mb-20 space-y-20 absolute bottom-0">
            <div className="space-y-5">
              <h1 className="text-white uppercase text-xl font-light">Recent Launch</h1>
              <h1 className="text-white font-bold text-5xl uppercase">Starship to <br/>  Land nasa <br/> Astronauts on <br/> the moon</h1>
            </div>
            
            <div className="mt-20">
              <a href="/" className="px-10 py-4 border-2 text-white uppercase text-xs">Learn more</a>
            </div>
          </div>

        </div>
      </div>
      <div className="bg-black bottom-0 text-xs font-bold uppercase flex justify-evenly px-96 py-6">
          <h1 className="text-gray-500">SpaceX &copy; 2021</h1>
          <h1 className="text-white">Twitter</h1>
          <h1 className="text-white">Youtube</h1>
          <h1 className="text-white">Instagram</h1>
          <h1 className="text-white">Flickr</h1>
          <h1 className="text-white">Linkedin</h1>
          <h1 className="text-white">Privacy Policy</h1>
        </div>
    </div>
  );
}  

export default App;
