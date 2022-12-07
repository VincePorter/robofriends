import React from 'react';

const Card = ({ id, name, email }) => {
	// const { id, name, email } = props;
	return (
		<div className='bg-washed-blue dib br3 pa3 ma2 tc grow bw2 shadow-5'>
			<img
				src={`https://robohash.org/${id}?size=200x200&set=set2`}
				alt='robots'
			/>
			<div>
				<h2>{name}</h2>
				<p>{email.toLowerCase()}</p>
			</div>
		</div>
	);
};

export default Card;
