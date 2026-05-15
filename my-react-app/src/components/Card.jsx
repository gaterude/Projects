function Card({ title, children, renderFooter }) {
  return (
    <div>
      <h2>{title}</h2>

      <div>{children}</div>

      {renderFooter && renderFooter()}
    </div>
  );
}

export default Card;