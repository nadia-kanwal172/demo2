import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';


//import { ZoomIn } from '@material-ui/icons';


class signup extends React.Component {
  render() {
    return (

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string(),
           // .required('First Name is required'),
          lastName: Yup.string(),
          //  .required('Last Name is required'),
          email: Yup.string()
            .email('Email is invalid'),
           // .required('Email is required'),
          password: Yup.string()
            .min(6, 'Password must be at least 6 characters'),
            //.required('Password is required'),
        })}
        onSubmit={fields => {
          alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
        }}
        render={({ errors, status, touched }) => (


          <div className="container">
            <div className="row">
              <div className="col m6">
                <h2 className="center-align">SignUp</h2>
                <div className="row">
                  <Form >
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField variant="outlined" margin="normal" id="firstName" label="First Name"
                          name="firstname" autoFocus className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                        <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField variant="outlined" margin="normal" id="lasttName" label="Last Name"
                          name="lastname" autoFocus className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                        <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField variant="outlined" required fullWidth margin="normal" id="email" label="Email Address"
                          name="email" autoFocus className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField variant="outlined" required fullWidth margin="normal" id="password" label="Password"
                          name="password" type="password" autoFocus className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                        <ErrorMessage name="password" component="div" className="invalid-feedback" />
                      </Grid>


                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                        label="I want to receive inspiration, marketing promotions and updates via email."
                      />
                    </Grid>

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"

                    >
                      Sign Up
          </Button>
                    <Grid container justify="flex-end">
                      <Grid item>
                        <Link href="login" variant="body2">
                          Already have an account? Sign in
              </Link>
                      </Grid>
                    </Grid>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        )}
      />
    )
  }
}

export default signup;