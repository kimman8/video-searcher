import ListGroup from './components/ListGroup';

function App() {
  let items = ['New York', 'London', 'Tokyo', 'Paris', 'Los Angeles'];
  let moreItems = ['Berlin', 'Sydney', 'Rome', 'Moscow', 'Toronto'];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="cities"
        onSelectItem={handleSelectItem}
      />
      <ListGroup
        items={moreItems}
        heading="more cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
