import { Alert, Snackbar } from '@mui/material';

export default function Snack({ isOpen, handleClose = Function.prototype }) {
  return (
    <div>
      <Snackbar open={isOpen} onClose={handleClose} autoHideDuration={3000}>
        <Alert severity='success'>Товар добавлен в корзину</Alert>
      </Snackbar>
    </div>
  );
}
