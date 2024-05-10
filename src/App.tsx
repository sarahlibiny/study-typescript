import React, { createContext, useContext } from "react";
import { FirstComponent } from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import { Destructuring, Category } from "./components/Destructuring";
import { State } from "./components/State";
import { Context } from "./components/Context";

//creating types
type textOrNull = string | null;

//creating interface context
interface IContext {
  language: string;
}

//creating context
export const AppContext = createContext<IContext | null>(null);

function App() {
  //variables
  const name: string = "Sarah";
  const age: number = 28;
  const isStudying: boolean = true;

  //functions
  const userGreeting = (name: string): string => {
    return `Hello, ${name}`;
  };

  //variables usying types
  const text: textOrNull = "Hello";
  const textNull: textOrNull = null;

  //creating context value with interface
  const contextValue: IContext = {
    language: "typescript",
  };

  return (
    //usyng context provider with value
    <AppContext.Provider value={contextValue}>
      <div>
        <h1>React + Typescript</h1>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        {isStudying && <p>I'm studying React + Typescript</p>}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name="Second Component" />
        <Destructuring
          title="Destructuring component"
          content="This is the component's content"
          commentsQty={10}
          tags={["React", "Typescript", "Front-End"]}
          //usying enum
          category={Category.JS}
        />
        <Destructuring
          title="Destructuring component"
          content="This is the component's content"
          commentsQty={10}
          tags={["React", "Typescript", "Front-End"]}
          category={Category.TS}
        />
        <State />
        {/*usying conditional rendering null is equal false*/}
        {text && <p>This is a text</p>}
        {textNull && <p>This is a null text</p>}
        {/*usyng context*/}
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
