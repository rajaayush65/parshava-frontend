const isDateValid = (dateString) => {
  const regex = /^\d{2}-\d{2}-\d{4}$/;
  return regex.test(dateString);
};

const isNotEmpty = (value) => {
  return value.trim() !== "";
};

export const validateDocket = (docket) => {
  return (
    isNotEmpty(docket.name) &&
    isDateValid(docket.startDate) &&
    isDateValid(docket.endDate) &&
    isNotEmpty(docket.hoursWorked) &&
    isNotEmpty(docket.ratePerHour) &&
    isNotEmpty(docket.supplierName) &&
    isNotEmpty(docket.purchaseOrder)
  );
};
