import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Container, Form, Grid, Message, Segment, Image } from 'semantic-ui-react';

/**
 * Signin page overrides the form’s submit event and call Meteor’s loginWithPassword().
 * Authentication errors modify the component’s state to be displayed
 */
export default class Login extends React.Component {

  // Initialize component state with properties for login and redirection.
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: '', redirectToReferer: false };
  }

  // Update the form controls each time the user interacts with them.
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  // Handle Signin submission using Meteor's account mechanism.
  submit = () => {
    const { email, password } = this.state;
    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '', redirectToReferer: true });
      }
    });
  }

  // Render the signin form.
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/landing' } };
    // const style variable for login box
    const gold = {
      backgroundColor: '#AA986D',
      borderRadius: '25px',
      padding: '31px',
    };
    // const style variable for UH Logo
    const image = {
      paddingTop: '25px',
    };
    // if correct authentication, redirect to page instead of login screen
    if (this.state.redirectToReferer) {
      return <Redirect to={from}/>;
    }
    // Otherwise return the Login form.
    return (
      // Form for user to login. Added Grid element to the lower portion of the form to allow alignment of text.
      <div className="login-background">
        <Container id="signin-page" centered>
          <Grid textAlign="center" verticalAlign="middle" centered columns={2} stackable>
            <Grid.Column>
              <div className="login">
                <Form onSubmit={this.submit}>
                  <Segment stacked className="test" style={gold}>
                    <Grid stackable>
                      <Grid.Column width={5} style={image}>
                        <Image src="/images/UH Logo.png" size='small' circular centered/>
                      </Grid.Column>
                      <Grid.Column width={10}>
                        <Form.Input
                          label="Email"
                          id="signin-form-email"
                          icon="user"
                          iconPosition="left"
                          name="email"
                          type="email"
                          placeholder="E-mail address"
                          onChange={this.handleChange}
                        />
                        <Form.Input
                          label="Password"
                          id="signin-form-password"
                          icon="lock"
                          iconPosition="left"
                          name="password"
                          placeholder="Password"
                          type="password"
                          onChange={this.handleChange}
                        />
                        <Grid>
                          <Grid.Column width={5}>
                            <Form.Button id="signin-form-submit" content="Login" size="medium"/>
                          </Grid.Column>
                          <Grid.Column width={11}>
                            <p className="login-register" style={{ paddingTop: '8px' }}>Need an account? Register <Link id='signup' to='/signup'>here </Link></p>
                          </Grid.Column>
                        </Grid>
                      </Grid.Column>
                    </Grid>
                  </Segment>
                </Form>
              </div>
              {this.state.error === '' ? (
                ''
              ) : (
                <Message
                  error
                  header="Login was not successful"
                  content={this.state.error}
                />
              )}
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

// Ensure that the React Router location object is available in case we need to redirect.
Login.propTypes = {
  location: PropTypes.object,
};
