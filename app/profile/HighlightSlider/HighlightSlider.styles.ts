import { dimensions, variables, spacing } from '../../theme/variables';
import { withStyles } from '@ui-kitten/components';
import { Dimensions } from 'react-native';
import { HighlightSlider } from './HighlightSlider.component';
const { width } = Dimensions.get('window');
export const ThemedHighlightSlider = withStyles(HighlightSlider, (theme) => ({
    container: { flex: 1, backgroundColor: 'white', height: 400 },
    child: { width, justifyContent: 'center', height: 400 },
    text: { fontSize: width * 0.5, textAlign: 'center' },
    tab: {
        height: 192,
        alignItems: 'cπenter',
        justifyContent: 'center',
    },
    slide: {
        height: 192,
        backgroundColor: 'orange',
    },
}));
