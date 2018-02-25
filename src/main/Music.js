import React from 'react';
import classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui-icons/MoreVert';
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
  }
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes, data } = this.props;

    return (
      <Paper
        className={classnames(classes.card, this.props.className)}
        elevation={2}
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
      </Paper>
    );
  }
}

export default withStyles(styles)(RecipeReviewCard);
