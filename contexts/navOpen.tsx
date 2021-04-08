import React, { createContext, useState } from 'react';

interface ContextValue {
	open: boolean;
	toggle: () => void;
}

export const NavOpenContext = createContext<ContextValue>({} as ContextValue);

export default function NavProvider({ children }) {
	const [open, setOpen] = useState(true);

	function toggle() {
		setOpen(!open);
	}

	return (
		<NavOpenContext.Provider value={{ open, toggle }}>
			{children}
		</NavOpenContext.Provider>
	);
}
