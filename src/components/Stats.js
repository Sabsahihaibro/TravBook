export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items for your trip 🧳</em>
      </p>
    );

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>You got everything. Ready to go ✈️</em>
      ) : (
        <em>
          💼 You have {numItems} items in your list, and you already packed{" "}
          {packedItems} items ({percentage}%)
        </em>
      )}
    </footer>
  );
}
