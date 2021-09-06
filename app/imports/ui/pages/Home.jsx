import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Header, Segment, Button, Icon, List } from 'semantic-ui-react';

/** Renders the home page for when the user is logged in. */
class Home extends React.Component {
  render() {
    // Stylings for segment box borders
    const incomplete = {
      borderColor: '#E20000',
    };
    const complete = {
      borderColor: 'green',
    };
    // Checks if user completed check-in and vaccine upload
    function isComplete() {
      if (true) {
        return incomplete;
      }

      return complete;

    }
    return (
      <div className="home">
        <Grid stackable id='landing-page' textAlign='center' container>
          <Grid.Column width={8} floated="right">
            <Segment className="home-box" style={isComplete()}>
              <div align="left">
                <Header as='h3' textAlign='left'>Daily Health Check-In</Header>
                <p>Help keep our campus safe by completing your daily health check-in!</p>
                <List ordered>
                  <List.Item>
                        Check your symptoms.
                  </List.Item>
                  <List.Item>
                        Keep track of your symptoms every day.
                  </List.Item>
                </List>
                {/* CHANGE "/add" TO LINK TO CHECK SYMPTOMS PAGE */}
                <Button className="gold-button" circular inverted icon labelPosition='left'
                  as={NavLink} exact to="/add" key='check'>
                  <Icon name='heart outline'/>
                        Check Your Symptoms
                </Button>
              </div>
            </Segment>
            <Segment className="home-box" style={isComplete()}>
              <div align="left">
                <Header as='h3' textAlign='left'>Vaccine Status</Header>
                <p>You have not uploaded your vaccine information yet!</p>
                {/* CHANGE "/add" TO LINK TO UPLOAD VACCINE PAGE */}
                <Button className="gold-button" circular inverted icon labelPosition='left'
                  as={NavLink} exact to="/vaccine" key='check'>
                  <Icon name='upload'/>
                        Upload Your Vaccine Information
                </Button>
              </div>

            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment className="home-box">
              <div align="left">
                <Header as='h5' textAlign='left'>Get COVID-19 Testing</Header>
                <div>
                  <a href="https://www.clinicallabs.com/appt/uhtest/">UH Provided COVID Testing</a>
                </div>
                <div>
                  <a href="https://www.clinicallabs.com/appt/uhtest/">Other COVID Testing Programs</a>
                </div>
              </div>
            </Segment>
            <Segment className="home-box">
              <div align="left">
                <Header as='h5' textAlign='left'>Resources</Header>
                <div>
                  <a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">CDC Guidance</a>
                </div>
                <div>
                  <a href="https://health.hawaii.gov/coronavirusdisease2019/">Hawai&apos;i Guidance</a>
                </div>

              </div>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>

    );
  }
}

export default Home;
