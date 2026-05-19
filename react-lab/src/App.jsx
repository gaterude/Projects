import ProfileCard from "./components/ProfileCard.jsx";
import myImage from "./assets/myphoto.jpeg";

function App() {
  return (
    <div>
      <ProfileCard
        name="Michira"
        role="Developer"
        avatar={myImage}
      />

      <ProfileCard
        name="Gaterude"
        role="Designer"
        avatar={myImage}
      />
    </div>
  );
}

export default App;