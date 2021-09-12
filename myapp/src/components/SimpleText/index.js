import React from "react";

export const SimpleText = ({ name, age, someObj }) => {
  const line = "🠔   ";
  const sayHello = () => {
    alert('Привет');
  }

  return (
     <div className="App">
             <div class="generalText">Привет, меня зовут Артем</div>
      <Message question={line} onClick={sayHello} />
      <h3 class="centerText">И это мое первое приложение на курсе ReactJS</h3>
        <h2 ><a class="endingText" href="https://github.com/AlterTema">AlterTema</a></h2>
         
      </div >
  );
};

class Message extends React.Component {
  render() {
    const { question, onClick } = this.props;
    
    return <button class="btn2" onClick={onClick}>➝Сообщение для ввода{question}</button>;
  }
}