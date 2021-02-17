import {headerActionType} from '../constants'

export const linkToHome = () => {
    return {
        type: headerActionType.HOME
    }
}

export const linkToMenu = () => {
    return {
        type: headerActionType.MENU
    }
}