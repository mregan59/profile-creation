import { dimensions, variables, spacing } from '../../theme/variables';
import { withStyles } from '@ui-kitten/components';
import { FavoriteThings } from './FavoriteThings.component';
export const ThemedFavoriteThings = withStyles(FavoriteThings, (theme) => ({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
}));
