import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const OrderMedicine = () => {
  const [prescriptionState, setPrescriptionState] = useState(1);
  //loader
  const [loader, setLoader] = useState();

  const [medicine, setMedicin] = useState("");
  const [quantity, setQuantity] = useState("");
  const [medicArr, setMedicArr] = useState([]);
  const [prescriptionImg, setprescriptionImg] = useState("");

  //add Medicine
  const handleAddMedic = () => {
    const medicineQuantityData = [medicine, quantity];
    setMedicArr([...medicArr, medicineQuantityData]);
  };

  //Delete Medicine
  const deleteOrderMedicine = (i) => {
    const newMedicineQuantity = medicArr.filter((row) => row !== i);
    setMedicArr(newMedicineQuantity);
  };

  const orderMedicine = () => {
    setLoader(true);
    const orderMedicine = {
      prescriptionImg: prescriptionImg,
      medicineArrys: medicArr,
    };
    console.log(orderMedicine);

    const formData = new FormData();
    formData.append("prescription", prescriptionImg);
    formData.append("medicines", JSON.stringify(medicArr));
    fetch("https://api.bumrungraddiscover.com/api/add/order/medicine", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          console.log(data);
          setMedicArr([]);
          setprescriptionImg("");
          setLoader(false);
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="flex gap-4">
        <button onClick={()=> setPrescriptionState(1)} className={`px-4 py-2 rounded-full border border-blue ${prescriptionState === 1 && 'bg-blue text-white'}`}>Upload Prescription</button>
        <button onClick={()=> setPrescriptionState(2)} className={`px-4 py-2 rounded-full border border-blue ${prescriptionState === 2 && 'bg-blue text-white'}`}>No Prescription</button>
      </div>
      {prescriptionState === 1 ? (
        <div className="mt-4">
          <p className="mb-1 font-semibold text-sm">Upload Your Prescription</p>
          <TextField
            type="file"
            onChange={(e) => setprescriptionImg(e.target.files[0])}
            fullWidth
          />
        </div>
      ) : (
        <div>
          <div className="flex flex-col gap-y-4 md:flex-row md:justify-between md:items-center mt-5">
            <div>
              <TextField
                label="Medicine Name"
                fullWidth
                onChange={(e) => setMedicin(e.target.value)}
              />
            </div>
            <div>
              <TextField
                type="number"
                label="Enter Quantity"
                fullWidth
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div>
              <Button
                onClick={handleAddMedic}
                disabled={medicine === "" || quantity === ""}
                variant="contained"
              >
                Add
              </Button>
            </div>
          </div>
          <TableContainer component={Paper} className="mt-5">
            <Table sx={{ minWidth: 290 }} aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell>Medicine</TableCell>
                  <TableCell>Quantiy</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
                {medicArr.map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{row[0]}</TableCell>
                    <TableCell>{row[1]}</TableCell>
                    <TableCell>
                      <button
                        onClick={() => deleteOrderMedicine(row)}
                        className="px-4 py-2 bg-red rounded-xl text-white"
                      >
                        Delete
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
      <div className="mb-2 flex flex-col gap-6"></div>
      <div className="mt-4">
        <Button
          variant="contained"
          onClick={orderMedicine}
          disabled={medicArr.length === 0 && prescriptionImg === ""}
        >
          {loader ? "Loading..." : "Submit"}
        </Button>
      </div>
    </div>
  );
};

export default OrderMedicine;
