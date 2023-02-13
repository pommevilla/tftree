import React from "react";

const TraitTable = ({
  traitCounts,
}: {
  traitCounts: { [trait: string]: number };
}) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-left text-sm text-neutral-100">
        <thead className="text-whtie bg-gray-50 text-xs uppercase dark:bg-gray-700">
          <tr>
            <th scope="col" className="px-6 py-2">
              Trait
            </th>
            <th scope="col" className="px-6 py-2">
              Count
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(traitCounts).map((key, value) => (
            <tr
              className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
              key={value}
            >
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-2 font-medium text-neutral-100 "
              >
                {key[0]}
              </th>
              <td className="px-6 py-2">{key[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TraitTable;
