import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { COLOR } from './constants';

function LayoutItem({
    index,
    name,
    displayWidth,
    displayHeight,
    actualWidth,
    actualHeight
}) {
    return (
        <Box
            key={name + index}
            sx={{
                display:"flex",
                padding:1,
                margin: 1,
                width: displayWidth,
                height: displayHeight,
                backgroundColor: COLOR[name],
                '&:hover': {
                    backgroundColor: COLOR[name],
                    opacity: [0.9, 0.8, 0.7],
                },
            }}
        >
            <Typography fontSize={12}>
                {name}
                <br />
                {actualWidth} * {actualHeight}
            </Typography>
        </Box>
    )
}

export default LayoutItem;