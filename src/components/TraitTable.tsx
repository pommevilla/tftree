import { warnOptionHasBeenMovedOutOfExperimental } from "next/dist/server/config";
import React, { ReactText, SetStateAction, useCallback } from "react";

const getChildIndex = (node: EventTarget | HTMLTableRowElement) =>
  Array.prototype.indexOf.call(node.parentNode.children, node);

function tableMouseOver(
  event: React.MouseEvent<HTMLTableRowElement, MouseEvent>
) {
  const row = event.currentTarget,
    col = event.target,
    rowIndex = getChildIndex(row),
    colIndex = getChildIndex(col),
    allText = [...row.children].map((td) => td.textContent),
    hoveredTrait = row.children[0]?.textContent;

  console.log(`event = ${event}`);
  console.log(`row = ${row}`);
  console.log(`col = ${col}`);
  console.log(
    `Cell (${colIndex}, ${rowIndex}): ${
      (event.target as HTMLElement).textContent
    }`
  );
  console.log(`Row [${colIndex}]: ${JSON.stringify(allText)}`);
  console.log(`Row content: ${allText}`);
  console.log(`Hovered trait: ${hoveredTrait}`);
}

const TraitTable = ({
  traitCounts,
  onHover,
}: {
  traitCounts: { [trait: string]: number };
  onHover: (value: string) => void;
}) => {
  const handleHover = useCallback(
    (event) => {
      event === ""
        ? onHover("")
        : onHover(event.currentTarget.children[0]?.textContent);
    },
    [onHover]
  );

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
              onMouseOver={(event) => handleHover(event)}
              onMouseLeave={(event) => handleHover("")}
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
