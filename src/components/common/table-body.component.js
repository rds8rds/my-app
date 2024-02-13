const TableBody = ({ data: rows, columns }) => {
  return (
    <>
      {rows.map((row) => {
        return (
          <tbody>
            <>
              <tr>
                {columns.map((column) => {
                  return column.content(row[column.path]);
                })}
              </tr>
            </>
          </tbody>
        );
      })}
    </>
  );
};

export default TableBody;

/*
 ** data: rows ==> data is renamed to rows
 ** first map gives us each object inside the data map
 ** second map goes on each object of columns and return column content function with row[column.path];
 ** একটা row এর জন্য 4 টা column পাওয়া যাবে আর প্রত্যেক column একটা করে আলাদা আলাদা column.path দিবে
 ** যারা row এর এক একটা field ke print করবে [content() ফাংশন]
 */
