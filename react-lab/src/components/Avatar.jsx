function Avatar({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: "100px",
        height: "100px",
        objectFit: "cover"
      }}
    />
  );
}
export default Avatar;