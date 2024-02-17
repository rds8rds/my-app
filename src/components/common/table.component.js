import TableHeader from "./table-header.component";
import TableBody from "./table-body.component";

const Table = ({ headers, data, columns }) => {
  return (
    <>
      <table className="table table-striped">
        <TableHeader headers={headers} />
        <TableBody data={data} columns={columns} />
      </table>
    </>
  );
};

export default Table;

/*
 **  sfc ==> stateless function
 */
