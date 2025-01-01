
type headerProps = {
    label: string;
}

export const Header = ({label}: headerProps) => {
  return (
    <div className="w-full flex justify-center flex-col items-center gap-y-2">
      <h1 className="text-3xl">Auth</h1>
      <p className="text-muted-foreground text-sm font-light">{label}</p>
    </div>
  )
}


