import { dimensions, variables, spacing } from '../../theme/variables';
import { withStyles } from '@ui-kitten/components';
import { VerticalScroller } from './VerticalScroller.component';
export const ThemedVerticalScroller = withStyles(VerticalScroller, (theme) => ({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
}));
