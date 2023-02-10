import { View, Text } from 'react-native'
import React from 'react'
import {styles} from './style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {THEME} from '../constants/theme';

const TabIcons = ({focused, name, icon}) => {

    return (
    <View style={styles.tabItem}>
        <FontAwesomeIcon icon={icon} size={20} color={ focused ? THEME.colors.primary : "#505050" } />
        <Text style={[styles.tabText, {color: focused ? THEME.colors.primary : "#505050"}]}>{name}</Text>
    </View>
    )
}

export default TabIcons