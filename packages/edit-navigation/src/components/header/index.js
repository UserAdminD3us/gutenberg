/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { NavigableToolbar } from '@wordpress/block-editor';
import { useViewportMatch } from '@wordpress/compose';
import { PinnedItems } from '@wordpress/interface';

/**
 * Internal dependencies
 */
import MenuActions from './actions';
import NewButton from './new-button';
import SaveButton from './save-button';
import UndoButton from './undo-button';
import RedoButton from './redo-button';

export default function Header( {
	isMenuSelected,
	menus,
	isPending,
	navigationPost,
} ) {
	const isMediumViewport = useViewportMatch( 'medium' );

	return (
		<div className="edit-navigation-header">
			{ isMediumViewport && (
				<div className="edit-navigation-header__toolbar-wrapper">
					<h1 className="edit-navigation-header__title">
						{ __( 'Navigation' ) }
					</h1>
					<NavigableToolbar
						className="edit-navigation-header__toolbar"
						aria-label={ __( 'Document tools' ) }
					>
						<UndoButton />
						<RedoButton />
					</NavigableToolbar>
				</div>
			) }
			{ isMenuSelected && (
				<MenuActions menus={ menus } isLoading={ isPending } />
			) }
			{ isMenuSelected && (
				<div className="edit-navigation-header__actions">
					<NewButton menus={ menus } />
					<SaveButton navigationPost={ navigationPost } />
					<PinnedItems.Slot scope="core/edit-navigation" />
				</div>
			) }
		</div>
	);
}
