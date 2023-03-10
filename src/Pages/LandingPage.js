
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { BaseAPI } from '../Components/Constants/API';
import Form from '../Components/Form/Form';



function LandingPage() {


  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues: { lead_types_id: "sandbox" },
    mode: 'all'
  });

  console.log(errors);
  console.log(error);
  const onSubmit = (data) => {
    setSuccess(null);
    setError(null);
    axios
      .post(BaseAPI, data)
      .then(function (response) {
        swal({
          title: response.data,
          icon: "success",
          button: "OK",
        });
        setSuccess(response);
      })
      .catch(function (error) {
        swal({
          title: error.message,
          icon: "error",
          button: "OK",
          dangerMode: true,
        });
        setError(error.message);
      });
  };

  console.log(success, error);



  return (
    <div className="App">
      <Form
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
      />

    </div>
  )


}

export default LandingPage
