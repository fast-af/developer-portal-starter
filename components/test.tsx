// custom hook to get the current pathname in React

export default function usePathname() {
  const oldStyleLocation = window.location.href;
  const oldStylePath = window.location.pathname;
  return (
    <p>
      Old Style LOCATION: <strong>{oldStyleLocation}</strong>
      <br />
      Old Style PATH: <strong>{oldStylePath}</strong>
    </p>
  );
}
