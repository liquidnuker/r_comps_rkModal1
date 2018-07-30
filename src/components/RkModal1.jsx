export default class RkModal1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

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
      <div className={ this.props.pr_active ? 'bs4modal rkmodal_show': 'bs4modal rkmodal_hide' }
      data-backdrop="static" tabindex="-1" role="dialog"
      id="bs4modal"
      aria-labelledby="bs4modal_title" aria-hidden="true" 
      onClick={(e) => { this.toggleMainModal(e) }}>
      <div className="bs4modal-dialog bs4modal-md" role="document">
      <div className="bs4modal-content">
      <div className="bs4modal-header">
      <h5 className="bs4modal-title">RkModal1 title</h5>
      <button type="button" className="btn btn1-01" data-dismiss="bs4modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
      </button>
      </div>
      <div className="bs4modal-body">
      <p>modal content...</p>
      </div>
      <div className="bs4modal-footer">
      <button type="button" className="btn btn1-01" data-dismiss="bs4modal" 
      onClick={() => { this.props.pr_val_toggleModal(false) }}>Close</button>
      <button type="button" className="btn btn1-01">Save changes</button>
      </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}