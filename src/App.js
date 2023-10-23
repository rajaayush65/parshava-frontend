import "./App.css";
import Button from "react-bootstrap/Button";
import DocketModal from "./components/DocketModal";
import { useEffect, useState } from "react";
import { getAllDockets, getOrders } from "./api";
import DocketTable from "./components/DocketTable";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const [addDocketDialog, setAddDocketDialog] = useState(false);
  const [allDockets, setAllDockets] = useState([]);
  const [allOrders, setAllOrders] = useState([]);
  const [isNewOrderAdded, setIsNewOrderAdded] = useState(false);

  const handleAddDocketDialog = () => {
    setAddDocketDialog(!addDocketDialog);
  };

  useEffect(() => {
    getAllDockets()
      .then((res) => {
        return setAllDockets(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log("called");
    getOrders()
      .then((res) => {
        setIsNewOrderAdded(false);
        return setAllOrders(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [isNewOrderAdded]);

  return (
    <div>
      <Header />
      <Button variant="primary" onClick={handleAddDocketDialog}>
        Add Docket
      </Button>
      <Routes>
        <Route
          path="/"
          element={allDockets.length > 0 && <DocketTable data={allDockets} />}
        />
        <Route
          path="/orders"
          element={allOrders.length > 0 && <DocketTable data={allOrders} />}
        />
      </Routes>
      <DocketModal
        show={addDocketDialog}
        handleClose={handleAddDocketDialog}
        setIsNewOrderAdded={setIsNewOrderAdded}
      />
    </div>
  );
}

export default App;
