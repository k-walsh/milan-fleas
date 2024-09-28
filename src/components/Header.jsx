function Header(props) {
  //   const market = props.
  return (
    <div className="item">
      <p id="name">{props.name}</p>
      <p id="hours" style={{ whiteSpace: "pre-line" }}>
        {props.hours}
      </p>
      <p id="area">{props.area}</p>
    </div>
  );
}

export default Header;
