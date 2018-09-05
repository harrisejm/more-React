import React from 'react';
import Projects from './Projects';

var allProjects = [
  {
    name: 'Calculator',
    type: 'javaScript',
    description: "Preforms numerical calculations"
  },
  {
    name: 'Seahawks.com mock site',
    type: 'Angular',
    description: "Recreated Seahawks.com with Angular"
  },
  {
    name: 'Minesweepr',
    type: 'javaScript',
    description: "Browser game: Clear the entire minefield"
  },


]

function ProjectsList(){
  return(
    <div>
      <style jsx> {`
          div.box {
            border: solid;
            margin: 10px;
            padding: 10px;
            width: 400px;
          }
          div.moveLeft {
            // border: solid;
            // border-color: red;
            width: 450px;
            float: left;
          }
          div.moveRight{
            // border: solid;
            width: 450px;
            float: right;
            height: 500px;

          }
          div.right {
            border: solid;
            margin: 10px;
            padding: 10px;
            height: 455px;
          }
          div.body1 {
            width: 925px;
            margin-right: auto;
            margin-left: auto;
          }
          div.bottomBox {
            width: 925px;
            height: 300px;
            border: solid;
            top: 600px;
            margin-left: auto;
            margin-right: auto;
          }

          `}</style>
          <div className="body1">
            <div className="moveLeft">
              {allProjects.map((projects, index) =>
                <div className="box">
                  <Projects name={projects.name}
                    type={projects.type}
                    description={projects.description}
                    key={index}/>
                </div>
              )}
            </div>
            <div className="moveRight">
             <div className="right">

             </div>
            </div>

          </div>

          <div className="bottomBox">

          </div>
          </div>

      );
    }

    export default ProjectsList;
