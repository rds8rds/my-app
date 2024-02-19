const TableHeader = ({ columns, sortColumn, sortFunc }) => {
  // sortColumn = {path:id, order: desc/ asc}
  // sortFunc to sort items

  const handleSortFunc = ({ path, sorting }) => {
    if (sorting == false) return;
    if (sortColumn.path === path && sortColumn.order === "asc") {
      sortFunc({ path, order: "desc" });
    } else {
      sortFunc({ path, order: "asc" });
    }
  };

  const getIcons = (column) => {
    if (sortColumn.path === column.path) {
      if (sortColumn.order === "asc") {
        return <i className="bi bi-sort-down-alt"></i>;
      } else {
        return <i className="bi bi-sort-down"></i>;
      }
    } else {
      return null;
    }
  };
  return (
    <>
      <thead>
        <tr>
          {columns.map((column) => {
            return (
              <>
                <th onClick={() => handleSortFunc(column)} scope="col">
                  {column.label}
                  {getIcons(column)}
                </th>
              </>
            );
          })}
        </tr>
      </thead>
    </>
  );
};

export default TableHeader;

/*
 ** props is a object and headers list stays in it
 */
