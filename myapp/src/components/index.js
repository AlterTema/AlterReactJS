import React from 'react';
 
export const SimpleText = (props) =>{
  console.log(props);
     return(
        <div className="App">
        <header className="App-header">
          <div class="generalText">Привет, меня зовут Артем</div>
          <message class="generalText"/>
          <h3 class="centerText">И это мое первое приложение на курсе ReactJS</h3>
          <h2 ><a class="endingText" href="https://github.com/AlterTema">{props.name}</a></h2>
         
        </header>
      </div >
   
    );  
     }
