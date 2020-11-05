import React from 'react';
import { TextField } from '@material-ui/core';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
//import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import firebase from '../firebase';
class login extends React.Component {
  constructor(props) {
    super(props);
    this.login=this.login.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.state={
      email:'',
      password:'',
    }
  }
  login(e){
    e.preventDefault();
    firebase.auth().signInwithEmailAndPassword(this.state.email,this.state.password).then((u) =>{
    }).catch((error)=>{
      console.log(error);
    });
  }
  handleChange(e) {
    this.setstate({[e.target.name]:e.target.value});
  }
  
  render() {

    return (
      <Formik
        initialValues={{

          email: '',
          password: '',

        }}
        validationSchema={Yup.object().shape({

          email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
          password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),

        })}
        onSubmit={fields => {
          alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
        }}
        render={({ errors, status, touched }) => (

          <div className="container">
            <div className="row">
              <div className="col m6">
                <h2 className="center-align">Login</h2>
                <div className="row">
                  <Form >
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField variant="outlined" required fullWidth margin="normal" id="email" label="Email Address"
                          name="email"value={this.state.email}onChange={this.handleChange} autoFocus 
                          className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField variant="outlined" required fullWidth margin="normal" id="password" label="Password"
                          name="password" type="password" autoFocus value={this.state.password}onChange={this.handleChange}
                          className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                        <ErrorMessage name="password" component="div" className="invalid-feedback" />
                      </Grid>


                    </Grid>
                    {/* <Grid item xs={12}>
                      <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                        label="Remember me"
                      />
                    </Grid> */}

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"

                    >
                      Login
          </Button>
                    <Grid container>
                      <Grid item xs>
                        <Link href="#" variant="body2">
                          Forgot password?
                </Link>
                      </Grid>
                      <Grid item>
                        <Link href="signup" variant="body2">
                          {"Don't have an account? Sign Up"}
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



export default login;