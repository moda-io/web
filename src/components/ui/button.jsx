export function Button({ children, ...props }) {
  return (
    <button {...props} className={`p-3 rounded-lg font-medium ${props.className || ''}`}>
      {children}
    </button>
  );
}