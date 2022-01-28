export default function Table({ titles, rows }) {
  return (
    <div className="flex flex-col">
      <div className="my-2 overflow-x-auto sm:-mx-2 lg:-mx-4">
        <div className="py-1 align-middle inline-block min-w-full sm:px-2 lg:px-4">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {titles.map((t, i) => (
                    <th
                      key={`h${i}`}
                      scope="col"
                      className="px-1 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {t}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((v, j) => (
                      <td
                        key={`cell_${i}_${j}`}
                        className="px-1 py-2 whitespace-nowrap"
                      >
                        <div className="text-xs text-gray-900">{v}</div>
                      </td>
                    ))}
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
