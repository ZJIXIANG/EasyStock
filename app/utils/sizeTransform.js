import {Dimensions} from 'react-native';

export const DESIGN_WINDOW_WIDTH = 750;
export const SCALE = Dimensions.get('window').width/DESIGN_WINDOW_WIDTH;
export const width = Dimensions.get('window').width

module.exports = {
    DESIGN_WINDOW_WIDTH:DESIGN_WINDOW_WIDTH,
    SCALE:SCALE,
    toDeviceSize(uiSize){
        return uiSize*SCALE
    },
    toDeviceIntegerSize(uiSize){//android lineHeight can't be float
        return Number((uiSize*SCALE).toFixed())
    },
    getImageSize(w,h,uiWidth){
        return {width:uiWidth*SCALE,height:h*uiWidth*SCALE/w};
    }
}