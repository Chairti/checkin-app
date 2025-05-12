import React from "react";
import { useTable } from "react-table";
import Sidebar from "../components/Sidebar";

function HistoryPage() {
  // ข้อมูลตัวอย่างสำหรับแสดงในตาราง
  const data = React.useMemo(
    () => [
      { id: 1, name: "John Doe", time: "08:00 AM", position: "Manager" },
      { id: 2, name: "Jane Smith", time: "08:15 AM", position: "Developer" },
      { id: 3, name: "Paul Brown", time: "08:30 AM", position: "Designer" },
    ],
    []
  );

  // กำหนดคอลัมน์ของตาราง
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id", // ชื่อของคอลัมน์ในข้อมูล
      },
      {
        Header: "ชื่อพนักงาน",
        accessor: "name",
      },
      {
        Header: "เวลาเช็คอิน",
        accessor: "time",
      },
      {
        Header: "ตำแหน่ง",
        accessor: "position",
      },
    ],
    []
  );

  // ใช้ useTable hook เพื่อสร้างตาราง
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div style={{ marginLeft: "200px", padding: 20 }}>
      <Sidebar />
      <h1>ประวัติการเช็คอิน</h1>
      <table
        {...getTableProps()}
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          {
            // สร้างหัวตาราง
            headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))
          }
        </thead>
        <tbody {...getTableBodyProps()}>
          {
            // สร้างแถวข้อมูล
            rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default HistoryPage;
