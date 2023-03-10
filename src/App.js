import classNames from "classnames";
import "./App.css";
import ButtonBuyNow from "./components/ButtonBuyNow";
import ButtonWithdraw from "./components/ButtonWithdraw";

function App() {
  return (
    <div className="App">
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th className={classNames("table-header")}>001</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={classNames("table-cell")}>
              <ButtonBuyNow onClick={()=>{alert("Buy Nowwww"); }}/>
            </td>
          </tr>
          <tr>
            <td className={classNames("table-cell")}>
              <ButtonWithdraw />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
