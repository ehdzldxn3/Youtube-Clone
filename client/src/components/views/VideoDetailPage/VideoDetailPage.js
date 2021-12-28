import React, { useEffect, useState, } from 'react'
import { withRouter, } from 'react-router-dom'
import { Grid,Box} from '@material-ui/core'

function VideoDetailPage() {
    return (
        <div>
            <Grid container>
                <Grid item xs={12} sm={10}>
                    <Box bgcolor="info.main" color="info.contrastText" p={2}>
                        1
                    </Box>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Box bgcolor="info.main" color="info.contrastText" p={2}>
                        2
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default withRouter(VideoDetailPage)
