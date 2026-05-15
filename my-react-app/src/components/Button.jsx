function Button({ children, onClick, variant }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;