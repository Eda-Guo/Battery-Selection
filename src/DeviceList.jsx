import ListItem from './ListItem';

function DeviceList({
  items,
  onAddItem,
}) {
  return (
    <div className="content">
      <ul className="items">
        { Object.values(items).map( item => (
          <li className="list_item" key={item.id}>
            <ListItem
              item={item}
              onAddItem = {onAddItem} 
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DeviceList;
