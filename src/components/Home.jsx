import RkModal1 from "./RkModal1.jsx";


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rkModal1_active: true
    };

    // binders
    this.toggleModal = this.toggleModal.bind(this);
        
  }
  // hooks
  
  // methods
  toggleModal(val) {
    this.setState({
      rkModal1_active: val
    }); 
  }

  render() {
    return (
      <div>
        <div class="row">    
          <div class="col-sm-12">
          <RkModal1 
          pr_active={this.state.rkModal1_active}
          pr_val_toggleModal={this.toggleModal}          
           />
            <button onClick={() => { this.toggleModal(true) }}>RkModal1</button>
          </div>
        </div>  
      </div>
    );
  }
}