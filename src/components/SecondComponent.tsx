//props usying typescript
interface SecondComponentProps {
  name: string;
}

export default function SecondComponent(props: SecondComponentProps) {
  return (
    <div>
      <h1>My second component</h1>
      <p>The component's name is {props.name}</p>
    </div>
  );
}
