import RkModal1 from "./RkModal1.jsx";
import RkModal2 from "./RkModal2.jsx";


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rkModal1_isActive: false,
      rkModal2_isActive: false
    };

    // binders
    this.toggleRkModal1 = this.toggleRkModal1.bind(this);
    this.toggleRkModal2 = this.toggleRkModal2.bind(this);
        
  }
  // hooks
  
  // methods
  toggleRkModal1(isActive) {
    this.setState({
      rkModal1_isActive: isActive
    }); 
  }

  toggleRkModal2(isActive) {
    this.setState({
      rkModal2_isActive: isActive
    }); 
  }

  render() {
    return (
      <div>
        <div class="row">    
          <div class="col-sm-12">
          <RkModal1 
          pr_active={this.state.rkModal1_isActive}
          pr_val_toggleModal={this.toggleRkModal1}         
           />
           <RkModal2 
           pr_active={this.state.rkModal2_isActive}
           pr_val_toggleModal={this.toggleRkModal2}
           />

            <button onClick={() => { this.toggleRkModal1(true) }}>RkModal1</button>
            <button onClick={() => { this.toggleRkModal2(true) }}>RkModal2</button>
          </div>
        </div>  
      </div>
    );
  }
}