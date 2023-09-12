import React from 'react';
import Settings from './Settings';
import { connect } from 'react-redux';
import { onClickPageAC } from '../../redux/settings-reducer';

let mapStateToProps = (state) => {
    return {
        pages: state.settingsPage.pages
    }
}

let mapDispatchYoProps = (dispatch) => {
    return {
        onClickPage: (PageType) => {
            dispatch(onClickPageAC(PageType))
        }
    }
}

export default connect(mapStateToProps, mapDispatchYoProps)(Settings);