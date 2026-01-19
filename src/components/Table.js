"use client";
export default function Table({ titles, rows, caption }) {
  return (
    <div className="flex flex-col">
      <div className="my-2 overflow-x-auto sm:-mx-2 lg:-mx-4">
        <div className="inline-block min-w-full py-1 align-middle sm:px-2 lg:px-4">
          <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded">
            <table className="min-w-full divide-y divide-gray-200">
              {caption && (
                <caption className="sr-only">{caption}</caption>
              )}
              <thead className="bg-gray-50">
                <tr>
                  {titles.map((t, i) => (
                    <th
                      key={`h${i}`}
                      scope="col"
                      className="px-1 py-1 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      {t}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((v, j) => {
                      // Prima cella come header di riga
                      if (j === 0) {
                        return (
                          <th
                            key={`cell_${i}_${j}`}
                            scope="row"
                            className="whitespace-nowrap px-1 py-2 text-left"
                          >
                            <div className="text-xs text-gray-900 font-medium">{v}</div>
                          </th>
                        );
                      }
                      return (
                        <td
                          key={`cell_${i}_${j}`}
                          className="whitespace-nowrap px-1 py-2"
                        >
                          <div className="text-xs text-gray-900">{v}</div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
