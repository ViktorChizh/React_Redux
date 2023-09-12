import React from 'react';
import AvatarsPages from './AvatarsPages';
import * as axios from "axios";
import { connect } from "react-redux";
import { setCurrentPageAC, setUsersAC, setUsersTotalCountAC } from "../../redux/avatars-reducer";

class AvatarsContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <AvatarsPages totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
        />
    }
}
let mapStateToProps = (state) => {
    return {
        users: state.avatarsPage.users,
        pageSize: state.avatarsPage.pageSize,
        totalUsersCount: state.avatarsPage.totalUsersCount,
        currentPage: state.avatarsPage.currentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AvatarsContainer);;