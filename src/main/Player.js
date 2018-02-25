import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import SongInfo from './SongInfo';

const styles = theme => ({
  container: theme.mixins.gutters({
    position: 'relative',
    margin: 'auto',
    maxWidth: 800,
    height: 60
  }),
  play: {
    position: 'absolute',
    right: 0
  },
  songInfo: {
    position: 'absolute',
    left: 0
  }
});

class Player extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Button variant='fab' color='primary' aria-label='add' className={classes.play}>
          <PlayArrowIcon />
        </Button>
        <SongInfo className={classes.songInfo} />
      </div>
    );
  }
}

export default withStyles(styles)(Player);
