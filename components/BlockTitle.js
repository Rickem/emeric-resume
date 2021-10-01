
export default function BlockTitle({ idx, title }) {
  return (
    <div className="mb-10">
      <div className="flex items-end space-x-2">
        <span className="border-2 p-1 text-xs text-gray-400 font-semibold"> { idx }.</span>
        <h2 className="text-3xl text-skin-inverted font-bold tracking-wide border-b-2"> { title }</h2>
      </div>
    </div>
  );
}
