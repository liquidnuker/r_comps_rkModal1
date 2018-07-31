export default class RkModal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: true
    };

    // binders
    
  }
  // hooks
  
  // methods
  toggleMainModal(e) {
    if (e.target.id === "bs4modal") {
      this.props.pr_val_toggleModal(false);
    }
  }
  
  render() {
    return (
      <div>
      
  <div id="bs4modal" className={ this.props.pr_active ? 'bs4modal rkmodal2 rkmodal_show': 'bs4modal rkmodal_hide' } data-backdrop="static" tabindex="-1" role="dialog"
    aria-labelledby="bs4modal-title" aria-hidden="true"
    onClick={(e) => { this.toggleMainModal(e) }}>
    <div className="bs4modal-dialog bs4modal-md" role="document">
      <div className={ this.state.animated ? 'bs4modal-content animated bounceIn': 'bs4modal-content' }>
        <div className="bs4modal-header">
          <h5 className="bs4modal-title">RkModal2 title</h5>
          <button type="button" className="btn btn1-01" data-dismiss="bs4modal" aria-label="Close"
          onClick={() => { this.props.pr_val_toggleModal(false) }}>
          <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="bs4modal-body">
          <div className="rkmodal2_prevholder">
            <div className="rkmodal2_svgholder">
              <svg xmlns="http://www.w3.org/2000/svg"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
            </div>
          </div>
          <p>modal content...
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div className="rkmodal2_nextholder">
            <div className="rkmodal2_svgholder">
              <svg xmlns="http://www.w3.org/2000/svg"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
            </div>
          </div>
        </div>
        <div className="bs4modal-footer">
          <button type="button" className="btn btn1-01" data-dismiss="bs4modal"
          onClick={() => { this.props.pr_val_toggleModal(false) }}>Close
          </button>
          <button type="button" className="btn btn1-01">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  
</div>
    );
  }
}