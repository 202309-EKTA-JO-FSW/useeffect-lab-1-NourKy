

export default function ShoppingList({ dogsList=[]}) {
  console.log(`dogsList`,dogsList)
  return (
    <div className="shopping-cart">
      <h3 style={{ textAlign: "center" }}>
        Cute Dogs
        <span role="img">
          🐶
        </span>
      </h3>
      {dogsList !== null && dogsList.map((dog,index) => (
        <img key={index}src={dog} alt="" />
      ))}
    </div>
  );
}
