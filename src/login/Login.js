import React, { Component } from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  container: theme.mixins.gutters({
    width: 250,
    margin: 'auto',
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  }),
  name: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  login: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

class Login extends Component {
  state = {
    name: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.container} elevation={4}>
          <form onSubmit={this.handleSubmit}>
            <TextField
              id='name'
              label='Name'
              className={classes.name}
              value={this.state.name}
              onChange={this.handleChange('name')}
              margin='normal'
            />
            <Button
              variant='raised'
              color='primary'
              className={classes.login}
              onClick={this.handleSubmit}
            >
              Login
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
