import { dimensions, variables, spacing } from '../../theme/variables';
import { withStyles } from '@ui-kitten/components';
import { Section } from './Section.component';
import { Platform } from 'react-native';
export const ThemedSection = withStyles(Section, (theme) => ({
    section: {
        width: '100%',
        // maxHeight: dimensions.safeAreaHeight,
        // height: Platform.OS == 'ios' ? '100%' : dimensions.height,
        borderRadius: variables.borderRadius3,
        overflow: 'hidden',
        position: 'relative',
        paddingHorizontal: spacing(3),
        paddingVertical: spacing(5),
    },
    fullHeight: {
        maxHeight: dimensions.safeAreaHeight,
        height: dimensions.height - 100, //Platform.OS == 'ios' ? '100%' : dimensions.height,
    },
    withToolbar: {
        paddingBottom: spacing(7),
    },
    noPadding: {
        paddingBottom: spacing(0),
        paddingTop: spacing(0),
        paddingRight: spacing(0),
        paddingLeft: spacing(0),
    },
    bottomToolbar: {
        position: 'absolute',
        bottom: spacing(0.5),
        right: spacing(0.5),
    },
    topToolbar: {
        position: 'absolute',
        top: spacing(0.5),
        right: spacing(0.5),
    },
    title: { marginBottom: spacing(2) },
}));
