import React from 'react'


const Task = (props) => {

  return (
    
    <div>

      <button onClick={() => props.handleClick()}>
      <div className="mb-3 w-80 h-20 mx-auto container bg-reallywhite flex rounded-medium shadow relative">
        <div className="my-auto">
          <img
            className="ml-3 mr-4"
            src={props.img}
            alt=""
            width="20"
            height="30"
          />
        </div>
        <div className="my-auto">
          <p className="text-sm">{props.title}</p>
          <p className="text-xs text-gray pt-2">{props.date}</p>
        </div>
        <div className="my-auto ml-4 absolute right-4 top-8">
          <p className="mx-auto text-xs text-gray"><span>$</span>{props.reward}</p>
          </div>
        </div>
        </button>

      </div>








    
  );
}

export default Task