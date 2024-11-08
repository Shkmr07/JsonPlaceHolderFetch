function Card({id,name,email,address,isSelected,onSelect}) {
  return (
    <div
      className={`items item${id} ${isSelected?'selected':''}`} onClick={onSelect}>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>
        {address.street},{address.city}
      </p>
    </div>
  );
}

export default Card;
