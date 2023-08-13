import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";
// import {
//   flexRender,
//   getCoreRowModel,
//   useReactTable,
// } from "@tanstack/react-table";
import { useState } from "react";
import { loginCreds } from "../../Apis/TestApi";
import EditForm from "./Dashboard/login/EditForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  p: 4,
};

export default function Lists() {
  // const table = useReactTable({  column });
  const [open, setOpen] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [id, setId] = useState("");
  const handleOpen = (id) => {
    setId(id);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const { data, isLoading, error, isIdle } = useQuery({
    queryKey: ["testpost"],
    queryFn: loginCreds,
  });
  if (isIdle || isLoading || !data) {
    return <CircularProgress />;
  }
  if (error) {
    const countdownTimer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    if (countdown === 0) {
      clearTimeout(countdownTimer);
      window.location.reload();
    }
    return (
      <>
        <h1>ERROR......</h1>
        <p>Reloading in {countdown} seconds...</p>
      </>
    );
  }
  return (
    <div>
      <h1>List</h1>
      <ul>
        {data.map((item) => (
          <div key={item._id}>
            {item.userName} ||
            <Button onClick={() => handleOpen(item)}>edit user</Button>
          </div>
        ))}
      </ul>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit User
          </Typography>
          <EditForm id={id} setOpen={setOpen} />
        </Box>
      </Modal>
    </div>
  );
}
