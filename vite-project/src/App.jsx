import Test from "./compnent/text";
import Gallery, { Profile } from "./component/gallery";
import { Card as Image } from "./component/gallery";

function App() {
  return (
    <div>
      <p>
        <h2>HELLO GUYS</h2>
        <Gallery />
        <Profile />
        <h2>HELLO GUYS</h2>
        <Image />
      </p>
      <Test />
    </div>
  );
}

export default App;
