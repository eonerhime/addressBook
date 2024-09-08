import { Link } from "react-router-dom";

function LinkButton({ children, to, disabled,  onClick}) {
  const styles = "text-md text-slate-800 text-start hover:text-blue-600 hover:underline-none";

  if (to)
    return (
      <Link to={to} className={styles}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles}>
      {children}
    </button>
  )
}

export default LinkButton;
