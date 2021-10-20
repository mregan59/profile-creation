import { dimensions, variables, spacing } from '../../theme/variables';
import { withStyles } from '@ui-kitten/components';
import { BasicInfo } from './BasicInfo.component';
export const ThemedBasicInfo = withStyles(BasicInfo, (theme) => ({
    container: {
        paddingRight: 0,
        paddingLeft: 0,
        paddingTop: spacing(1.5),
    },
    scroller: {
        paddingLeft: spacing(2),
        maxHeight: 50,
    },
    scrollerContainer: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        paddingBottom: spacing(1.5),
        paddingTop: spacing(1.5),
        paddingRight: spacing(2),
        borderColor: theme['color-basic-transparent-200'],
    },
    primaryContainer: {
        borderRightWidth: 1,
        borderColor: theme['color-primary-transparent-200'],
        paddingHorizontal: spacing(2),
        paddingVertical: spacing(1),
    },
    firstPrimaryItem: {
        paddingLeft: spacing(1),
    },
    lastPrimaryItem: {
        borderRightWidth: 0,
    },
    secondaryContainer: {
        paddingHorizontal: spacing(3),
        paddingTop: spacing(3),
    },
    badge: {
        borderRadius: variables.borderRadius2,
        backgroundColor: theme['color-primary-transparent-100'],
        paddingHorizontal: spacing(2),
        paddingVertical: spacing(1),
    },
    highlight: {
        backgroundColor: theme['color-primary-500'],
    },
}));
