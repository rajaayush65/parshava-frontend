import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { getPONumberandDescription, getUniqueSuppliers } from "../api";
import { Spinner } from "react-bootstrap";

const AddDocket = ({ docket, setDocket }) => {
  const [suppliers, setSuppliers] = useState([]);
  const [purchaseOrders, setPurchaseOrders] = useState([]);
  const [loadingPurchaseOrders, setLoadingPurchaseOrders] = useState(false);

  const onDocketValueChanges = (e) => {
    const { id, value } = e.target;
    setDocket((prevDocket) => {
      return { ...prevDocket, [id]: value };
    });
    if (id === "supplierName") {
      setLoadingPurchaseOrders(true);
      // If "Supplier Name" changes, fetch the corresponding purchase orders.
      getPONumberandDescription({
        supplierName: value,
      })
        .then((res) => {
          return setPurchaseOrders(res.data.data);
        })
        .catch((error) => console.error(error))
        .finally(() => {
          setLoadingPurchaseOrders(false); // Set loading state to false after response.
        });
    }
    if (id === "purchaseOrder") {
      setDocket((prevDocket) => {
        return {
          ...prevDocket,
          purchaseOrder: value,
        };
      });
    }
  };

  useEffect(() => {
    getUniqueSuppliers().then((res) => {
      return setSuppliers(res.data.uniqueSuppliers);
    });
  }, []);
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic addon1">Name</InputGroup.Text>
        <Form.Control
          placeholder="Name"
          id="name"
          value={docket.name}
          onChange={onDocketValueChanges}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic addon1">Start Time</InputGroup.Text>
        <Form.Control
          placeholder="Start Time dd/mm/yyyy"
          id="startDate"
          value={docket.startDate}
          onChange={onDocketValueChanges}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic addon1">End Time</InputGroup.Text>
        <Form.Control
          placeholder="End Time dd/mm/yyyy"
          id="endDate"
          value={docket.endDate}
          onChange={onDocketValueChanges}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic addon1">Hours Worked</InputGroup.Text>
        <Form.Control
          placeholder="hoursWorked"
          id="hoursWorked"
          value={docket.hoursWorked}
          onChange={onDocketValueChanges}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic addon1">Rate Per Hour</InputGroup.Text>
        <Form.Control
          placeholder="ratePerHour"
          id="ratePerHour"
          value={docket.ratePerHour}
          onChange={onDocketValueChanges}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic addon1">Supplier Name</InputGroup.Text>
        <Form.Control
          as="select"
          id="supplierName"
          value={docket.supplierName}
          onChange={onDocketValueChanges}
        >
          <option value="">Select Supplier</option>
          {suppliers.map((supplier) => (
            <option key={supplier} value={supplier}>
              {supplier}
            </option>
          ))}
        </Form.Control>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic addon1">Purchase Order</InputGroup.Text>
        <Form.Control
          as="select"
          id="purchaseOrder"
          value={docket.purchaseOrder}
          onChange={onDocketValueChanges}
          disabled={loadingPurchaseOrders}
        >
          <option value="">Select Purchase Order</option>
          {loadingPurchaseOrders ? (
            <option disabled>Loading...</option>
          ) : (
            purchaseOrders.map((po) => (
              <option key={po._id} value={po.PONumber}>
                {po.Description}
              </option>
            ))
          )}
        </Form.Control>
        {loadingPurchaseOrders && (
          <div className="loader">
            <Spinner animation="border" role="status"></Spinner>
          </div>
        )}
      </InputGroup>
    </>
  );
};

export default AddDocket;
