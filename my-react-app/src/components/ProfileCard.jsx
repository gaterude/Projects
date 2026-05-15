import Avatar from "./Avatar";

function ProfileCard(props) {
  return (
    <div>
      <Avatar image={props.image} name={props.name} />

      <h2>{props.name}</h2>
      <p>{props.role}</p>
      <p>{props.bio}</p>
    </div>
  );
}

export default ProfileCard;
