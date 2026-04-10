import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div>
      <ProfileCard
        name="John"
        age={24}
        job="Developer"
        image="https://i.pravatar.cc/150?img=1"
      />
      <ProfileCard
        name="Joy"
        age={23}
        job="Frontend Developer"
        image="https://i.pravatar.cc/150?img=2"
      />
    </div>
  );
}

export default App;