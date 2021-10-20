import { dimensions, variables, spacing } from '../../theme/variables';
import { withStyles } from '@ui-kitten/components';
import { ShortAnswer } from './ShortAnswer.component';
export const ThemedShortAnswer = withStyles(ShortAnswer, (theme) => ({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    label: {
        marginBottom: spacing(2),
    },
}));
