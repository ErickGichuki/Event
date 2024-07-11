import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faEye, faGem } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <div className='mx-auto max-w-7xl'>
        <h3 className='text-center mt-2 font-bold text-2xl'>We are:</h3>
        <p className='text-center text-xlg'>A company that specializes in creating events</p>
      <div className='p-6'>
        <h2 className='text-lg font-semibold mb-4 text-center'>We aim at treating our customers well</h2>
        <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 justify-center items-center m-8'>
          <div className='bg-purple-100 hover:bg-purple-200 rounded-lg p-10 w-full md:w-1/3 text-center shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
            <p>
              <FontAwesomeIcon icon={faBullseye} className='w-12 h-12 text-green-800 mb-4' />
            </p>
            <h2 className='text-2xl font-semibold mb-2'>Mission</h2>
            <p className='text-gray-600'>To create extraordinary events that captivate, inspire, and leave lasting memories.</p>
          </div>
          <div className='bg-indigo-100 hover:bg-indigo-200 rounded-lg p-10 w-full md:w-1/3 text-center shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 mt-6 md:mt-0'>
            <p>
              <FontAwesomeIcon icon={faEye} className='w-12 h-12 text-red-500 mb-4' />
            </p>
            <h2 className='text-2xl font-semibold mb-2'>Vision</h2>
            <p className='text-gray-600'>To be the trusted partner in crafting exceptional and unforgettable events worldwide.</p>
          </div>
          <div className='bg-teal-100 hover:bg-teal-200 rounded-lg p-10 w-full md:w-1/3 text-center shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 mt-6 md:mt-0'>
            <p>
              <FontAwesomeIcon icon={faGem} className='w-12 h-12 text-yellow-500 mb-4' />
            </p>
            <h2 className='text-2xl font-semibold mb-2'>Values</h2>
            <p className='text-gray-600'>We value creativity,and exceeding client expectations through personalized service and attention to detail.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
