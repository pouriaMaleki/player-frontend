import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Player from './Player';
import Music from './Music';
import request from '../request';

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
    maxWidth: 760,
    textAlign: 'left'
  },
  music: {
    margin: 5,
    display: 'inline-block'
  }
});

class Main extends Component {
  state = {
    songs: []
  };

  componentDidMount() {
    request('list/get', { page: 1 }).then(result => this.setState({ songs: this.state.songs.concat(result) }));
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.player} elevation={4}>
          <Player />
        </Paper>
        <div className={classes.songList}>
          {this.state.songs.map(song => <Music className={classes.music} key={song.id} data={song} />)}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Main);
