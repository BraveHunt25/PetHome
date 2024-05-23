export function Button({ onClick, children }) {
  return (
    <button
      className="bg-[#78350f] px-4 py-1 rounded-md my-2 disabled:bg-[#78350f]"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
