import { useState, useEffect } from "react";
import "./style.css";
export const App = () => {
  const [data, setData] = useState(null);

  const KEY_URL_API = "https://fake-api-spartan.herokuapp.com/users";

  useEffect(() => {
    fetch(KEY_URL_API)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  console.log(data);
  return (
    <>
      <table className="table_container">
        <caption className="table_title">Basic CRUD</caption>
        <thead className="table_head">
          <tr>
            <th> Name </th>
            <th> Email </th>
            <th> City </th>
            <th> Username </th>
            <th> Website </th>
            <th>actions</th>
          </tr>
        </thead>
        {data &&
          data.map((item) => {
            return (
              <tbody key={item.id} className="table_body">
                <tr>
                  <td> {item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.city}</td>
                  <td>{item.username}</td>
                  <td>{item.website}</td>
                  <td className="tbody_buttoms">
                    <button className="button1">edit</button>
                    <button className="button2">delete</button>
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </>
  );
};
