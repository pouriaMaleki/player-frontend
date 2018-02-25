import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import PauseIcon from 'material-ui-icons/Pause';
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
  componentWillReceiveProps(nextProps) {
    let shouldUpdateAudioSource = !this.props.playingInfo;
    if (this.props.playingInfo) {
      shouldUpdateAudioSource = this.props.playingInfo.id !== nextProps.playingInfo.id;
    }

    if (nextProps.playing) {
      if (shouldUpdateAudioSource) {
        this.audio.src = nextProps.playingInfo.mp3_low;
      }
      this.audio.play();
    }
    else {
      this.audio.pause();
    }
  }

  audio = new window.Audio();

  handleClick = () => {
    this.props.dispatch({ type: 'toggle' });
  }

  render() {
    const { classes, playingInfo } = this.props;

    let icon = <PlayArrowIcon />;
    if (this.props.playing) {
      icon = <PauseIcon />;
    }

    if (!playingInfo) {
      return (<Typography variant='headline' component='h4'>Music Player</Typography>);
    }

    return (
      <div className={classes.container}>
        <Button
          variant='fab'
          color='primary'
          className={classes.play}
          onClick={this.handleClick}
        >
          {icon}
        </Button>
        <SongInfo
          className={classes.songInfo}
          title={playingInfo.songname}
          subTitle={playingInfo.artist}
          image={playingInfo.poster}
        />
      </div>
    );
  }
}

function mapStateToProps(store) {
  return store['main/player'].toObject();
}

export default connect(mapStateToProps, null)(withStyles(styles)(Player));
