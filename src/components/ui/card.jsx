export function Card({ children, ...props }) {
  return <div {...props} className={`p-6 rounded-xl bg-white shadow ${props.className || ''}`}>{children}</div>;
}

export function CardContent({ children, ...props }) {
  return <div {...props}>{children}</div>;
}