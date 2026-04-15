// ProfileCard receives and uses props
function ProfileCard({ name, age, job, image }) {
  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Job: {job}</p>
    </div>
  );
}

export default ProfileCard;