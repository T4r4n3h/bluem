import React from 'react'
import addicon from '../assets/AddIcon.png'
import back from '../assets/Back.png'

const CreateMissionPage = () => {
  return (
    <div>
          <div className="flex relative pb-5">
            <div className="flex-auto pt-4 pl-3"><h1 className="text-xl">Add New Mission</h1></div>
            <div className="flex-auto pt-5 pr-4 absolute right-0"><img src={back} alt="Back Icon" width="12" height="12" /></div>
          </div>
              <img className="mx-auto" src={addicon} alt="Add Icon" width="50" height="50" />
        <div className="form-center">
              <form className="pl-3 h-96"> 
                <label className="">
                  <span><p className="text-base pb-2 pt-3">Mission Title</p></span>
                  <input 
                    className="w-80 h-12 rounded-medium shadow pl-2"
                    name="title"
                    value="title"
                  />
                </label>
                <label>
                  <span><p className="text-base pb-2 pt-3">Complete mission by</p></span>
                  <input
                    className="w-80 h-12 rounded-medium shadow pl-2"
                    name="date"
                    value="date"
                  />
                </label>
                <label>
                  <span ><p className="text-base pb-2 pt-3">Reward</p></span>
                  <input
                    className="w-80 h-12 rounded-medium shadow pl-2"
                    name="reward"
                    value="reward"
                  />
                </label>
                    <button className=" block bg-lightgray w-80 h-12 rounded-medium text-base text-reallywhite shadow mt-10">Add to New Mission</button>
              </form>
          </div>
    </div>
    )
  }


export default CreateMissionPage