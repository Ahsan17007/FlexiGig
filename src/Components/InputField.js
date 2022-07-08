import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  TouchableOpacityBase,
  TouchableOpacity,
} from 'react-native';
// ------------------------------------------
import colors from '../Assets/Colors/Index';
import Fonts from '../Assets/Fonts/Index';

const InputField = props => {
  const {
    leftIcon,
    rightIcon,
    placeholder,
    value,
    onChangeText,
    password,
    autoCapitalize,
    isRightIcon,
    labelStyle,
    keyBoardType,
    returnKeyType,
    onSubmitEditing,
    fieldRef,
    customStyle,
    rightIconOnPress,
    label,
    multiline,
    rightIconStyle,
    editable
  } = props;

  return (
    <View style={[styles.mainContainer, customStyle,]}>

      {
        leftIcon &&
        <View style={[styles.icon,{justifyContent: multiline ? 'flex-start' : 'center'}]}>
          <Image source={leftIcon} style={styles.leftIconStyle} />
        </View>
      }
      {
        label &&
        <Text>{label}</Text>
      }
      <View style={[styles.input, {
        width: (leftIcon && !isRightIcon) ? '88%' : (leftIcon && isRightIcon) ? '76%' : '100%',
        justifyContent: multiline ? 'flex-start' : 'center'
      }]}>
        <TextInput
          style={{ fontSize: 14, fontFamily: Fonts.Light }}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={password}
          placeholderTextColor={'gray'}
          autoCapitalize={autoCapitalize}
          keyboardType={keyBoardType}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          multiline={multiline}
          editable={editable}
          ref={fieldRef}
          blurOnSubmit={false}
        />
      </View>

      {
        isRightIcon &&
        <View style={styles.passwordIcon}>
          <TouchableOpacity
            onPress={rightIconOnPress}
            activeOpacity={0.4}
          >
            <Image source={rightIcon} style={[styles.rightIconStyle, rightIconStyle]} />
          </TouchableOpacity>
        </View>
      }

    </View>


  )
};

export default InputField;

const styles = StyleSheet.create({

  mainContainer: {
    flexDirection: 'row',
    backgroundColor: colors.textInput,
    height: 52,
    width: '100%',
    borderRadius: 11,
    paddingHorizontal: 8
  },
  icon: {
    height: '100%',
    width: '12%',
    paddingVertical:12,
    alignItems: 'center',
  },
  passwordIcon: {
    height: '100%',
    width: '12%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    color: colors.textSecondary,
    height: '100%',
  },
  leftIconStyle: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: colors.iconPrimary
  },
  rightIconStyle: {
    height: 22,
    width: 22,
    resizeMode: 'contain',
    tintColor: '#808080'
  },
});
