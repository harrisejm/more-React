import React from 'react';

function Header(){
  return (
    <div className="mainBody">

      <style jsx> {`
        div.header {
          width: 400px;
          border: solid;
          margin-right: auto;
          margin-left: auto;
          text-align: center;
        }
        div.mainBody {
          min-width: 925px;
          margin-top: 30px;
          margin-bottom: 20px;
        }
      `}</style>

      <div className="header">
      <h1>Eddie's Test Page Header</h1>
      </div>
    </div>

  );
}

export default Header;
