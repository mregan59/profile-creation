import { dimensions, variables, spacing } from '../../theme/variables';
import { withStyles } from '@ui-kitten/components';
import { QuickChat } from './QuickChat.component';
import { Platform } from 'react-native';
export const ThemedQuickChat = withStyles(QuickChat, (theme) => ({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    btnContainer: {
        position: Platform.OS == 'web' ? 'fixed' : 'relative',
        bottom: spacing(0),
        right: spacing(0),
    },
    btn: {
        position: 'absolute',
        bottom: spacing(2),
        right: spacing(2),
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 0.2,
        elevation: 6,
        backgroundColor: theme['background-basic-color-1'],
        borderColor: theme['background-basic-color-1'],
    },
    bottom: {
        //position: 'absolute',
        bottom: 0,
    },
    content: {
        //flex: 1,
        backgroundColor: 'hotpink',
    },
    header: {
        marginBottom: spacing(3),
    },
    sheetContainer: {
        padding: spacing(2),
        // backgroundColor: 'orange',
        // height: '25%',
        flex: 1,
    },
    slide: {
        // height: '100%',
        flex: 1,
        // backgroundColor: 'orange',
        // paddingTop: spacing(2),
    },
    input: {
        flex: 1,
        borderRadius: 50,
    },
    question: {
        paddingVertical: spacing(2),
        borderBottomWidth: 1,
        borderColor: theme['color-basic-300'],
    },
    aboutQuestionAnswer: {
        marginRight: 'auto',
        paddingTop: spacing(2),
    },
    questionsHeader: {
        paddingBottom: spacing(1),
    },
    closeBtn: {
        position: 'absolute',
        top: -3,
        left: -6,
    },
}));
