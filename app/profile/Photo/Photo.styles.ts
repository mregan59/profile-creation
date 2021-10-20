import { dimensions, variables, spacing } from '../../theme/variables';
import { withStyles } from '@ui-kitten/components';
import { Photo } from './Photo.component';
export const ThemedPhoto = withStyles(Photo, (theme) => ({
    captionContainer: {
        paddingHorizontal: spacing(2),
        paddingVertical: spacing(1.5),
    },
}));
