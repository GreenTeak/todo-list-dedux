import UserInfo from "../containers/userInfoContainer"
import TodoList from "../containers/todoContainer"
import React from 'react';
class App extends React.PureComponent {
    render() {
        return <div>
            <UserInfo />
            <TodoList />
        </div>
    }
}
export default App;