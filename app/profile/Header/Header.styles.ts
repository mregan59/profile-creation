import { dimensions, variables, spacing } from '../../theme/variables';
import { withStyles } from '@ui-kitten/components';
import { Header } from './Header.component';
export const ThemedHeader = withStyles(Header, (theme) => ({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    captionContainer: {
        padding: spacing(1),
    },
}));
