import Greeting from "./Greeting";
import Avatar from "./Avatar";

function ProfileCard({ name, role, avatar }) {
  return (
    <div>
      <Avatar src={avatar} alt={name} />
      
      <Greeting name={name} />
 <p>{role}</p>
    </div>
  );
}
export default ProfileCard;