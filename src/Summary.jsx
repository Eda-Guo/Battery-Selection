import Typography from '@mui/material/Typography';

function Summary({
    items,
}) {
    return (
        <div className="content">
            <ul className="items">
                {Object.keys(items).map(item => (
                    <li className="list_item" key={item}>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {item} * {items[item]}
                        </Typography>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Summary;