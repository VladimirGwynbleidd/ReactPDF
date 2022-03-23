import React from "react";
import Table from "react-bootstrap/Table";

const TableCountry = ({ seleccionarConsola, data, cursor }) => {
  return (
    <Table className="items-center w-full bg-transparent border-collapse">
      <thead>
        <tr>
          <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
            Name
          </th>
          <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
            Code
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, id) => {
          return (
            <tr key={id}>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                {item.name}
              </td>
              <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                {item.code}
              </td>
              <td>
                <div className="btn-group">
                  <button onClick={() => seleccionarConsola(item, "Editar")}>
                    <i
                      style={{ hand: cursor }}
                      class="bi bi-pencil px-3 py-2"
                    ></i>
                  </button>
                  <button onClick={() => seleccionarConsola(item, "Eliminar")}>
                    <i style={{ hand: cursor }} class="bi bi-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableCountry;
