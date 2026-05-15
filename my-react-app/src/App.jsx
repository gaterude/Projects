import ProfileCard from "./components/ProfileCard";
import myImage from "./assets/myphoto.jpeg";

function App() {
  return (
    <div>
      <ProfileCard
        name="Gaterude Michira"
        role="Frontend Developer"
        bio="I love building React apps"
        image={myImage}
      />
    </div>
  );
}

export default App;