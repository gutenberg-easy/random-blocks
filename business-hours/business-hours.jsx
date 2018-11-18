/** @format */

/**
 * External dependencies
 */
const {
    Fragment,
    createElement
} = wp.element;

const {
    TextControl
} = wp.components;

const {
    registerBlockType
} = wp.blocks;

const {
    __
} = wp.i18n;


/**
 * Internal dependencies
 */

const HoursRow = function( props ) {
    return (
        <Fragment>
            <dt>
                { props.day }
            </dt>
            <dd>
                <TextControl
                    type="time"
                    label={ __( 'Opening', 'random-blocks' ) }
                    value={ props.opening }
                />
                &nbsp;&mdash;&nbsp;
                <TextControl
                    type="time"
                    label={ __( 'Closing', 'random-blocks' ) }
                    value={ props.closing }
                />
            </dd>
        </Fragment>
    );
};

const HoursList = function( props ) {
    return (
        <dl class="business-hours">
            <HoursRow
                day="Sun"
                { ...props.hours.Sun }
            />
            <HoursRow
                day="Mon"
                { ...props.hours.Mon }
            />
            <HoursRow
                day="Tue"
                { ...props.hours.Tue }
            />
            <HoursRow
                day="Wed"
                { ...props.hours.Wed }
            />
            <HoursRow
                day="Thu"
                { ...props.hours.Thu }
            />
            <HoursRow
                day="Fri"
                { ...props.hours.Fri }
            />
            <HoursRow
                day="Sat"
                { ...props.hours.Sat }
            />
        </dl>
    );
};

/**
 * Block Registrations:
 */

registerBlockType( 'random-blocks/business-hours', {
    title: __( 'Business Hours', 'random-blocks' ),
    icon: ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg> ),
    category: 'widgets',
    supports: {
        html: true,
    },

    attributes: {
        hours: {
            type: 'object',
            default: {
                Sun: {
                    opening: '',
                    closing: '',
                },
                Mon: {
                    opening: '8:00',
                    closing: '5:00',
                },
                Tue: {
                    opening: '',
                    closing: '',
                },
                Wed: {
                    opening: '',
                    closing: '',
                },
                Thu: {
                    opening: '',
                    closing: '',
                },
                Fri: {
                    opening: '',
                    closing: '',
                },
                Sat: {
                    opening: '',
                    closing: '',
                },
            },
        },
    },

    edit: function( props ) {
        return (
            <HoursList
                hours={ props.attributes.hours }
            />
        );
    },

    save: function() {
        return null;
    }
    } );
