import { useState } from 'react';

const DataTable = ({ dataSource, paginated = true, headers }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleNextPage = () => {
    if (currentPage * itemsPerPage < dataSource.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const paginatedData = paginated
    ? dataSource.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      )
    : dataSource;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border bg-white">
        <thead>
          <tr>
            {headers.map((header) => (
              <th className="border-y-2 border-slate-200 bg-slate-100 px-6 py-3 text-left text-sm font-medium leading-4 tracking-wider text-gray-600">
                {header}
              </th>
            ))}
            {/* <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">Industry</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">Assigned Agents</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">Number of campaigns</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 tracking-wider">Total amount spent</th> */}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border-b border-gray-200 px-6 py-2 text-sm">
                {item.name}
              </td>
              <td className="border-b border-gray-200 px-6 py-2 text-sm">
                {item.industry}
              </td>
              <td className="border-b border-gray-200 px-6 py-2 text-sm">
                <div className="flex">
                  {item.assignedAgents.map((agent, i) => (
                    <img
                      key={i}
                      src={agent.image}
                      alt={agent.name}
                      className="mr-2 h-8 w-8 rounded-full"
                    />
                  ))}
                </div>
              </td>
              <td className="border-b border-gray-200 px-6 py-2 text-sm">
                {item.numberOfCampaigns}
              </td>
              <td className="border-b border-gray-200 px-6 py-2 text-sm">
                {item.totalAmountSpent}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {paginated && (
        <div className="flex items-center justify-between p-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="rounded bg-gray-300 px-3 py-1 text-gray-700 disabled:opacity-50"
          >
            Prev
          </button>
          <span className="text-gray-700">
            Page {currentPage} of {Math.ceil(dataSource.length / itemsPerPage)}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage * itemsPerPage >= dataSource.length}
            className="rounded bg-gray-300 px-3 py-1 text-gray-700 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default DataTable;
