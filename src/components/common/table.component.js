import TableHeader from "./table-header.component";
import TableBody from "./table-body.component";

const Table = ({ items, columns, sortColumn, sortFunc }) => {
  return (
    <>
      <table className="table table-striped">
        <TableHeader
          columns={columns}
          sortFunc={sortFunc}
          sortColumn={sortColumn}
        />
        <TableBody items={items} columns={columns} />
      </table>
    </>
  );
};

export default Table;

/*
 **  sfc ==> stateless function
 */
