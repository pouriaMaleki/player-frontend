import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import EqualizerIcon from 'material-ui-icons/Equalizer';
import Paper from 'material-ui/Paper';
import SongInfo from './SongInfo';

const styles = theme => ({
  card: {
    position: 'relative',
    direction: 'ltr',
    textAlign: 'left',
    width: 350,
    padding: 10,
    cursor: 'pointer'
  },
  moreIcon: {
    position: 'absolute',
    right: 0,
    top: 10
  },
  playingIcon: {
    position: 'absolute',
    right: 40,
    top: 23
  }
});

class Music extends React.Component {
  handleClick = () => {
    this.props.dispatch({ type: 'selectSong', data: this.props.data });
  };

  render() {
    const { classes, data } = this.props;

    let playing = null;
    if (this.props.nowPlaying) {
      playing = <EqualizerIcon className={classes.playingIcon} />;
    }

    return (
      <Paper
        className={classnames(classes.card, this.props.className)}
        elevation={2}
        onClick={this.handleClick}
      >
        <SongInfo
          isSmall
          title={data.songname}
          subTitle={data.artist}
          image={data.poster}
        />
        <IconButton className={classes.moreIcon}>
          <MoreVertIcon />
        </IconButton>
        {playing}
      </Paper>
    );
  }
}

function mapStateToProps(store) {
  return store['main/player'].toObject();
}

export default connect(mapStateToProps, null)(withStyles(styles)(Music));
