function Avatar(props) {
  return (
    <img
      src={props.image}
      alt={props.name}
      width="120"
    />
  );
}

export default Avatar;