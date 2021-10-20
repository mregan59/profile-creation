import { dimensions, variables, spacing } from '../../theme/variables';
import { withStyles } from '@ui-kitten/components';
import { Menu } from './Menu.component';
export const ThemedMenu = withStyles(Menu, (theme) => ({
    container: {
        paddingTop: spacing(2),
        flex: 1,
    },
    menu: {
        flex: 1,
        backgroundColor: theme['background-basic-color-1'],
        margin: 8,
    },
}));
