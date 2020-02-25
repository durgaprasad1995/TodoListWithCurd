import { Table, Divider, Tag } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from "./store"


import { addAction } from './actions/addAction';
const mapStateToProps = state => ({
test:state.addReducers.result
   })
   const mapDispatchToProps = dispatch => ({
    addAction: () => dispatch(addAction())
   })
class TableList extends Component {

 
    componentDidMount(){
     this.props.addAction()
    }

    UNSAFE_componentWillReceiveProps(nextProps){
      console.log("hey", nextProps.test )
    }
 addFunction = () =>{
        console.log()
    }
    render(){
     
        const columns = [
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              render: text => <a>{text}</a>,
            },
            
            
            {
              title: 'Action',
              key: 'action',
              render: (text, record) => (
                <span>
                  <a>Edit {record.name}</a>
                  <Divider type="vertical" />
                  <a onClick={this.addFunction}>Delete</a>
                </span>
              ),
            },
          ];
          
          const data = [
            {
              key: '1',
              name: 'John Brown',
              age: 32,
              address: 'New York No. 1 Lake Park',
              tags: ['nice', 'developer'],
            },
            {
              key: '2',
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
              tags: ['loser'],
            },
            {
              key: '3',
              name: 'Joe Black',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
              tags: ['cool', 'teacher'],
            },
          ];
        return(
            <React.Fragment>
<Table columns={columns} dataSource={data} />
{/* <button onClick={this.addFunction}>Test redux action</button> */}
<pre>
 {
  JSON.stringify(this.props.test)
 }
</pre>
</React.Fragment>
        )
    }


}
export default connect(mapStateToProps, mapDispatchToProps)(TableList);
