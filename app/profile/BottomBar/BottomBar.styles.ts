import { dimensions, variables, spacing } from '../../theme/variables';
import { withStyles } from '@ui-kitten/components';
import { BottomBar } from './BottomBar.component';
export const ThemedBottomBar = withStyles(BottomBar, (theme) => ({
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
    },
    container: {
        paddingHorizontal: spacing(2),
        paddingVertical: spacing(1.5),
        paddingTop: spacing(4),
        paddingBottom: spacing(4),
    },
    info: {
        //marginRight: spacing(2),
    },
    avatar: {
        borderWidth: 2,
        borderColor: theme['color-basic-100'],
        marginRight: spacing(2),
    },
}));
