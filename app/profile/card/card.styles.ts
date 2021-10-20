import { dimensions, variables, spacing } from '../../theme/variables';
import { withStyles } from '@ui-kitten/components';
import { Card } from './Card.component';
import { Platform } from 'react-native';

export const ThemedCard = withStyles(Card, (theme) => ({
    card: {
        width: dimensions.fullWidth,
        maxHeight: dimensions.safeAreaHeight,
        height: Platform.OS == 'ios' ? '100%' : dimensions.height,
        backgroundColor: 'white', //theme['color-basic-700'],
        borderRadius: variables.borderRadius4,
        overflow: 'hidden',
        position: 'relative',
    },
    otherCard: {
        width: dimensions.fullWidth,
        //  maxHeight: dimensions.safeAreaHeight,
        // maxHeight: dimensions.safeAreaHeight,
        // height: Platform.OS == 'ios' ? '100%' : dimensions.height,
        backgroundColor: 'white', //theme['color-basic-700'],
        borderRadius: variables.borderRadius4,
        overflow: 'hidden',
        position: 'relative',
    },
    image: {
        flex: 1,
        height: '100%',
        width: '100%',
        borderRadius: variables.borderRadius3,
    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    bottomBarContainer: {
        padding: spacing(2),
        paddingTop: 0,
        //backgroundColor: 'white',
    },
    bottomBarUnderlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '150%',

        // backgroundColor: 'rgba(255,255,255,.8)',
    },

    buttonContainer: {
        marginLeft: 'auto',
    },
    avatar: {
        marginRight: spacing(2),
        borderWidth: 2,
        borderColor: 'white',
    },
    info: {
        marginRight: spacing(1),
    },
    shortAnswerContainer: {
        padding: spacing(4),
        // paddingTop: 56 + spacing(4),
        // paddingBottom: 88 + spacing(4),
        background: theme['color-primary-100'],
        //height: '100%',
    },
    label: {
        marginBottom: spacing(1.5),
        color: theme['color-basic-700'],
    },
    content: {
        color: theme['color-basic-900'],
    },
}));
