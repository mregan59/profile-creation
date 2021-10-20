import { dimensions, variables, spacing } from '../../theme/variables';
import { withStyles } from '@ui-kitten/components';
import { TopBar } from './TopBar.component';
export const ThemedTopBar = withStyles(TopBar, (theme) => ({
    topBarContainer: {
        paddingBottom: spacing(2),
    },
    topBar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    badge: {
        backgroundColor: 'hotpink',
        borderRadius: 20,
        paddingTop: 2,
        paddingBottom: 3,
        paddingHorizontal: 8,
        marginTop: spacing(1),
    },
}));
