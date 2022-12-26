import { fn } from "api";
import { Button } from "ui";

export default function Web() {
  fn({s:'d'})
  return (
    <div>
      <h1>Web</h1>
      <Button />
    </div>
  );
}
