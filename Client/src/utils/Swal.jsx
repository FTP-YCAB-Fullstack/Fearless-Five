import React from 'react';
import Swal from 'sweetalert2'

const Alert = (status, message) => {
    if (status === 'success') {
        return Swal.fire({
            icon: 'success',
            title: 'Success',
            text: message,
          })
    } else if (status === 'error') {
        return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message,
          })
    }
}

export default Alert;