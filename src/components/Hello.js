import React from 'react'
import useStyles from './style'
import Typography from '@material-ui/core/Typography';

const Hello = () => {
  const styles = useStyles();
  return (
    <div className={styles.hello}>
      Hello!
      <Typography variant="caption" component="p" className='subtitle'>
        There
      </Typography>
    </div>
  )
}

export default Hello