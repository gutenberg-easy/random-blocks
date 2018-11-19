/** global businessHours */
/** @format */

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

import HoursRow from './HoursRow';

const HoursList = ( props ) => (
	<dl className={ 'business-hours ' + ( props.edit ? 'edit' : '' ) }>
		{
			Object.keys( props.hours ).map( function( day ) {
				return ( <HoursRow day={ day } { ...props } /> );
			} )
		}
	</dl>
);

export default HoursList;
