import React from 'react';
import dashboard from '../../../assets/dashboard.png';
import './Main.css';
const Main = () => {
  return (
    <main>
        <div className='main_container'>
            <div className='main_title'>
                <img src={dashboard} alt='' />
                <div className='main_greeting'>
                    <h1>Hello Codersite</h1>
                    <p>Welcome to your admin dashboard</p>
                </div>
            </div>

            <div className='main_cards'>
                <div className='card'>
                    <i className="fa fa-user-o text-lightblue" aria-hidden="true" ></i>
                    <div className='card_inner'>
                        <p className='text-primamry-p'>Number of Sub</p>
                        <span className='font-bold text-title'>578</span>
                    </div> 
                </div>
                <div className='card'>
                    <i className='fa fa-calendar fa-2x text-red'></i>
                    <div className='card-inner'>
                        <p className='text-primary-p'>Time of watching</p>
                        <span className='font-bold text-title'>2467</span>
                    </div>
                </div>
                <div className='card'>
                    <i className='fa fa-video-camera fa-2x text-yellow'></i>
                    <div className='card-inner'>
                        <p className='text-primary-p'>Number of videos</p>
                        <span className='font-bold text-title'>340</span>
                    </div>
                </div>
                <div className='card'>
                    <i className='fa fa-thumbs-up fa-2x text-green'></i>
                    <div className='card-inner'>
                        <p className='text-primary-p'>Number of Likes</p>
                        <span className='font-bold text-title'>645</span>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}

export default Main;
