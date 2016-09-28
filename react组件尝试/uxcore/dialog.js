const {
  Form,
  Dialog,
  Button
} = Uxcore;
const {
  Constants,
  FormRowTitle,
  FormRow,
  InputFormField,
  SelectFormField
} = Form;

class BasicDemo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          agreementMain: {
            name : "test",
            buCode : "BD"
          },
            visible: false
        };
    }
    showModal() {
        this.setState({
          visible: true
        });
    }
    handleOk() {
        console.log('点击了确定');
        this.setState({
          visible: false
        });
    }
    handleCancel() {
        this.setState({
          visible: false
        });
    }
    render(){
        return (
            <div>
             
                <Button onClick={this.showModal.bind(this)}>显示对话框</Button>
                <Dialog title="第一个 Dialog"
                    visible={this.state.visible}
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel.bind(this)}>
                    <p>对话框的内容</p>
                    <p>对话框的内容</p>
                    <p>对话框的内容</p>
                </Dialog>
            </div>
        );
    }
}

ReactDOM.render(
    <BasicDemo />, document.getElementById('container'));