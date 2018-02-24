import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Player from './Player';
import Music from './Music';

const styles = theme => ({
  container: theme.mixins.gutters({
    width: 250,
    margin: 'auto',
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  }),
  player: theme.mixins.gutters({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 10,
    paddingBottom: 10
  }),
  songList: {
    paddingTop: 90,
    margin: 'auto',
    maxWidth: 740,
    textAlign: 'left'
  },
  music: {
    margin: 5,
    display: 'inline-block'
  }
});

class Main extends Component {
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
        <Paper className={classes.player} elevation={4}>
          <Player />
        </Paper>
        <div className={classes.songList}>
          {[1, 2, 3, 4, 5, 6, 7].map(index => <Music className={classes.music} key={index} />)}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Main);
