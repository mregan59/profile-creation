import { dimensions, variables, spacing } from '../../theme/variables';
import { withStyles } from '@ui-kitten/components';
import { MultipleChoice } from './MultipleChoice.component';
export const ThemedMultipleChoice = withStyles(MultipleChoice, (theme) => ({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
}));
