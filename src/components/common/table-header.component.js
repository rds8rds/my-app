const TableHeader = (props) => {
  return (
    <>
      <thead>
        <tr>
          {props.headers.map((header) => {
            return (
              <>
                <th scope="col">{header}</th>
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
