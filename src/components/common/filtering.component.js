const Filtering = ({ items, selectedItem, handleSelectedItemChange }) => {
  return (
    <div className="col-lg-2">
      <ul className="list-group">
        {items.map((item) => (
          <li
            onClick={() => handleSelectedItemChange(item)}
            className={
              item === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filtering;
