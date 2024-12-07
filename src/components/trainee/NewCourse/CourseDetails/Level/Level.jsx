import React from 'react';
import { Link } from 'react-router-dom';
import ProgressBar from '../../components/Progressbar';

const LevelForm = () => {
  return (
    <div className="flex flex-col p-4 sm:p-6 md:p-8 min-h-screen">
      <div className='m-4 sm:m-5'>
        <ProgressBar precentage={100} />
      </div>
      
      <div className="flex flex-col items-start w-full max-w-4xl mx-auto mb-4 md:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Level</h1>
        <span className="text-gray-400 text-sm sm:text-base">Add your level here...</span>
      </div>

      <div className="border border-gray-300 rounded-md p-4 sm:p-6 md:p-8 w-full mx-auto mb-3">
        <form className="space-y-4 sm:space-y-5 md:space-y-6">
          <div className="flex flex-col">
            <label className="text-gray-800 font-semibold text-sm sm:text-base mb-1">
              <span className="text-red-500">*</span> Level
            </label>
            <select className="border border-gray-300 rounded-md p-2 outline-none text-sm sm:text-base">
              <option>Development</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-gray-800 font-semibold text-sm sm:text-base mb-1">
              <span className="text-red-500">*</span> Duration
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 outline-none text-sm sm:text-base"
              placeholder="11hrs 32 mins"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-800 font-semibold text-sm sm:text-base mb-1">
              <span className="text-red-500">*</span> Certification
            </label>
            <select className="border border-gray-300 rounded-md p-2 outline-none text-sm sm:text-base">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </form>
      </div>

      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6">
        <Link 
          to="levels"  
          className="bg-violet-500 p-3 sm:p-4 text-center text-white rounded-lg font-semibold w-[100px] min-h-[10px] hover:bg-white hover:border-2 hover:border-violet-500 hover:text-violet-500 transition-all duration-300"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default LevelForm;
