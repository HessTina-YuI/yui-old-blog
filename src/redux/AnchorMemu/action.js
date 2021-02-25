import { anchorMenuType } from '../constants';

export const initAnchor = () => ({type: anchorMenuType.INIT});

export const addAnchor = ({level, value}) => ({type: anchorMenuType.ADD, data: {level, value}});
