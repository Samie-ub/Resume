import React from 'react';

function AddBtn({ onClick }) {
  return (
    <div className="add-btn" onClick={onClick}>
      <img width="50" height="50" src="https://img.icons8.com/ios/50/000000/add--v1.png" alt="add--v1"/>
    </div>
  );
}

export default AddBtn;