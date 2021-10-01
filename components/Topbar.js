import ThemeSwitch from "./ThemeSwitch";

export default function Topbar() {
  return (
    <header>
      <div className="p-5 flex items-center justify-between">
        Rickem
        <ThemeSwitch />
      </div>
    </header>
  );
}
