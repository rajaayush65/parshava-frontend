import React, { useState } from "react";
import AddDocket from "./AddDocket";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { createOrder } from "../api";
import { validateDocket } from "../utils/helpers";

const DocketModal = ({ show, handleClose, setIsNewOrderAdded }) => {
  const [docket, setDocket] = useState({
    name: "",
    startDate: "",
    endDate: "",
    hoursWorked: "",
    ratePerHour: "",
    supplierName: "",
    purchaseOrder: "",
  });

  const addOrder = () => {
    if (validateDocket(docket)) {
      createOrder(docket)
        .then((res) => {
          console.log(res.data.data);
          window.alert("Added Successfully");
          setIsNewOrderAdded(true);
          setDocket({
            name: "",
            startDate: "",
            endDate: "",
            hoursWorked: "",
            ratePerHour: "",
            supplierName: "",
            purchaseOrder: "",
          });
          handleClose();
        })
        .catch((err) => {
          console.log(err);
          handleClose();
        });
      handleClose();
    } else {
      // Display an error message or handle the validation failure as needed
      window.alert("Validation failed. Please check your input.");
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddDocket docket={docket} setDocket={setDocket} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={addOrder}>
          Add Order
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DocketModal;
