import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className='pa2'>
			<input
				className='pa3 ba bw2 b--black bg-light-blue'
				type='search'
				placeholder='search robots'
				onChange = {searchChange}
				style = {{
                	fontSize: '30px',
                }}
			/>
		</div>
	);
}

export default SearchBox