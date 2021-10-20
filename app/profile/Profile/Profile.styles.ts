import { dimensions, variables, spacing } from '../../theme/variables';
import { withStyles } from '@ui-kitten/components';
import { Profile } from './Profile.screen';
import { Platform } from 'react-native';
export const ThemedProfile = withStyles(Profile, (theme) => ({
    container: {
        flex: 1,
        width: '100%',
    },
}));
