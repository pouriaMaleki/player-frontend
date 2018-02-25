import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import { CircularProgress } from 'material-ui/Progress';
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
  },
  card: {
    height: 50,
    lineHeight: '50px',
    padding: 10,
    cursor: 'pointer'
  }
});

class Main extends Component {
  state = {
    loading: false,
    songs: [],
    page: 0
  };

  componentDidMount() {
    this.getSongList(this.state.page + 1);
  }

  loadMore = () => {
    return this.getSongList(this.state.page + 1);
  }

  getSongList = page => {
    if (this.state.loading) {
      return;
    }
    this.setState({ loading: true });
    const promise = request('list/get', { page })
      .then(result => {
        if (page > this.state.page) {
          result = result.map((song, index) => ({ ...song, index }));
          this.setState({
            page,
            loading: false,
            songs: this.state.songs.concat(result)
          });
        }
      });
    return promise;
  }

  playListIndex = index => {
    if (index >= this.state.songs.length) {
      this.loadMore().then(() => this.playListIndex(index));
    }
    else {
      this.props.dispatch({ type: 'selectSong', data: this.state.songs[index] });
    }
  }

  render() {
    const { classes } = this.props;

    let songListElements = this.state.songs.map(song => (
      <Music
        className={classes.music}
        key={song.id}
        data={song}
      />
    ));

    songListElements = songListElements.concat(
      <Paper
        className={classes.card}
        elevation={2}
        key='loadmore'
        onClick={this.loadMore}
      >
        {
          this.state.loading ? <CircularProgress className={classes.progress} /> : 'Get more...'
        }
      </Paper>
    );

    return (
      <div>
        <Paper className={classes.player} elevation={4}>
          <Player playListIndex={this.playListIndex} />
        </Paper>
        <div className={classes.songList}>
          {songListElements}
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return store['main/player'].toObject();
}

export default connect(mapStateToProps, null)(withStyles(styles)(Main));
