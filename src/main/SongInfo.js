import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import classnames from 'classnames';

const styles = theme => ({
  container: theme.mixins.gutters({
    position: 'relative'
  }),
  albumArt: {
    display: 'inline-block',
    verticalAlign: 'top',
    width: 60,
    height: 60
  },
  smallAlbumArt: {
    marginTop: 5,
    width: 40,
    height: 40
  },
  songInfo: {
    display: 'inline-block',
    textAlign: 'left',
    margin: 5,
    marginLeft: 10
  }
});

class Player extends Component {
  render() {
    const { classes, isSmall } = this.props;

    return (
      <div className={classnames(classes.container, this.props.className)}>
        <Avatar
          src={this.props.image}
          className={classnames(classes.albumArt, {
            [classes.smallAlbumArt]: isSmall
          })}
        />
        <div className={classes.songInfo}>
          <Typography {...(isSmall ? {} : { variant: 'headline' })} component={isSmall ? 'h4' : 'h3'}>
            {this.props.title}
          </Typography>
          <Typography component='p'>
            {this.props.subTitle}
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Player);
