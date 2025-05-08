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
    </div>
  );
}

export default App;
