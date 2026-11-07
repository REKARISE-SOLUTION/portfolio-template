const stats = [["4", "Sample projects"], ["1", "Sample qualification"], ["Your", "Experience"], ["Your", "Specialties"]];
function Stats() {
  return <aside className="stats" aria-label="Portfolio highlights">{stats.map(([value, label]) => <div className="stat" key={label}><strong>{value}</strong><p>{label}</p></div>)}</aside>;
}
export default Stats;
