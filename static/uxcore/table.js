let classnames = require('classnames');
let Table = require('uxcore-table');
let urlPrefix = './';


class Demo extends React.Component {

  constructor(props) {
    //super(props); // 报错，所以暂时注释掉。 2016-11-1
    this.state = {
      data: this.props.data
    }
  }

  render() {

    let me = this;
    let columns = [
      {
        dataKey: 'id',
        title: 'ID',
        width: 50,
        hidden: true
      },
      {
        dataKey: 'country',
        title: '国家国家国家国家',
        width: 200,
        ordered: true,
        type: 'money',
        delimiter: ','
      },
      {
        dataKey: 'city',
        title: '城市',
        width: 150
      },
      {
        dataKey: 'firstName',
        title: 'FristName'
      },
      {
        dataKey: 'lastName',
        title: 'LastName'
      },
      {
        dataKey: 'email',
        title: 'Email',
        width: 200,
        ordered: true
      }
    ];

    let renderProps = {
      height: 400,
      width: 800,
      showSearch: true,
      fetchUrl: urlPrefix + 'demo/data.json',
      jsxcolumns: columns,
      renderModel: 'tree',
      rowSelection: {
        onSelect: (checked, selectedRow, selectedRows) => {
          console.log("selectedRows:", selectedRows);
        },
        onSelectAll: () => {}
      }
    };
    return (<Table {...renderProps} ref="table" />);
  }
}

ReactDOM.render(<Demo />, document.getElementById('components-table-demo-tree'))