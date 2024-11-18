import ListGroup from "./components/ListGroup";

function App() {
  const items = [
    'New York_small',
    'New Jersi',
    'New York_big',
    'New Years',
    'New City'
  ]

  const handleSelectedItem = (item: string) => {
    console.log(item);
  }

  return <ListGroup items={items} heading="Cities" onSelectedItem={handleSelectedItem}/>
}

export default App;