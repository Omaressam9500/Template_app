import {transform} from '@babel/core';
import React, {FC, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Modal,
  TouchableWithoutFeedback,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Fonts, Colors} from '../../constants/styleConstants';
import Touchable from '../touchables/Touchable';
const {height} = Dimensions.get('screen');
interface ISelectboxMulti {
  label: string;
  data: any;
  selectedValues:any;
  onClose?: (arg: any) => void;
}
const SelectboxMulti: FC<ISelectboxMulti> = ({label, data, selectedValues, onClose}) => {
  const [state, setstate] = useState({
    slide: new Animated.Value(0),
    visible: false,
    active: [],
    value: '',
  });
  
  useEffect(() => {
    setstate((old) => ({...old, active: [], value: ''}));
    if(selectedValues && selectedValues.length > 0){
      selectedValues.map((value)=>{
        const indexFromData = data.findIndex(x => x.id == value.id);
        selectHandler(value,indexFromData)
      })
    }
  }, [data]);
 
  const toggleSelect = () => {
    Animated.spring(state.slide, {
      toValue: state.visible ? 0 : 1,
      bounciness: 4,
      useNativeDriver: true,
    }).start();
    setstate((old) => ({...old, visible: !old.visible}));
    if (onClose) {
      onClose(state.active);
    }
  };
  const transform = [
    {
      translateY: state.slide.interpolate({
        inputRange: [0, 0, 1],
        outputRange: [0, height, 0],
      }),
    },
  ];

  const selectHandler = (item: any, index: any) => {
    
    let newState = state.active;
    // if no active options
    if (state.active.length === 0) {
      newState.push({'index':index,'title':item.title})
    }else{
      var indexVar = newState.findIndex(x => x !== undefined &&  x.title == item.title); 
      indexVar === -1 ? newState.push({'index':index,'title':item.title}) : delete newState[indexVar]
    }
    // remove undefined values
    var filtered = newState.filter(function(x) {
      return x !== undefined;
    });
    // set active options to state
    setstate((old) => ({...old, active: filtered}));
  };
  return (
    <>
      <Modal visible={state.visible} animationType="fade" transparent>
        <TouchableWithoutFeedback onPress={toggleSelect}>
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: '#00000069',
              padding: 15,
              alignItems: 'center',
            }}>
            <Animated.View
              style={[
                styles.modalContainer,
                {
                  transform,
                },
              ]}>
                <TouchableOpacity style={styles.closeButton} onPress={toggleSelect}>
                  <Icon name="times" size={17} color={Colors.grayDark} />
                </TouchableOpacity>
              <FlatList
                data={data}
                keyExtractor={(_, index) => index.toString()}
                contentContainerStyle={{padding: 20}}
                showsVerticalScrollIndicator={false}
                renderItem={({item, index}: any) => (
                  <TouchableOpacity key={index} onPress={() => selectHandler(item, index)}>
                    <View style={styles.listItem}>
                      <Text style={styles.title}>{item.title}</Text>
                      {
                      state?.active.map((f)=>{
                        return f.index == index  && (
                          <Icon name="check" key={f.index} size={17} color={Colors.grayDark} />
                        )
                      })
                      }
                    </View>
                  </TouchableOpacity>
                )}
              />
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <View style={styles.selectBoxContainer}>
        <Touchable onPress={toggleSelect}>
          <View style={styles.selectBoxContent}>
            <Text style={styles.title}>
              {
                state.active.length === 0 ? label :state.active.map((f)=>{
                  return f.title+' ,'
                })
              }
            </Text>
            <Icon name="sort-down" size={20} color={Colors.grayDark} />
          </View>
        </Touchable>
      </View>
    </>
  );
};

export default SelectboxMulti;

const styles = StyleSheet.create({
  selectBoxContainer: {
    marginBottom: 20,
    backgroundColor: "#F0F0F0",
    borderRadius: 15,
  },
  selectBoxContent: {
    paddingVertical: 23,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: Fonts.medium,
    color: Colors.grayDark,
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.white,
    width: '100%',
    minHeight: 100,
    maxHeight: height / 1.3,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingBottom: 30,
  },
  listItem: {
    paddingVertical: 15,
    borderBottomColor: Colors.gray,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeButton:{
    position:'absolute',
    right:-10,
    top:-10,
    height:32,
    width:32,
    borderRadius:32/2,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

elevation: 5,
  }
});
