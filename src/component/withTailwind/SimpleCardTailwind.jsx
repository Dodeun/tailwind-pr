const SimpleCardTailwind = () => {
	return (
		<div className="bg-gray-50 border border-blue-600 rounded-lg p-4 max-w-xs shadow-md font-sans mx-auto my-4">
			<div className="text-lg mb-2" style={{ fontWeight: 600 }}>
				Card Title
			</div>
			<div className="text-gray-600 text-sm mb-3">
				This is a short description of the card to showcase how tailwind
				compare to regular CSS
			</div>
			<button className="mr-2 px-3 py-1.5 text-sm rounded border-none cursor-pointer bg-blue-600 text-white hover:bg-blue-700 transition">
				Action 1
			</button>
			<button className="px-3 py-1.5 text-sm rounded border-none cursor-pointer bg-gray-600 text-white hover:bg-gray-700 transition">
				Action 2
			</button>
		</div>
	);
};

export default SimpleCardTailwind;
