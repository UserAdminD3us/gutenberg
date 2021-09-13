/**
 * External dependencies
 */
import { useNavigation, useRoute } from '@react-navigation/native';

/**
 * WordPress dependencies
 */
import { useMemo } from '@wordpress/element';

/**
 * Internal dependencies
 */
import LinkSettings from './';

const LinkSettingsScreen = ( props ) => {
	const navigation = useNavigation();
	const route = useRoute();
	const { url = '' } = props;
	const { inputValue = url } = route.params || {};

	const onLinkCellPressed = () => {
		// TODO(David): This navigates to the new component. Need to have proper
		// conditional and figure out how to navigate to `linkPicker` when "Custom"
		// is selected.
		if ( true ) {
			navigation.navigate( 'imageOptions', { inputValue } );
		} else {
			navigation.navigate( 'linkPicker', { inputValue } );
		}
	};

	return useMemo( () => {
		return (
			<LinkSettings
				onLinkCellPressed={
					props.hasPicker ? onLinkCellPressed : undefined
				}
				urlValue={ inputValue }
				{ ...props }
			/>
		);
	}, [ props, inputValue, navigation, route ] );
};

export default LinkSettingsScreen;
