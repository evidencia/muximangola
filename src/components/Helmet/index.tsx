interface HelmetProps{
  children: string;
  title: string;
}

export function Helmet({children, title}: HelmetProps) {
  document.title = "Food ordering app -"+ title;
  return (
    <div>{children}</div>
  )
}
